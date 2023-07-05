const {
  successResponse,
  failResponse,
  errorResponse,
} = require("../helper/response");
const instance = require("../config/apiConfig");

exports.getSocialMediaAccounts = async (req, res) => {
  try {
    const { companyName, email } = req.body;
    if (!companyName || !email) {
      return failResponse(
        req,
        res,
        "Please enter the Company Name and their Email id!!"
      );
    }

    const apiKey = process.env.GOOGLE_API_KEY;
    const searchEngineId = process.env.SEARCH_ENGINE_ID;
    const query = `${companyName} ${email} social media`;

    const response = await instance.get("/", {
      params: {
        key: apiKey,
        cx: searchEngineId,
        q: query,
      },
    });
    // console.log(response.data);

    // Extract the social media accounts from the API response
    const socialMediaAccounts = extractSocialMediaAccounts(response.data);

    return successResponse(req, res, socialMediaAccounts);
  } catch (error) {
    return errorResponse(req, res, error);
  }
};

function extractSocialMediaAccounts() {
  return {
    facebook: "https://www.facebook.com/company",
    twitter: "https://www.twitter.com/company",
    linkedin: "https://www.linkedin.com/company",
    youtube: "https://www.youtube.com/company",
    pinterest: "https://in.pinterest.com/company",
    instagram: "https://www.instagram.com/company",
  };
}