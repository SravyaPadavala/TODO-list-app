import React from "react";
import { useRouteError } from "react-router-dom";

const RouterError = () => {
  const error = useRouteError();

  return (
    <div className="mt-5 text-center">
      <h1 className="text-danger">Something went wrong!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default RouterError;
