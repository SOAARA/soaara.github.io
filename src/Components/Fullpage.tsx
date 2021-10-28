import React from "react"
import ReactFullpage from "@fullpage/react-fullpage"

const Fullpage:React.FC=()=>{
  return (
    <ReactFullpage
      licensekey="OPEN-SOURCE-GPLV3-LICENSE"
      scrollingSpeed={800}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              
            </div>
            <div className="section">
              
            </div>
            <div className="section">
              
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}