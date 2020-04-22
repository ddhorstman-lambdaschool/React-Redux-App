import React from "react";

import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  CardLink,
  CardHeader,
  Button,
} from "reactstrap";
export default function Charactercard(props) {
  return (
    <Card xs="2" style={{ marginTop: "5px" }}>
      <CardHeader>
        {" "}
        <CardTitle>{props.name}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardText>Race: {props.race ?? "unknown"}</CardText>
        {props.birth && props.death && (
          <CardText>{`Lived from ${props.birth} - ${props.death}`}</CardText>
        )}
        {props.wikiUrl && <CardLink href={props.wikiUrl}>More Info</CardLink>}
        <CardText>
          {props.quotes ? (
            props.quotes[0]?.dialog
          ) : (
            <Button onClick={props.fetchQuotes}>Fetch a Quote!</Button>
          )}
        </CardText>
      </CardBody>
    </Card>
  );
}
