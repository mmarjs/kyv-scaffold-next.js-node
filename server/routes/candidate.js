const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

const { Candidate } = require("../entities/candidate");
const { User } = require("../entities/user");
const { IssueResponseSuggestion } = require("../entities/issueResponseSuggestion");
const {
    candidateProfileUpdateEmail,
    candidateSubmitIssueResponses,
} = require("../services/emails");

const tokenauth = require("../../middleware/tokenauth");

// Get all candidates
router.get("/", async (req, res, next) => {
    let candidates = await Candidate.find();
    let shuffledArray = orderArrayByLastname(candidates);
    res.send(shuffledArray);
});

// Get all candidates by ward
router.get("/by-ward/:slug", async (req, res, next) => {
    const { slug } = req.params;
    let candidatesQuery = await Candidate.find({ ward: slug || "" });
    let candidates = JSON.parse(JSON.stringify(candidatesQuery));
    // Need to add candidates' approved issue responses
    for (var i = 0; i < candidates.length; i++) {
        let thisCandisIssueResponses = await IssueResponseSuggestion.find({
            candidateSlug: candidates[i].slug,
            approved2: true,
        });
        if (thisCandisIssueResponses.length > 0) {
            candidates[i].issueResponses = thisCandisIssueResponses;
        }
    }
    let shuffledArray = orderArrayByLastname(candidates);
    res.send(shuffledArray);
});

// Get all mayoral candidates
router.get("/mayoral", async (req, res, next) => {
    let candidates = await Candidate.find({ ward: "toronto-mayor" });
    let shuffledArray = orderArrayByLastname(candidates);
    res.send(shuffledArray);
});

// Create a new candidate
router.post("/", tokenauth, async (req, res, next) => {
    console.log(req.body);
    let tempCandidateBody = req.body;
    tempCandidateBody.slug = req.body.fullname
        .toString()
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/—/g, "-")
        .replace(/'/g, "")
        .replace(/\./g, "");

    Candidate.create(tempCandidateBody, (err, newCandidateResponse) => {
        if (err) {
            console.log(err);
            res.send("Error: Likely this is a duplicate item.");
        } else {
            console.log(newCandidateResponse);
            res.send(newCandidateResponse._id);
        }
    });
});

// Update a candidate
router.post("/profile-update-admin", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // res.send('Return true.')

    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "Admin") {
        // Get the candidate's user ID
        let candidateUser = await Candidate.find({
            slug: req.body.slug,
        });
        if (candidateUser.length > 0) {
            let newObj = JSON.parse(JSON.stringify(req.body));
            delete newObj.slug;
            console.log(newObj);
            let newCandidateProfileUpdateAdmin = await Candidate.findByIdAndUpdate(
                candidateUser[0]._id,
                req.body
            );
            res.send(newCandidateProfileUpdateAdmin);
        } else {
            res.send("No Candidate found associated to this slug.");
        }
    } else {
        res.send("Not a valid user.");
    }
});

router.get("/approve-candidate-profile", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "Admin") {
        console.log(req.query);
        let candidateArray = await Candidate.find({ slug: req.query.slug });
        await Candidate.findByIdAndUpdate(candidateArray[0]._id, {
            internalApproval: true,
        });
        res.send("Updated candidate.");
    } else {
        res.send("Not a valid user.");
    }
});

router.get("/lock-and-publish-candidate-profile", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    console.log(req.user);
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "Admin") {
        console.log(req.query);
        if (req.query.slug) {
            // Find the candidate associated to this slug
            let candidateArray = await Candidate.find({ slug: req.query.slug });
            if (candidateArray.length > 0) {
                await Candidate.findByIdAndUpdate(candidateArray[0]._id, {
                    finalApproval: true,
                });

                let candidatesIssueResponsesArray = await IssueResponseSuggestion.find({
                    candidateSlug: req.query.slug,
                });

                for (var i = 0; i < candidatesIssueResponsesArray.length; i++) {
                    await IssueResponseSuggestion.findByIdAndUpdate(
                        candidatesIssueResponsesArray[i]._id,
                        { approved2: true }
                    );
                }

                res.send("Locked and published candidate & issue responses.");
            }
        } else {
            res.send("No candidate slug provided");
        }
    } else {
        res.send("Not a valid user.");
    }
});

// Get all candidate users
router.get("/candidate-users", async (req, res, next) => {
    let candidateUsers = await User.find({
        roles: "User",
    });
    // let shuffledArray = orderArrayByLastname(candidates)
    res.send(candidateUsers);
});

// Get candidate's admin profile (candidate user's my-profile-page)
router.get("/candidate-admin-profile", tokenauth, async (req, res, next) => {
    // console.log(req.user ? req.user : 'No user obj')
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "User") {
        // Get the user's DB object
        let candidateAdminUser = await User.find({ _id: user.id });
        // console.log(candidateAdminUser)
        // Check if the user has a candidate attached to them
        if (candidateAdminUser.length > 0 && candidateAdminUser[0]?.candidate) {
            // Get the candidates's information
            let candidateBody = await Candidate.find({
                slug: candidateAdminUser[0]?.candidate,
            });
            // console.log(candidateBody)
            // Send the Candidates's info
            if (candidateBody.length > 0) {
                res.send(candidateBody[0]);
            } else {
                res.send("User's candidate slug found, but no candidate found.");
            }
        } else {
            res.send("User found, but no Candidate attached.");
        }
    } else {
        res.send("Not a valid user.");
    }
});

router.post("/candidate-submits-issue-responses", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "User") {
        // Get the user's DB object
        let candidateAdminUser = await User.find({ _id: user.id });
        // Check if the user has a candidate attached to them
        if (candidateAdminUser.length > 0 && candidateAdminUser[0]?.candidate) {
            // Get the candidates's information
            let candidateBody = await Candidate.findOne({
                slug: candidateAdminUser[0]?.candidate,
            });
            console.log(candidateBody);
            // Set the candidate's flag for profile submit to "true"
            if (candidateBody) {
                console.log(candidateBody);
                candidateBody.submitIssueResponses = true;
                await candidateBody.save();
                candidateSubmitIssueResponses(candidateBody.fullname, candidateBody.ward);
                res.send(candidateBody);
            } else {
                res.send("User's candidate slug found, but no candidate found.");
            }
        } else {
            res.send("User found, but no Candidate attached.");
        }
    } else {
        res.send("Not a valid user.");
    }
});

module.exports = router;

const orderArrayByLastname = (array) => {
    let responseArray = JSON.parse(JSON.stringify(array));
    for (var i = 0; i < responseArray.length; i++) {
        let currFullnameArr = responseArray[i].fullname.split(" ");
        let currFullnameArrLen = currFullnameArr.length;
        responseArray[i]["lastname"] = currFullnameArr[currFullnameArrLen - 1];
        delete responseArray[i]["_id"];
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

// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1))
//     const temp = array[i]
//     array[i] = array[j]
//     array[j] = temp
//   }

//   return array
// }
