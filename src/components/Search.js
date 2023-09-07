import React from "react";
import PropTypes from "prop-types";

const Search = (props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
      <button type="button"> Sök</button>
    </div>
  );
};

Search.propTypes = {};

export default Search;
