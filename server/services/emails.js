var nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    maxConnections: 1,
    secure: false,
    auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
    },
});

module.exports = {
    newIssueResponseSuggestionEmail: (body) => {
        return new Promise((resolve, reject) => {
            console.log(body);
            const mailOptions = {
                to: body.userEmail,
                bcc: "yash@publicsquare.io",
                from: '"Know Your Vote 2022" <candidate@knowyourvote.to>', // sender address
                subject: "Know Your Vote: Content Updated for " + body.fullname,
                html: `
          <p>Update for: ${body.fullname} - ${
                    (body.wardSlug === "toronto-mayor" ? "" : "Candidate for") +
                    " " +
                    getOfficialWardName(body.wardSlug)
                }</p>
          <p>You are receiving this email because an update to your Know Your Vote T.O. profile was made.</p>
          <p>Question:</p>
          <p>${body.question}</p>
          <p>Your Response:</p>
          <p>${body.issueResponse}</p>
          <p>Please note that your responses are only saved as a draft at the moment. You will have to submit your responses by hitting the ‘submit responses’ icon so as to allow us to publish your candidate profile on the Know Your Vote T.O. website.</p>
          <br />
          <p>Thank you,</p>
          <p>The Know Your Vote TO - 2022 Team</p>
        `,
            };

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    const success = "Email to User sucessfully sent";
                    resolve(success);
                }
            });
        });
    },
    candidateProfileUpdateEmail: (updateObject, name, ward, to, admin) => {
        return new Promise((resolve, reject) => {
            const mailOptions = {
                to: to,
                bcc: `yash@publicsquare.io, candidate@knowyourvote.to`,
                from: '"Know Your Vote 2022" <candidate@knowyourvote.to>', // sender address
                subject: "Know Your Vote: Content Submission",
                html: candidateProfileUpdateEmailBuilder(updateObject, name, ward),
            };

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    const success = "Email to User sucessfully sent";
                    resolve(success);
                }
            });
        });
    },
    candidateSubmitIssueResponses: (candidate, ward) => {
        return new Promise((resolve, reject) => {
            const mailOptions = {
                to: "candidate@knowyourvote.to, chris@masslbp.com",
                bcc: "yash@publicsquare.io",
                from: '"Know Your Vote 2022" <candidate@knowyourvote.to>', // sender address
                subject: "Know Your Vote: Candidate Submit Profile",
                html: `
          <p>Candidate has just submit their profile for review</p>
          <p>Candidate: ${candidate} - ${ward}</p>
        `,
            };

            transporter.sendMail(mailOptions, (error) => {
                if (error) {
                    console.log(error);
                    reject(error);
                } else {
                    const success = "Email to User sucessfully sent";
                    resolve(success);
                }
            });
        });
    },
};

const candidateProfileUpdateEmailBuilder = (updateObject, name, ward) => {
    let theHtml = `
  <p>Update for: ${name} - ${
        (ward === "toronto-mayor" ? "" : "Candidate for") + " " + getOfficialWardName(ward)
    }</p>
  <p>You are receiving this email because an update to your Know Your Vote T.O. profile was submitted.</p>

  `;

    let items = Object.keys(updateObject);

    for (var i = 0; i < items.length; i++) {
        if (items[i] != "profilePhotoUrl") {
            theHtml += `<p>${getChangeItemName(items[i])}: ${updateObject[items[i]]}</p>`;
        } else {
            theHtml += `<p>Updated photo:</p>
      <img src="${updateObject[items[i]]}" style="width:90px;height:120px;object-fit:cover;" />
      `;
        }
    }

    theHtml += `
    <p>Please look out for a “Content Review” email from us within the next three days. We will need your final approval before publishing your candidate profile on the website. No further edits are allowed after your content goes live.</p>
    <br />
    <p>Thank you,</p>
    <p>The Know Your Vote TO - 2022 Team</p>
  `;

    return theHtml;
};

const getTagOfficialName = (slug) => {
    switch (slug) {
        case "general":
            return "General";

        case "housing":
            return "Housing";

        case "climate-action":
            return "Climate Action";

        case "transportation":
            return "Getting Around the City (Transportation)";

        case "taxes-cost-of-living":
            return "Taxes and Spending, and the Cost of Living";

        case "policing-and-safety":
            return "Policing and Community Safety";

        default:
            return slug;
    }
};

const getOfficialWardName = (slug) => {
    const tempWard = wards.find((ward) => ward.slug == slug);
    return tempWard?.officialName;
};

const getChangeItemName = (slug) => {
    switch (slug) {
        case "publicEmail":
            return "Public Email";

        case "phonePrimary":
            return "Phone Primary";

        case "websiteUrl":
            return "Website URL";

        case "facebookUrl":
            return "Facebook";

        case "twitterUrl":
            return "Twitter";

        case "instagramUrl":
            return "Instagram";

        case "tiktokUrl":
            return "TikTok";

        case "linkedinUrl":
            return "LinkedIn";

        default:
            return slug;
    }
};

const wards = [
    {
        officialName: "Etobicoke North",
        number: 1,
        mapLatLong: "",
        slug: "etobicoke-north",
        description: "",
    },
    {
        officialName: "Etobicoke Centre",
        number: 2,
        mapLatLong: "",
        slug: "etobicoke-centre",
        description: "",
    },
    {
        officialName: "Etobicoke-Lakeshore",
        number: 3,
        mapLatLong: "",
        slug: "etobicoke-lakeshore",
        description: "",
    },
    {
        officialName: "Parkdale-High Park",
        number: 4,
        mapLatLong: "",
        slug: "parkdale-high-park",
        description: "",
    },
    {
        officialName: "York South-Weston",
        number: 5,
        mapLatLong: "",
        slug: "york-south-weston",
        description: "",
    },
    {
        officialName: "York Centre",
        number: 6,
        mapLatLong: "",
        slug: "york-centre",
        description: "",
    },
    {
        officialName: "Humber River-Black Creek",
        number: 7,
        mapLatLong: "",
        slug: "humber-river-black-creek",
        description: "",
    },
    {
        officialName: "Eglinton-Lawrence",
        number: 8,
        mapLatLong: "",
        slug: "eglinton-lawrence",
        description: "",
    },
    {
        officialName: "Davenport",
        number: 9,
        mapLatLong: "",
        slug: "davenport",
        description: "",
    },
    {
        officialName: "Spadina-Fort York",
        number: 10,
        mapLatLong: "",
        slug: "spadina-fort-york",
        description: "",
    },
    {
        officialName: "University-Rosedale",
        number: 11,
        mapLatLong: "",
        slug: "university-rosedale",
        description: "",
    },
    {
        officialName: "Toronto-St. Paul's",
        number: 12,
        mapLatLong: "",
        slug: "toronto-st-pauls",
        description: "",
    },
    {
        officialName: "Toronto Centre",
        number: 13,
        mapLatLong: "",
        slug: "toronto-centre",
        description: "",
    },
    {
        officialName: "Toronto-Danforth",
        number: 14,
        mapLatLong: "",
        slug: "toronto-danforth",
        description: "",
    },
    {
        officialName: "Don Valley West",
        number: 15,
        mapLatLong: "",
        slug: "don-valley-west",
        description: "",
    },
    {
        officialName: "Don Valley East",
        number: 16,
        mapLatLong: "",
        slug: "don-valley-east",
        description: "",
    },
    {
        officialName: "Don Valley North",
        number: 17,
        mapLatLong: "",
        slug: "don-valley-north",
        description: "",
    },
    {
        officialName: "Willowdale",
        number: 18,
        mapLatLong: "",
        slug: "willowdale",
        description: "",
    },
    {
        officialName: "Beaches-East York",
        number: 19,
        mapLatLong: "",
        slug: "beaches-east-york",
        description: "",
    },
    {
        officialName: "Scarborough Southwest",
        number: 20,
        mapLatLong: "",
        slug: "scarborough-southwest",
        description: "",
    },
    {
        officialName: "Scarborough Centre",
        number: 21,
        mapLatLong: "",
        slug: "scarborough-centre",
        description: "",
    },
    {
        officialName: "Scarborough-Agincourt",
        number: 22,
        mapLatLong: "",
        slug: "scarborough-agincourt",
        description: "",
    },
    {
        officialName: "Scarborough North",
        number: 23,
        mapLatLong: "",
        slug: "scarborough-north",
        description: "",
    },
    {
        officialName: "Scarborough-Guildwood",
        number: 24,
        mapLatLong: "",
        slug: "scarborough-guildwood",
        description: "",
    },
    {
        officialName: "Scarborough-Rouge Park",
        number: 25,
        mapLatLong: "",
        slug: "scarborough-rouge-park",
        description: "",
    },
    {
        officialName: "Mayoral Candidate",
        number: 0,
        mapLatLong: "",
        slug: "toronto-mayor",
        description: "",
    },
];
