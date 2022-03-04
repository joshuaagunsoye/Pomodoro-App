import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

function Time() {
  const [countMinute, setMinute] = useState(0);
  const [countSecond, setSecond] = useState(50);
//   const [pause, setPause] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setSecond((prevSec) => prevSec + 1);
      console.log(countMinute, countSecond)

     
    }, 1000);
    

    if (countSecond === 60) {
        setSecond(0);
        console.log(countMinute, countSecond)
        setMinute((prevMin) => prevMin + 1);
      }

      return () => {
        clearTimeout(timer);
      };

  }, [countSecond, countMinute]);

//   if (pause === true){
//     console.log("true")
// }
    

  

  return (
    <>
      <p className="timing">
        {countMinute}:{countSecond}
      </p>
      <Button onClick={()=>{console.log("clicked")}} variant="text">PAUSE</Button>
    </>
  );
}

export default Time;
