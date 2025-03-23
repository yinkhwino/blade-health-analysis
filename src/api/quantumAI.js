import axios from "axios";

const QUANTUM_API_URL = process.env.QUANTUM_API_URL || "https://default-url.com/predict";

/**
* Fetches a quantum prediction based on sensor data.
* @param {Object} sensorData - The sensor data to send to the quantum API.
* @returns {Promise<string>} - The prediction result from the quantum API.
*/
export async function getQuantumPrediction(sensorData) {
  try {
    const response = await axios.post(QUANTUM_API_URL, { data: sensorData });
    return response.data.prediction; // Quantum AI result
  } catch (error) {
    if(error.response){
      //Server responded with a status other than 2xx
      console.error("Network error:", error.message);
      return "Network error: Prediction Unavailable";
    }else if(error.request){
      //No response received from server 
      console.error("Network Error:",error.message);
      return "Network error: Prediction Unavailable";
    }else{
    console.error("Error in Quantum Prediction:", error);
    return "Prediction Unavailable";
    }
  }
}
