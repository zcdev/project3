import axios from "axios";

export default {
// Campaign API methods
// ===============================================

  // Gets the campaign with the given id
  getCampaignsByUser: function(username) {
    return axios.get("/api/campaign/" + username);
  },
  // Deletes the campaign with the given id
  deleteCampaign: function(id) {
    return axios.delete("/api/campaign/" + id);
  },
  // Saves a campaign to the database
  saveCampaign: function(bookData) {
    return axios.post("/api/campaign", bookData);
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
