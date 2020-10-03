import React from "react";
import { HomeProvider } from "../../cores/hooks";
import CardComponent from "./components/card/index";

const Home = () => {
  return (
    <HomeProvider>
      <CardComponent />
    </HomeProvider>
  );
};
export default Home;
