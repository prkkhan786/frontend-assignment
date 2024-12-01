import React, { useEffect, useState } from "react";
import Table from "./Components/Table";
import Pagination from "./Components/Pagination";
import './App.css'; 

const RECORD_PER_PAGE = 5;

function App() {
  const [pageData, setPageData] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "s.no",
    direction: "asc",
  });

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())
      .then((data) => setPageData(data))
      .catch(() => {
        setError("Something went wrong while fetching the data, Please refresh the page");
      });
  }, []);

  const sortedData = React.useMemo(() => {
    if (!sortConfig.key) return pageData;

    const sortedArray = [...pageData].sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (aValue === bValue) return 0;

      const comparison = aValue < bValue ? -1 : 1;
      return sortConfig.direction === "asc" ? comparison : -comparison;
    });

    return sortedArray;
  }, [pageData, sortConfig]);

  const totalPages = Math.ceil(sortedData.length / RECORD_PER_PAGE);
  const paginatedData = sortedData.slice(
    (currentPage - 1) * RECORD_PER_PAGE,
    currentPage * RECORD_PER_PAGE
  );

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="app-container">
      <h1 className="app-heading">Kickstarter Projects</h1>
      {error && <p className="error-message">{error}</p>}
      {!error && (
        <>
          <Table data={paginatedData} onSort={handleSort} sortConfig={sortConfig} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}

export default App;
