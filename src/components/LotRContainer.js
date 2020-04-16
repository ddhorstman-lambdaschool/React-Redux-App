import React from "react";

import { connect } from "react-redux";
import { fetchData } from "../actions";

function LotrContainer(props) {
  return (
    <>
      <button onClick={props.fetchData}>Fetch Data</button>
    </>
  );
}

export default connect(
  (state) => {
    return { ...state };
  },
  { fetchData }
)(LotrContainer);
