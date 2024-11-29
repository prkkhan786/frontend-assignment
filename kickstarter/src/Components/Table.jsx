import React from "react";

const Table = ({ data }) => {
  return (
    <table
      style={{
        width: "100%",
        borderCollapse: "collapse",
        margin: "1.25rem 0",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      }}
    >
      <thead>
        <tr>
          <th style={styles.headerCell}>S.No.</th>
          <th style={styles.headerCell}>Percentage Funded</th>
          <th style={styles.headerCell}>Amount Pledged (USD)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
            <td style={styles.cell}>{row["s.no"]}</td>
            <td style={styles.cell}>{row["percentage.funded"]}%</td>
            <td style={styles.cell}>${row["amt.pledged"].toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  headerCell: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "0.6rem",
    textAlign: "left",
  },
  cell: {
    padding: "0.6rem",
    border: "1px solid #ddd",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
  oddRow: {
    backgroundColor: "#ffffff",
  },
};

export default Table;
