import React, { useEffect, useState } from "react";
import Table from "./Components/Table";
import Pagination from "./Components/Pagination";

const RECORD_PER_PAGE = 5;

function App() {
  const [pageData , setPageData] = useState([]);
  const [error,setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch('./data.json')
      .then((res) => res.json())  
      .then((data) => setPageData(data)) 
      .catch((err) => {
        setError("Something went wrong while fetching the data, Please refresh the page");
      });
  }, []);

  const totalPages = Math.ceil(pageData.length / RECORD_PER_PAGE);
  const paginatedData = pageData.slice(
    (currentPage - 1) * RECORD_PER_PAGE,
    currentPage * RECORD_PER_PAGE
  );

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1 style={{ textAlign: "center" }}>Kickstarter Projects</h1>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {!error && (
      <>
        <Table data={paginatedData} />
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
