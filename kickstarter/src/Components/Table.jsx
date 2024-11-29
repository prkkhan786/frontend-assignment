import React, { useState } from "react";
import './Table.css';

const Table = ({ data }) => {
  const [sortConfig, setSortConfig] = useState({
    key: "percentage.funded",
    direction: "asc",
  });

  const handleSort = (columnKey) => {
    let direction = "asc";

    if (sortConfig.key === columnKey && sortConfig.direction === "asc") {
      direction = "desc"; 
    }

    setSortConfig({
      key: columnKey,
      direction: direction,
    });
  };

  const sortedData = React.useMemo(() => {
    if (sortConfig.key === null) return data;

    const sortedArray = [...data].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;

      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === "asc" ? comparison : -comparison;
    });

    return sortedArray;
  }, [data, sortConfig]);

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            className="table-header"
            onClick={() => handleSort("s.no")}
          >
            S.No.
            {sortConfig.key === "s.no" && (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </th>
          <th
            className="table-header"
            onClick={() => handleSort("percentage.funded")}
          >
            Percentage Funded
            {sortConfig.key === "percentage.funded" && (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </th>
          <th
            className="table-header"
            onClick={() => handleSort("amt.pledged")}
          >
            Amount Pledged (USD)
            {sortConfig.key === "amt.pledged" && (sortConfig.direction === "asc" ? " ↑" : " ↓")}
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedData.map((row, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "table-row-even" : "table-row-odd"}
          >
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
