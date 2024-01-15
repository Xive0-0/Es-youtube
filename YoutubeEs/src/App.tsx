import { useState } from "react";
import "./App.css";
import Card from "./componeti/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        <Card
          imgUrl="https://images.unsplash.com/photo-1704928341414-5ae341023539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8"
          descrizione="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat."
          titolo="Deserto"
          isvisited={true}
        ></Card>
        <Card
          imgUrl="https://images.unsplash.com/photo-1704914073576-6bce908845f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D"
          descrizione="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat."
          titolo="ghiaccio"
          isvisited={false}
        ></Card>
        <Card
          imgUrl="https://images.unsplash.com/photo-1704714695191-a40c000ff64b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D"
          descrizione="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat."
          titolo="Foresta"
          isvisited={true}
        ></Card>
        <Card
          imgUrl="https://images.unsplash.com/photo-1704482622067-f728f2d83265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D"
          descrizione="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat."
          titolo="tramonto"
          isvisited={false}
        ></Card>
      </div>
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
