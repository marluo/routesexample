import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const filmer = [
  {
    id: 1200,
    name: "Titanic",
  },
  {
    id: 1200,
    name: "Titanic 2",
  },
  {
    id: 1200,
    name: "Rambo",
  },
];

const Home = (props) => {
  useEffect(() => {
    //hämta från api, alla filmer
  }, []);
  return (
    <div>
      {filmer.map((x) => (
        <Link to={`/film/${x.id}`}>{x.name}</Link>
      ))}
    </div>
  );
};
export default Home;
