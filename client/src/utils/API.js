import axios from "axios";

export default {
// Campaign API methods
// ===============================================

  // Gets the campaign with the given id
  getCampaignsByUser: function(username) {
    return axios.get("/api/campaigns/" + username);
  },
  // Deletes the campaign with the given id
  deleteCampaign: function(id) {
    return axios.delete("/api/campaigns/" + id);
  },
  // Saves a campaign to the database
  saveCampaign: function(campaignData) {
    return axios.post("/api/campaigns", campaignData);
  },
  addEncounterToCampaign: function(id, encounterData) {
    return axios.put("/api/campaigns/" + id + "/encounters", encounterData);
  },

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
  getUser: function(){
    return axios.get("/auth/user");
  }
};
