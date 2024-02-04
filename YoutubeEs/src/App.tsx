import "./App.css";
import Card from "./componeti/Card";
import { useState, useEffect } from "react";
import CardForm from "./componeti/CardForm";
import Example from "./componeti/Example";

function App() {
  const click = () => {
    alert("ciao");
  };
  const clickfin = (e: object) => {
    console.log(e);
  };
  const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };
  const [count, setcount] = useState<number>(0);
  const [date, setData] = useState([]);
  useEffect(() => {
    document.title = `conteggio:${count}`;
    console.log("ciao bro");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((Response) => Response.json())
      .then((json) => {
        console.log(json);
        return json;
      })
      .then((data) => setData(data));
  }, []);

  const [citta, setcitta] = useState([
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
  ]);

  const aggiungicitta = (city: any) => {
    setcitta([...citta, city]);
  };
  return (
    <>
      <Example></Example>
      <CardForm addCity={aggiungicitta}></CardForm>
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
        <div className="grid grid-cols-4 gap-5">
          {date.map((item) => (
            <div key={item.id} className="bg-slate-400 rounded-lg p-3">
              <p>userid: {item.userId}</p>
              <p>body{item.body}</p>
              <p>title{item.body}</p>
            </div>
          ))}
          </div>
    </>
  );
}

export default App;
