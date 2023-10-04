import axios from "axios";
import React from "react";
import { useEffect } from "react";
// limit, if 429 wait for 15 min and try again
const url = "https://course-api.com/react-store-products";

const FirstRequest = () => {
   const fetchData = async () => {
      try {
         const response = await axios(url);
         const {data} = response
         console.log(data);
      } catch (err) {
         console.log(err.response);
         // here catch block work mainly internal err (not from api) it mostly 404 
      }
   };

   useEffect(() => {
      fetchData();
   }, []);

   return <h2 className="text-center">first request</h2>;
};
export default FirstRequest;
