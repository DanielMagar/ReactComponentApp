import React, { useState, useEffect } from "react";

const CircularProgressBar = (props) => {
  const [animationName, setAnimationName] = useState("anime");

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    setInterval(() => setProgress(progress + 1), 1000);
  }, [progress]);

  function addStylesheetRules(rules) {
    var styleEl = document.createElement("style");
    document.head.appendChild(styleEl);
    var styleSheet = styleEl.sheet;
    styleSheet.insertRule(rules, 0);
  }
  useEffect(() => {
    let keyframes = `
        @-webkit-keyframes ${animationName} {
       
            100%{stroke-dashoffset: ${progress}}
           
        }`;

    addStylesheetRules(keyframes);

    setAnimationName((state) => {
      return state;
    });
  }, [progress]);

  let style = {
    animationName: animationName,
    animationDuration: "4s",
    animationDirection: "normal",
    animationFillMode: "forwards",
  };
  return (
    <>
      <div>Circular progress bar using svg</div>
      <div className="h-full flex items-center justify-center translate-y-[80%]">
        <div className="main-cirle">
          <div className="outer">
            <div className="inner">
              <div className="number">{progress}%</div>
            </div>
          </div>
          <svg className="circle-progress" height="160px" width="160px">
            <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stop-color="#e91e63" />
                <stop offset="100%" stop-color="#673ab7" />
              </linearGradient>
            </defs>
            <circle
              cx="80"
              cy="80"
              r="70"
              strokeLinecap="round"
              style={style}
            />
          </svg>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default CircularProgressBar;
