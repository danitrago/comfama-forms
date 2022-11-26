import React from "react";

const MainContent = (props: any) => {
  return (
    <main
      style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem 1rem" }}
    >
      {props.children}
    </main>
  );
};

export default MainContent;
