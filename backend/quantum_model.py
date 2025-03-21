import pennylane as qml
import numpy as np
from flask import Flask, request, jsonify

app = Flask(__name__)

# Quantum circuit with 2 qubits for predictive maintenance
dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def quantum_predict(inputs):
    qml.RX(inputs[0], wires=0)
    qml.RY(inputs[1], wires=1)
    qml.CNOT(wires=[0, 1])
    return qml.expval(qml.PauliZ(1))

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json["data"]
    result = quantum_predict(np.array(data))
    return jsonify({"prediction": "Critical" if result < 0 else "Safe"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
