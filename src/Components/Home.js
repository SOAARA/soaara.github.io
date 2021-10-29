import React from 'react'
import '../styles/global.scss'
import ReactFullpage from '@fullpage/react-fullpage'
import About from '../routes/About'

const Page= () => {
  return(
    <ReactFullpage
      licensekey="OPEN-SOURCE-GPLV3-LICENSE"
      scrollingSpeed={800}
      render={() => {
        return(
          <>
          <ReactFullpage.Wrapper>
            <div className="section">
              Section 1
            </div>
            <div className="section">
              <About/>
            </div>
            <div className="section">
              Section 3
            </div>
          </ReactFullpage.Wrapper>
          </>
        );
      }}
    />
  )
}

export default Page
