import axios from "axios";

export default {
// Campaign API methods
// ===============================================

  // // Gets the campaign with the given username
  getCampaignByUser: function(username) {
    return axios.get("/api/campaigns/user/" + username);
  },
  // Saves a campaign to the database
  saveCampaign: function(campaignData) {
    return axios.post("/api/campaigns", campaignData);
  },
  addEncounterToCampaign: function(id, encounterData) {
    return axios.post("/api/campaigns/" + id + "/encounters", encounterData);
  },
  getEncountersFromCampaign: function(id) {
    return axios.get("/api/campaigns/" + id + "/encounters");
  },
  addCharacterToCampaign: function(id, characterData) {
    return axios.post("/api/campaigns/" + id + "/characters", characterData);
  },
  getCharactersFromCampaign: function(id) {
    return axios.get("/api/campaigns/" + id + "/characters");
  },

  // Encyclopedia API methods
  // ===============================================
  

// Authentication methods
// ===============================================

  //Post new user
  createUser: function(userData) {
    return axios.post("/api/user/signup", userData)
  },
  // Authenticate user signup
  authenticateUser: function(userData) {
    return axios("auth/signup", 
    {
     method: "post",
     data: userData,
     withCredentials: true
    })
  },
  // Logout current user
  logout: function(){
    return axios("/auth/logout")
  },
  // Authenticate user signin
  getUser: function(userData){
    return axios("/auth/signin",
    {
      method: "post",
      data: userData,
      withCredentials: true
    })
  }
};
