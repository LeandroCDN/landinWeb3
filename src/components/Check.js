import React from "react";
import { timeNextClaim } from "../Web3Client";	
	


function Check () {

  const [time, setTime] = React.useState(0);
  function generateText(time){
    if (time > 0){
      return `Tiempo para el  siguiente claim: ${time}`;
    }else if(time === 0){
      return ``;
    }
    return `Ya puedes claimear`;
  }
  
  return(
    <div className="divCheck">
      <h2> Checkea tus tokens </h2>
      <div>
        <button  
          className="buttonApprove"
          onClick={() => timeNextClaim({setTime})}
        >
          Check Next claim
        </button>
        <p> {generateText(time)}</p>
      </div>
    </div>
  )

}

export { Check };