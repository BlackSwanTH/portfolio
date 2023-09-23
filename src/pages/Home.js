import React, { Fragment } from "react";
import "../index.css";
import Header_bar from "../components/Header";
import Content_Home from "../components/Contents_Home";
export default function Home() {
  return (
    <>
      <Fragment>
        <Header_bar />
        <Content_Home />
      </Fragment>
    </>
  );
}
