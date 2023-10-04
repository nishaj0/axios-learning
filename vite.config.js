export default {
   build: {
      jsx: {
         factory: "React.createElement",
         fragment: "React.Fragment",
         loader: {
            ".js": "jsx",
            ".jsx": "jsx",
         },
      },
   },
};
