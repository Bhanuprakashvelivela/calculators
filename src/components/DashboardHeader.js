import React from "react";
import "./DashboardHeader.css";

const tabs = [
  { key: "all", label: "All" },
  { key: "conversion", label: "Conversion" },
  { key: "calculation", label: "Calculation" },
  { key: "identification", label: "Identification" },
];

function DashboardHeader({ tab, onTabChange, searchTerm, setSearchTerm, onSearch }) {
  return (
    <div className="dashboard-header">
      <div className="dashboard-brand">Sunvair Group - Mingo - AAIC</div>
      <div className="dashboard-tabs">
        {tabs.map(t => (
          <div
            key={t.key}
            className={`dashboard-tab${tab === t.key ? " active" : ""}`}
            onClick={() => onTabChange(t.key)}
          >
            {t.label}
          </div>
        ))}
      </div>
      <form
        className="dashboard-search"
        onSubmit={e => {
          e.preventDefault();
          onSearch(searchTerm);
        }}
      >
        <input
          type="text"
          placeholder="Search by term"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
export default DashboardHeader;
