import React from "react";
import { Route, Routes } from "react-router-dom";
import BookLists from "./BookLists";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookEditForm from "./BookEditForm";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BookLists />} />
        <Route path="/bookDetails/:id" element={<BookDetails />} />
        <Route path="/bookForm" element={<BookForm />} />
        <Route path="/bookEditForm/:id" element={<BookEditForm />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
