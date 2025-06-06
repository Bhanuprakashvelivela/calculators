import React from "react";
import { useNavigate } from "react-router-dom";
import "./CalculatorCard.css";

function CalculatorCard({ icon, title, description, to }) {
  const navigate = useNavigate();
  return (
    <div className="calculator-card" onClick={() => navigate(to)}>
      <div className="calculator-card-icon">{icon}</div>
      <div className="calculator-card-title">{title}</div>
      <div className="calculator-card-desc">{description}</div>
    </div>
  );
}
export default CalculatorCard;
