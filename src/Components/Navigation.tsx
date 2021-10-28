import React from "react";
import {Link} from "react-router-dom"


const Navigation=()=>{
  const changeFullpage = (value: number) => {
    setTimeout(() => {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(value);
    }, 50);
  };
  return(
    <nav>

      <ul style={{ display: "flex", marginTop: 50 }}>
        <Link to="/" onClick={()=>changeFullpage(1)}>
          Home
        </Link>
        <Link to="/about" onClick={()=>changeFullpage(2)}>
          About
        </Link>
        <Link to="/members">
          Members
        </Link>
      </ul>
    </nav>
  )
}

export default Navigation
