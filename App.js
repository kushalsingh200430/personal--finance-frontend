
import React, { useState } from "react";

export default function App() {
  const [emi, setEmi] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function calc() {
    setLoading(true);
    setError(null);
    setEmi(null);

    try {
      const res = await fetch(
        "https://personal-finance-backend-1-pens.onrender.com/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ principal: 100000, rate: 8, years: 1 }),
        }
      );

      if (!res.ok) {
        throw new Error("Backend error: " + res.status);
      }

      const data = await res.json();
      setEmi(data.emi);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: "system-ui" }}>
      <h1>Personal Finance</h1>
      <p>Sample EMI calculation using your backend.</p>

      <button onClick={calc} disabled={loading}>
        {loading ? "Calculating..." : "Calculate EMI Sample"}
      </button>

      {error && (
        <p style={{ color: "red", marginTop: 16 }}>
          Error: {error}
        </p>
      )}

      {emi && !error && (
        <p style={{ marginTop: 16 }}>
          EMI: <strong>₹ {emi}</strong>
        </p>
      )}
    </div>
  );
}
