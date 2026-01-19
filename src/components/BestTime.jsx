import React from "react";
import '../styles/Wilhan_project.module.css';

export default function BestTime({ season, weather, peakMonths = [], lowMonths = [] }) {
  return (
    <div className="best-time mt-2">
      <p className="mb-1"><strong>Best time:</strong> <span className="text-capitalize">{season}</span></p>
      <p className="mb-1"><strong>Weather:</strong> {weather}</p>
      <div className="d-flex gap-2">
        <span className="badge bg-danger">Peak: {peakMonths.join(", ")}</span>
        <span className="badge bg-secondary">Low: {lowMonths.join(", ")}</span>
      </div>
    </div>
  );
}
