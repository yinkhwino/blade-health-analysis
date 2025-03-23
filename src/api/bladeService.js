import axios from "axios";

const API_BASE_URL = process.env.API_BASE_URL || "https://defaults.url.com/blades"; // Replace with actual API endpoint

export async function getBladeHealthData() {
  try {
    const response = await axios.get(`${API_BASE_URL}/health`);
    return response.data;
  } catch (error) {
    console.error("Error fetching blade health data:", error);
    return { error: "Failed to fetch data" };
  }
}
