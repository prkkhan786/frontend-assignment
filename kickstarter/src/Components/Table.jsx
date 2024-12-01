import React from "react";
import './Table.css';

const Table = ({ data, onSort, sortConfig }) => {
  const handleSort = (columnKey) => {
    onSort(columnKey);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header" onClick={() => handleSort("s.no")}>
            S.No.
            {sortConfig.key === "s.no" && (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </th>
          <th className="table-header" onClick={() => handleSort("percentage.funded")}>
            Percentage Funded
            {sortConfig.key === "percentage.funded" && (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </th>
          <th className="table-header" onClick={() => handleSort("amt.pledged")}>
            Amount Pledged (USD)
            {sortConfig.key === "amt.pledged" && (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}>
            <td className="table-cell">{row["s.no"]}</td>
            <td className="table-cell">{row["percentage.funded"]}%</td>
            <td className="table-cell">${row["amt.pledged"].toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
