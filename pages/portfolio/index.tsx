import { Portfolio } from "@/components/Portfolio";
import Head from "next/head";
import React from "react";

const portfolio = () => {
  return (
    <>
      <Head>
        <title>
          Got It Agency: Portfolio - you can see our projects here or on Behance
        </title>
      </Head>
      <Portfolio />
    </>
  );
};

export default portfolio;
