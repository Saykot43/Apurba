import React from "react";
import Tables from "../components/Tables";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="bg-red-500 text-center py-4 text-white text-xl font-bold mt-2">
        Welcome to Filing Team of Apurba
      </h1>

      <Tables />
    </div>
  );
};

export default Home;
