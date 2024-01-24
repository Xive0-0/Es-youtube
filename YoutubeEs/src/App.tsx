
import "./App.css";
import Card from "./componeti/Card";
import {useState} from "react";

function App() { 
  function click() {
    alert("ciao");
  }
  function clickfin(e: object) {
    console.log(e);
  }
 
  
  console.log(useState(0))
  const citta = [
    {
      id: 0,
      imgUrl:
        "https://images.unsplash.com/photo-1704928341414-5ae341023539?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat.",
      titolo: "Deserto",
      isvisited: true,
    },
    {
      id: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1704914073576-6bce908845f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat.",
      titolo: "ghiaccio",
      isvisited: false,
    },
    {
      id: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1704714695191-a40c000ff64b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat.",
      titolo: "Foresta",
      isvisited: true,
    },
    {
      id: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1704482622067-f728f2d83265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat.",
      titolo: "tramonto",
      isvisited: false,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 gap-5">
        {citta
          .filter((city) => city.isvisited == true || city.isvisited == false)
          .map((city) => (
            <Card
              key={city.id}
              titolo={city.titolo}
              isvisited={city.isvisited}
              imgUrl={city.imgUrl}
              descrizione={city.descrizione}
            ></Card>
          ))}
      </div>
      <div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={click}>alert</button>
        <input onChange={clickfin} />
        <form action="" onSubmit={clickfin}>
          <button type="submit" >invia:{}</button>
          
        </form>
      </div>
    </>
  );
}

export default App;
