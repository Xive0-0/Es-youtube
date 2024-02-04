import React, { useState, useEffect } from "react";
const Example: React.FC = () => {
  const [count, setcount] = useState(0);
  const [date, setData] = useState(null);
  useEffect(() => {
    document.title = `conteggio:${count}`;
    console.log("ciao bro");
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((Response)=>Response.json())
    .then((json)=>{console.log(json); 
      return json}
    ).then((data)=>setData(data))
  } , [count]);
  return (
    <>
      <div>
        <p>
        
          conteggio:{count}
          <button
            onClick={() => {
              setcount(count + 1);
            }}
          >
            incremente
          </button>
        </p>
      </div>
    </>
  );
};

export default Example;
