import React, { useState } from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import instance from "./api/config";

function App() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [socialMediaAccounts, setSocialMediaAccounts] = useState({});

  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await instance.post("/search/getSocialMediaAccounts", {
        companyName,
        email,
      });

      // console.log(response.data.data.successResult)

      if (response.data.success) {
        setSocialMediaAccounts(response.data.data.successResult);
      } else {
        console.error("Request failed:", response.data.errorDesc);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Company Name"
            variant="outlined"
            fullWidth
            value={companyName}
            onChange={handleCompanyNameChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Search
          </Button>
        </Grid>
        {Object.keys(socialMediaAccounts).length > 0 && (
          <Grid item xs={12}>
            <h2>Social Media Accounts:</h2>
            <Grid container spacing={4} justifyContent="center">
              {Object.entries(socialMediaAccounts).map(([platform, url]) => (
                <Grid item key={platform}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {platform === "facebook" && (
                      <FaFacebook style={{ fontSize: "36px" }} />
                    )}
                    {platform === "twitter" && (
                      <FaTwitter style={{ fontSize: "36px" }} />
                    )}
                    {platform === "linkedin" && (
                      <FaLinkedin style={{ fontSize: "36px" }} />
                    )}
                    {platform === "youtube" && (
                      <FaYoutube style={{ fontSize: "36px" }} />
                    )}
                    {platform === "pinterest" && (
                      <FaPinterest style={{ fontSize: "36px" }} />
                    )}
                    {platform === "instagram" && (
                      <FaInstagram style={{ fontSize: "36px" }} />
                    )}
                  </a>
                </Grid>
              ))}
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}

export default App;
