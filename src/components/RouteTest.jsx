import React from "react";
import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/diary"}>diary</Link>
      <Link to={"/new"}>New</Link>
      <Link to={"/edit"}>Edit</Link>
    </>
  );
};

export default RouteTest;
