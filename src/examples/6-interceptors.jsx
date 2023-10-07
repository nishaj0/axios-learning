import React from "react";
import { useEffect } from "react";

import authFetch from "../axios/interceptors";

const url = "https://course-api.com/react-store-products";

const Interceptors = () => {
   const fetchData = async () => {
      const res = await authFetch("/react-store-products");
      console.log(res);
   };

   useEffect(() => {
      fetchData();
   }, []);

   return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
