import React from "react";
import { useEffect } from "react";

import authFetch from "../axios/custom";
import axios from "axios";

const randomUserUrl = "https://randomuser.me/api";

const CustomInstance = () => {
   const fetchData = async () => {
      const res1 = await authFetch("/react-store-products");
      const res2 = await axios(randomUserUrl);

      console.log({ res1, res2 });
   };

   useEffect(() => {
      fetchData();
   }, []);

   return <h2 className="text-center">custom instance</h2>;
};
export default CustomInstance;
