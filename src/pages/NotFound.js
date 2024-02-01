import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <h1 className="flex justify-center mt-20 text-2xl">
      Looks like this link does not exist, <Link to="/" className="text-blue-500 underline">If you want to go to homepage, CLICK this link</Link>
    </h1>
  )
}

export default NotFound;