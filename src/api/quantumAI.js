import axios from "axios";

const QUANTUM_API_URL = "https://your-quantum-backend.com/predict"; // Replace with actual API

export async function getQuantumPrediction(sensorData) {
  try {
    const response = await axios.post(QUANTUM_API_URL, { data: sensorData });
    return response.data.prediction; // Quantum AI result
  } catch (error) {
    console.error("Error in Quantum Prediction:", error);
    return "Prediction Unavailable";
  }
}
