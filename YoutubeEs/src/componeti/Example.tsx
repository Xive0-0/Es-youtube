import React, { useState, useEffect } from "react";
const Example: React.FC = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    document.title = `cconteggio:${count}`;
    console.log("ciao bro");
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
