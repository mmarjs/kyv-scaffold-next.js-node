const express = require("express");
const router = express.Router();
const typeObjectId = require("mongodb").ObjectId;

const tokenauth = require("../../middleware/tokenauth");
const { Candidate } = require("../entities/candidate");
const { IssueResponse } = require("../entities/issueResponse");
const { IssueResponseSuggestion } = require("../entities/issueResponseSuggestion");
const { User } = require("../entities/user");

const { newIssueResponseSuggestionEmail } = require("../services/emails");

router.get("/check-for-duplicates", async (req, res, next) => {
    let allIssueResponses = await IssueResponseSuggestion.find();
    let responseCounter = {};
    let duplicateCounter = {};
    for (var i = 0; i < allIssueResponses.length; i++) {
        let candidateSlug = allIssueResponses[i]["candidateSlug"];
        let issueSlug = allIssueResponses[i]["issueSlug"];

        if (responseCounter[candidateSlug + "-" + issueSlug] !== undefined) {
            console.log("Got a duplicate : " + (candidateSlug + "-" + issueSlug));
            responseCounter[candidateSlug + "-" + issueSlug] =
                responseCounter[candidateSlug + "-" + issueSlug] + 1;
            duplicateCounter[candidateSlug + "-" + issueSlug] =
                responseCounter[candidateSlug + "-" + issueSlug] + 1;
        } else {
            responseCounter[candidateSlug + "-" + issueSlug] = 1;
        }
    }

    res.send(duplicateCounter);
});

// Internal / Admin use: Get the list of candidates and enrich with their status of answered question or not
router.get("/candidates-answered-issues-status", tokenauth, async (req, res, next) => {
    let candidatesListOriginal = await Candidate.find();
    let candidatesList = JSON.parse(JSON.stringify(candidatesListOriginal));
    // res.send({
    //   len: candidatesList.length,
    //   candidatesList,
    // })

    for (var i = 0; i < candidatesList.length; i++) {
        // for (var i = 0; i < 2; i++) {
        console.log(candidatesList[i].slug);
        let thisCandisIssueResponses = await IssueResponseSuggestion.find({
            candidateSlug: candidatesList[i].slug,
        });
        console.log(thisCandisIssueResponses);

        // Add value for each issue ting
        candidatesList[i]["general"] = false;
        candidatesList[i]["housing"] = false;
        candidatesList[i]["climate-action"] = false;
        candidatesList[i]["transportation"] = false;
        candidatesList[i]["taxes-cost-of-living"] = false;
        candidatesList[i]["policing-and-safety"] = false;

        for (var j = 0; j < thisCandisIssueResponses.length; j++) {
            candidatesList[i][thisCandisIssueResponses[j].issueSlug] = true;
        }
    }

    res.send(
        // len: candidatesList.length,
        candidatesList
    );
});

// NOT IN USE: This EP let's candidates submit issue responses that don't need approval
router.post("/candidate-issue-response", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "User") {
        // Check if the body includes issueSlug and issueResponse
        if (req.body && req.body.issueSlug && req.body.issueResponse) {
            // Get the user's DB object
            let candidateAdminUser = await User.find({ _id: user.id });
            // Check if the user has a candidate attached to them
            if (candidateAdminUser.length > 0 && candidateAdminUser[0]?.candidate) {
                // Get the Candidate's Ward
                let candidateData = await Candidate.find({
                    slug: candidateAdminUser[0]?.candidate,
                });
                // Save the Candidate's issueResponse
                let newIssueResponseObject = {
                    issueResponse: req.body.issueResponse,
                    issueSlug: req.body.issueSlug,
                    candidate: candidateData[0]._id,
                    candidateSlug: candidateData[0].slug,
                    wardSlug: candidateData[0].ward,
                };
                let newIssueResponse = await IssueResponse.create(newIssueResponseObject);
                res.send(newIssueResponse._id);
            } else {
                res.send("User found, but no Candidate attached.");
            }
        } else {
            res.send("Issue Slug or Issue Response are missing.");
        }
    } else {
        res.send("Not a valid user.");
    }
});

// IN USE: This lets candidates submit a issue response for approval
router.post("/candidate-issue-response-for-approval", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "User") {
        // Check if the body includes issueSlug and issueResponse
        if (req.body && req.body.issueSlug && req.body.issueResponse) {
            // Get the user's DB object
            let candidateAdminUser = await User.find({ _id: user.id });
            // Check if the user has a candidate attached to them
            if (candidateAdminUser.length > 0 && candidateAdminUser[0]?.candidate) {
                // Get the Candidate's Ward
                let candidateData = await Candidate.find({
                    slug: candidateAdminUser[0]?.candidate,
                });
                // Save the Candidate's issueResponse
                let newIssueResponseSuggestionObject = {
                    userEmail: candidateAdminUser[0].email,
                    issueResponse: req.body.issueResponse,
                    issueSlug: req.body.issueSlug,
                    candidate: candidateData[0]._id,
                    candidateSlug: candidateData[0].slug,
                    wardSlug: candidateData[0].ward,
                    fullname: candidateData[0].fullname,
                    question: req.body.issueQuestion,
                };
                let newIssueResponseSuggestionResponse = await IssueResponseSuggestion.create(
                    newIssueResponseSuggestionObject
                );
                newIssueResponseSuggestionEmail(newIssueResponseSuggestionObject);
                res.send(newIssueResponseSuggestionResponse._id);
            } else {
                res.send("User found, but no Candidate attached.");
            }
        } else {
            res.send("Issue Slug or Issue Response are missing.");
        }
    } else {
        res.send("Not a valid user.");
    }
});

router.get("/update-to-objectid", tokenauth, async (req, res, next) => {
    let allIssueResponseSuggestions = await IssueResponseSuggestion.find();
    for (var i = 0; i < 3; i++) {
        // for (var i = 0; i < allIssueResponseSuggestions.length; i++) {
        // console.log(allIssueResponseSuggestions[i]);
        console.log(typeof allIssueResponseSuggestions[i].candidate);

        // await IssueResponseSuggestion.findByIdAndUpdate(allIssueResponseSuggestions[i]._id, {
        //     candidate: new typeObjectId(allIssueResponseSuggestions[i].candidate),
        // });
        await IssueResponseSuggestion.findByIdAndUpdate(allIssueResponseSuggestions[i]._id, {
            candidate: new typeObjectId(allIssueResponseSuggestions[i].candidate),
        });
    }
    res.send("done");
});

// IN USE: This lets candidates edit a issue response for approval
router.post("/candidate-issue-response-for-approval-edit", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "User") {
        // find the issue by issueResponse
        console.log(req.body);
        let issueResponseToEdit = await IssueResponseSuggestion.findByIdAndUpdate(
            req.body.issueResponseId,
            {
                issueResponse: req.body.issueResponse,
            }
        );

        console.log(issueResponseToEdit);
        res.send("Success");

        // Check if the body includes issueSlug and issueResponse
        // if (req.body && req.body.issueSlug && req.body.issueResponse) {
        //   // Get the user's DB object
        //   let candidateAdminUser = await User.find({ _id: user.id })
        //   // Check if the user has a candidate attached to them
        //   if (candidateAdminUser.length > 0 && candidateAdminUser[0]?.candidate) {
        //     // Get the Candidate's Ward
        //     let candidateData = await Candidate.find({
        //       slug: candidateAdminUser[0]?.candidate,
        //     })
        //     // Save the Candidate's issueResponse
        //     let newIssueResponseSuggestionObject = {
        //       userEmail: candidateAdminUser[0].email,
        //       issueResponse: req.body.issueResponse,
        //       issueSlug: req.body.issueSlug,
        //       candidate: candidateData[0]._id,
        //       candidateSlug: candidateData[0].slug,
        //       wardSlug: candidateData[0].ward,
        //       fullname: candidateData[0].fullname,
        //       question: req.body.issueQuestion,
        //     }
        //     let newIssueResponseSuggestionResponse =
        //       await IssueResponseSuggestion.create(
        //         newIssueResponseSuggestionObject
        //       )
        //     newIssueResponseSuggestionEmail(newIssueResponseSuggestionObject)
        //     res.send(newIssueResponseSuggestionResponse._id)
        //   } else {
        //     res.send('User found, but no Candidate attached.')
        //   }
        // } else {
        //   res.send('Issue Slug or Issue Response are missing.')
        // }
    } else {
        res.send("Not a valid user.");
    }
});

// ADMIN: This endpoint just gets all the issueResponseSuggestions
router.get("/admin-issue-responses", tokenauth, async (req, res, next) => {
    const allIssueSubmissions = await IssueResponseSuggestion.find().sort({
        modifiedon: -1,
    });
    res.send(allIssueSubmissions);
});

// ADMIN: Used when looking at one candidate's profile and seeing all issue responses ready for approval
router.get(
    "/admin-issue-responses-by-candidate-for-approval",
    tokenauth,
    async (req, res, next) => {
        // check for a slug in the query
        console.log(req.query);
        if (req.query && req.query.slug) {
            // Need to find all the issueResponseSuggestions associated with this slug
            let candidatesIssueResponseSuggestionsOriginal = await IssueResponseSuggestion.find({
                candidateSlug: req.query.slug,
                // approved: { $nin: [true] },
                // approved: false,
            });

            let candidatesIssueResponseSuggestions = JSON.parse(
                JSON.stringify(candidatesIssueResponseSuggestionsOriginal)
            );

            // let candidateInfo = await Candidate.find({ slug: req.query.slug })
            // let candidateType =
            //   candidateInfo.ward === 'toronto-mayor' ? 'mayor' : 'councillor'

            for (var i = 0; i < candidatesIssueResponseSuggestions.length; i++) {
                console.log(candidatesIssueResponseSuggestions[i]);
                let currentIssueResponseSlug = candidatesIssueResponseSuggestions[i].issueSlug;
                let currentIssue = {};

                for (var j = 0; j < issues.length; j++) {
                    if (issues[j]["slug"] === currentIssueResponseSlug) currentIssue = issues[j];
                }

                if (candidatesIssueResponseSuggestions[i].wardSlug === "toronto-mayor") {
                    candidatesIssueResponseSuggestions[i]["question"] = currentIssue?.questionMayor;
                } else {
                    candidatesIssueResponseSuggestions[i]["question"] = currentIssue?.questionCandi;
                }
            }

            res.send(candidatesIssueResponseSuggestions);
        } else {
            res.send("Please provide a slug");
        }
    }
);

router.post("/admin-issue-responses-by-candidate-approval", tokenauth, async (req, res, next) => {
    console.log(req.query);
    if (req.query && req.query.issueResponseId) {
        await IssueResponseSuggestion.findByIdAndUpdate(req.query.issueResponseId, {
            approved: true,
        });
        res.send("Updated issue response id for: " + req.query.issueResponseId);
    } else {
        res.send("No issue reseponse ID provided");
    }
});

// USER: This is the endpoint that we'll use to get issues and the responses for a specific candidates
router.get("/candidate-issue-responses", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "User") {
        // Get the user's DB object
        let candidateAdminUser = await User.find({ _id: user.id });
        console.log(candidateAdminUser);
        // Check if the user has a candidate attached to them
        if (candidateAdminUser.length > 0 && candidateAdminUser[0]?.candidate) {
            let issuesObject = JSON.parse(JSON.stringify(issues));
            // TODO: Get the candidates's issue responses and inject into the response object

            // let candidatesIssueResponses = await IssueResponse.find({
            let candidatesIssueResponses = await IssueResponseSuggestion.find({
                candidateSlug: candidateAdminUser[0].candidate,
            });
            console.log(candidatesIssueResponses);

            let issuesAndResponsesObject = mergeIssuesAndCandidateResponses(
                issuesObject,
                candidatesIssueResponses
            );

            res.send(issuesAndResponsesObject);
        } else {
            res.send("User found, but no Candidate attached.");
        }
    } else {
        res.send("Not a valid user.");
    }
});

router.get("/by-issue-and-ward", async (req, res) => {
    let wardSlug = req.query.wardSlug;
    let issueSlug = req.query.issueSlug;
    console.log(issueSlug, wardSlug);
    let resultIssueResponses = await IssueResponseSuggestion.find({
        wardSlug,
        issueSlug,
        approved2: true,
    }).populate("candidate", ["fullname", "profilePhotoUrl"]);
    let finalResultIssueResponses = JSON.parse(JSON.stringify(resultIssueResponses));
    let arrangedResponse = orderArrayByLastname(finalResultIssueResponses);
    res.send(arrangedResponse);
});

module.exports = router;

const issues = [
    // NON FEATURED ISSUE QUESTION
    {
        name: "General Question",
        shortName: "General",
        questionCandi:
            "If elected as a City Councillor, what would be your top priority, and how will you address it?",
        questionMayor:
            "If elected as Toronto’s Mayor, what would be your top priority, and how will you address it?",
        number: 0,
        slug: "general",
        description: `n/A`,
        img: "n/A",
        featured: false,
    },
    // HOUSING
    {
        name: "Housing",
        shortName: "Housing",
        questionCandi: "What should the next City Council do about housing in Toronto? Why?",
        questionMayor: "What should the next Mayor do about housing in Toronto? Why?",
        number: 1,
        slug: "housing",
        description: `n/A`,
        img: "https://www.publicdomainpictures.net/pictures/10000/velka/2185-1271903185cWfH.jpg",
        featured: true,
    },
    // CLIMATE ACTION
    {
        name: "Climate Action",
        shortName: "Climate Action",
        questionCandi:
            "What should the next City Council do to mitigate the effects of climate change and reduce its progression? How?",
        questionMayor:
            "What should the next Mayor do to mitigate the effects of climate change and reduce its progression? How?",
        number: 2,
        slug: "climate-action",
        description: `n/A`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/SunnysidebeachlookingatHumberShores.jpg/1600px-SunnysidebeachlookingatHumberShores.jpg?20200929022133",
        featured: true,
    },
    // GETTING AROUND THE CITY
    {
        name: "Getting Around the City",
        shortName: "Getting Around",
        questionCandi:
            "What should the next City Council do to improve the ability of the people of Toronto to get around safely and efficiently? How?",
        questionMayor:
            "What should the next Mayor do to improve the ability of the people of Toronto to get around safely and efficiently? How?",
        number: 3,
        slug: "transportation",
        description: `n/A`,
        img: "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/issues-transportation.png?alt=media&token=1b8b6f20-5701-45f3-a4fe-58a453f50191",
        featured: true,
    },
    // Taxes and Spending, and the Cost of Living
    {
        name: `Taxes and Spending, and the Cost of Living`,
        shortName: "Taxes & Cost of Living",
        questionCandi:
            "Should the next City Council change anything about municipal taxes or city services? Why?",
        questionMayor:
            "Should the next Mayor change anything about municipal taxes or city services? Why?",
        number: 4,
        slug: "taxes-cost-of-living",
        description: `n/A`,
        img: "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/issues-city-council.png?alt=media&token=c96a2e06-66a2-4f60-93e9-eb4afe2f8a8d",
        featured: true,
    },
    // Policing and Community Safety
    {
        name: "Policing and Community Safety",
        shortName: "Policing & Safety",
        questionCandi:
            "What should the next City Council do about the City of Toronto’s approach to policing its residents and making our communities safe? Why?",
        questionMayor:
            "What should the next Mayor do about the City of Toronto’s approach to policing its residents and making our communities safe and welcoming? Why?",
        number: 5,
        slug: "policing-and-safety",
        description: `n/A`,
        img: "https://firebasestorage.googleapis.com/v0/b/kyv-staging.appspot.com/o/issues-city-services.png?alt=media&token=5c89cbfc-005f-4ca6-9c9a-df795f85213b",
        featured: true,
    },
];

const mergeIssuesAndCandidateResponses = (issues, responses) => {
    for (var i = 0; i < issues.length; i++) {
        for (var j = 0; j < responses.length; j++) {
            if (issues[i]?.slug == responses[j]?.issueSlug) {
                issues[i].response = responses[j]?.issueResponse;
                issues[i].approved = responses[j]?.approved ? true : false;
                issues[i].approved2 = responses[j]?.approved2 ? true : false;
                issues[i].responseId = responses[j]?._id;
            }
        }
    }

    return issues;
};

const orderArrayByLastname = (array) => {
    let responseArray = JSON.parse(JSON.stringify(array));
    for (var i = 0; i < responseArray.length; i++) {
        let currFullnameArr = responseArray[i].candidate.fullname.split(" ");
        let currFullnameArrLen = currFullnameArr.length;
        responseArray[i]["lastname"] = currFullnameArr[currFullnameArrLen - 1];
        delete responseArray[i].candidate["_id"];
    }

    responseArray.sort(function (a, b) {
        var nameA = a.lastname.toLowerCase(),
            nameB = b.lastname.toLowerCase();
        if (nameA < nameB)
            // sort string ascending
            return -1;
        if (nameA > nameB) return 1;
        return 0;
    });

    return responseArray;
};
