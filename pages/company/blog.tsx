import React from "react";

import { BlogPage } from "@/components/blog/BlogPage";
import Head from "next/head";

const blog = () => {
  return (
    <>
      <Head>
        <title>Got It Agency: Blog about News, Development & Design</title>
      </Head>
      <BlogPage />
    </>
  );
};

export default blog;
