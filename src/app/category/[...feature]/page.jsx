import React from "react";

const featurePage = ({ params }) => {
  console.log({ params });
  if (params.feature.length == 3) return <div>{params.feature[2]}</div>;
  if (params.feature.length == 2) return <div>{params.feature[1]}</div>;

  return <div>this is feature page</div>;
};

export default featurePage;
