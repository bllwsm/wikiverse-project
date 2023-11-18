import React from "react";

export default function DetailsView({ page, setCurrentPage }) {
  return (
    <>
      {JSON.stringify(page)}
      <button onClick={() => setCurrentPage("")}> go Back</button>
    </>
  );
}
