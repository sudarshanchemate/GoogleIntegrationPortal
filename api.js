import axios from "axios";

// Backend base URL
const API_BASE_URL = "http://localhost:5000";

export const login = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/login`);
    return response.data.auth_url;
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  }
};

export const fetchReviews = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/reviews`);
    return response.data.reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};
