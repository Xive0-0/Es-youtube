import React, { useState} from "react";
const Example: React.FC = () => {
  const [count, setcount] = useState(0);
 
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
