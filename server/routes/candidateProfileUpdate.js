const express = require("express");
const router = express.Router();
const typeObjectId = require("mongodb").ObjectId;

const { Candidate } = require("../entities/candidate");
const { CandidateProfileUpdate } = require("../entities/candidateProfileUpdate");
const { User } = require("../entities/user");

const tokenauth = require("../../middleware/tokenauth");
const { candidateProfileUpdateEmail } = require("../services/emails");

router.get("/update-to-objectid", tokenauth, async (req, res, next) => {
    let allCandidateProfileUpdates = await CandidateProfileUpdate.find();
    // for (var i = 0; i < 3; i++) {
    for (var i = 0; i < allCandidateProfileUpdates.length; i++) {
        console.log(typeof allCandidateProfileUpdates[i].candidate);

        await CandidateProfileUpdate.findByIdAndUpdate(allCandidateProfileUpdates[i]._id, {
            candidate: new typeObjectId(allCandidateProfileUpdates[i].candidate),
        });
    }
    res.send("done");
});
// Candidate: Create a new a candidate profile
router.post("/profile-update", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    // Check if the user is type "user" i.e. is a Candidate
    if (user.roles && user.roles[0] == "User") {
        // TODO: Check if the body of the object has at least one of the values in the schema

        // Get the user's DB object
        let candidateAdminUser = await User.find({ _id: user.id });
        // Check if the user has a candidate attached to them
        if (candidateAdminUser.length > 0 && candidateAdminUser[0]?.candidate) {
            // Get the candidate's user ID
            let candidateUser = await Candidate.find({
                slug: candidateAdminUser[0]?.candidate,
            });
            if (candidateUser.length > 0) {
                candidateProfileUpdateEmail(
                    req.body,
                    candidateUser[0].fullname,
                    candidateUser[0].ward,
                    candidateAdminUser[0].email
                );
                req.body.candidate = candidateUser[0]?._id;
                let newCandidateProfileUpdate = await CandidateProfileUpdate.create(req.body);
                res.send(newCandidateProfileUpdate._id);
            } else {
                res.send("No Candidate found associated to this user.");
            }
        } else {
            res.send("User found, but no Candidate attached.");
        }
    } else {
        res.send("Not a valid user.");
    }
});

// ADMIN: gets all the profile update requests for a specific candidate
router.get("/profile-updates-by-candidate", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    const candidateSlug = req.query.slug;
    if (user.roles && user.roles[0] === "Admin") {
        if (candidateSlug) {
            // Get the candidate
            let searchedCandidates = await Candidate.find({
                slug: candidateSlug,
            });
            if (searchedCandidates && searchedCandidates.length > 0) {
                let candidateProfileUpdateRequests = await CandidateProfileUpdate.find({
                    candidate: searchedCandidates[0]._id,
                });
                res.send(candidateProfileUpdateRequests);
            } else {
                res.send("No Candidate found");
            }
        } else {
            res.send("No Candidate Slug provided");
        }
    } else {
        res.send("Invalid user role.");
    }
});

// ADMIN: approve a specific update request for a specific candidate
router.get("/approve-profile-updates-by-candidate", tokenauth, async (req, res, next) => {
    let user = req.user || {};
    const updateId = req.query.updateId;
    if (user.roles && user.roles[0] === "Admin") {
        if (updateId) {
            let updateToApproveArray = await CandidateProfileUpdate.find({
                _id: updateId,
            });

            if (updateToApproveArray.length > 0) {
                let updateToApprove = updateToApproveArray[0];

                console.log(updateToApprove);
                // Update the actual candidate object
                let updateCandidateObj = {};

                if (updateToApprove.phonePrimary)
                    updateCandidateObj.phonePrimary = updateToApprove?.phonePrimary;
                if (updateToApprove.websiteUrl)
                    updateCandidateObj.websiteUrl = updateToApprove?.websiteUrl;
                if (updateToApprove.profilePhotoUrl)
                    updateCandidateObj.profilePhotoUrl = updateToApprove?.profilePhotoUrl;
                if (updateToApprove.facebookUrl)
                    updateCandidateObj.facebookUrl = updateToApprove?.facebookUrl;
                if (updateToApprove.twitterUrl)
                    updateCandidateObj.twitterUrl = updateToApprove?.twitterUrl;
                if (updateToApprove.instagramUrl)
                    updateCandidateObj.instagramUrl = updateToApprove?.instagramUrl;
                if (updateToApprove.tiktokUrl)
                    updateCandidateObj.tiktokUrl = updateToApprove?.tiktokUrl;
                if (updateToApprove.linkedinUrl)
                    updateCandidateObj.linkedinUrl = updateToApprove?.linkedinUrl;

                console.log(updateCandidateObj);
                // Update the Candidate's entry in the DB
                await Candidate.findByIdAndUpdate(updateToApprove.candidate, updateCandidateObj);
                await CandidateProfileUpdate.findByIdAndUpdate(updateId, {
                    approved: true,
                });

                res.send("Success.");
            } else {
                res.send("No Candidate Profile Update found.");
            }

            //   // Get the candidate
            //   let searchedCandidates = await Candidate.find({
            //     slug: candidateSlug,
            //   })
            //   if (searchedCandidates && searchedCandidates.length > 0) {
            //     // let candidateProfileUpdateRequests =
            //     //   await CandidateProfileUpdate.find({
            //     //     candidate: searchedCandidates[0]._id,
            //     //   })
            //     // console.log(candidateProfileUpdateRequests)
            //     res.send(candidateProfileUpdateRequests)
            //   } else {
            //     res.send('No Candidate found')
            //   }
        } else {
            res.send("No Candidate Slug provided");
        }
    } else {
        res.send("Invalid user role.");
    }
});

// ADMIN: This endpoint just gets all the issueResponseSuggestions
router.get("/admin-profile-updates", tokenauth, async (req, res, next) => {
    const allProfileUpdates = await CandidateProfileUpdate.find()
        .sort({
            modifiedon: -1,
        })
        .populate("candidate", ["slug", "fullname", "ward"]);
    res.send(allProfileUpdates);
});

module.exports = router;
