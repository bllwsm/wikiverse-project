import React, { useState, useEffect } from "react";
import PagesList from "./components/PagesList";
import DetailsView from "./components/DetailsView";

// import and prepend the api url to any fetch calls
import apiURL from "./api";

export const App = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState("");

  async function fetchPages() {
    try {
      const response = await fetch(`${apiURL}/wiki`);
      const pagesData = await response.json();
      console.log(pagesData); 
      setPages(pagesData);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  }

  useEffect(() => {
    fetchPages();
  }, []);

  return (
    <main>
      <h1>WikiVerse</h1>
      <h2>An interesting 📚</h2>

      {currentPage ? (
        <DetailsView
          setCurrentPage={setCurrentPage}
          page={pages.find(({ title }) => title === currentPage)}
        />
      ) : (
        <PagesList pages={pages} setCurrentPage={setCurrentPage} />
      )}
    </main>
  );
};
