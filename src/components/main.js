import React  from "react";
import Cards from "./cards";

export default function Main(props) {
  return <div>
    <Cards
      handler = { props.handler }/>
  </div>;
}