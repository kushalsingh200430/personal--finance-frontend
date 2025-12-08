
import React, {useState} from "react";

export default function App(){
  const [emi,setEmi]=useState(null);

  async function calc(){
    const res = await fetch("https://personal-finance-backend-1-pens.onrender.com/", {
      method:"POST", headers:{'Content-Type':'application/json'},
      body:JSON.stringify({principal:100000, rate:8, years:1})
    });
    const data = await res.json();
    setEmi(data.emi);
  }

  return (
    <div style={{padding:20}}>
      <h1>Personal Finance</h1>
      <button onClick={calc}>Calculate EMI Sample</button>
      {emi && <p>EMI: ₹ {emi}</p>}
    </div>
  );
}
