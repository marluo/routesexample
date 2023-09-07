import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router";

const Film = (props) => {
  const id = useParams();

  useEffect(() => {
    //hämta specifik film från api
  }, []);

  return <div>{id.id}</div>;
};

export default Film;
