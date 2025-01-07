import React from "react";

function Content({ description }: any) {
  const style = `<style>
    h1,h2,h3,h4,h5{font-weight : 500; font-size : 32px;}
    p {font-weight : 400; font-size : 18px}
    strong{font-weight : 500; font-size : 20px} 
</style>`;
  return (
    <div
      className="prose pb-20"
      dangerouslySetInnerHTML={{ __html: `<div>${style}${description}</div>` }}
    />
  );
}

export default Content;
