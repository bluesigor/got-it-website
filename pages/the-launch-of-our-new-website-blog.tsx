import Head from "next/head";
import React from "react";

import { NewWebsite } from "../components/blog/NewWebsite";

const NewWebSiteBlog = () => {
  return (
    <>
      <Head>
        <title>Got It Agency: Blog about News, Development & Design</title>
      </Head>
      <NewWebsite />
    </>
  );
};

export default NewWebSiteBlog;
