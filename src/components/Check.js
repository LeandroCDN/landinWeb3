import React from "react";
import { timeNextClaim } from "../Web3Client";
import './Check.css';	
	


function Check () {

  const [time, setTime] = React.useState(0);
  function generateText(time){
   
    if (time > 0){
      return `Tiempo para el  siguiente claim: ${time}`;
    }else if(time === 0){
      return `hola`;
    }
    return `Ya puedes claimear`;
  }
  
  return(
    <div className="divCheck">
      <h2> Checkea tus tokens </h2>
      <div>
        <button  
          className="buttonCheck"
          onClick={() => timeNextClaim()
          .then(time => setTime(time))}
        >
          Check Next claim
        </button>
        <p> Proximo claim en: {time} Segundos!! </p>
      </div>
    </div>
  )

}

export { Check };
