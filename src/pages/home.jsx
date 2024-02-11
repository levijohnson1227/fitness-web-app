import React from "react";

export default function Home() {
  const appName = <div className="appName">FitFusion</div>;
  const topBar = <div className="bar"></div>;

  return (
    <div className="container">
      {topBar}
      {appName}
    </div>
  );
}
