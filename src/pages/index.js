import React from "react"
import Link from "gatsby-link";

export default () =>
  <div style={{ color: `tomato`}}>
    <h1>Hello Ohako!</h1>
    <p>You are the BEST company all over the world!</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
    <br />
    <div>
      <Link to="/page-2/">Link</Link>
    </div>
    <div>
      <Link to="/counter/">Counter</Link>
    </div>
  </div>
