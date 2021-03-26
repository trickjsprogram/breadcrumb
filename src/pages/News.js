import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <>
      <h2>News Page</h2>
      <ul>
        <li>
          <Link to="/news/react">React</Link>
        </li>
        <li>
          <Link to="/news/angular">Angular</Link>
        </li>
        <li>
          <Link to="/news/vue">Vue</Link>
        </li>
      </ul>
    </>
  );
};

export default News;
