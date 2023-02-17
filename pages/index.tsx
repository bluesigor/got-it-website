import Head from "next/head";
import { Inter } from "@next/font/google";
import { Home } from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

const MainPage = () => {
  return (
    <>
      <Head>
        <title>
          Got It Agency: Web & Mobile Custom Development | UI/UX Design
        </title>
      </Head>
      <Home />
    </>
  );
};

export default MainPage;
