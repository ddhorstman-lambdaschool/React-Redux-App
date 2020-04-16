import React from "react";

import { connect } from "react-redux";
import { fetchData, fetchQuotes } from "../actions";

import CharacterCard from "./CharacterCard";
import { Container, Button, Spinner } from "reactstrap";

function LotrContainer(props) {
  //React.useEffect(props.fetchData, []);
  return (
    <div style={{backgroundColor:"lightgrey"}}>
      <h1>Lord of the Rings Characters</h1>
      <Container xs="2">
        {props.isLoading ? (
          <Spinner />
        ) : (
          <Button onClick={props.fetchData}>Fetch Data</Button>
        )}
        {props.books &&
          props.books.map((x) => (
            <CharacterCard
              key={x._id}
              {...x}
              fetchQuotes={() => props.fetchQuotes(x._id)}
            />
          ))}
      </Container>
    </div>
  );
}

export default connect(
  state => {
    return { ...state };
  },
  { fetchData, fetchQuotes }
)(LotrContainer);
