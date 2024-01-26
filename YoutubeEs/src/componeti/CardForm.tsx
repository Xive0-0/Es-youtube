type citta = {
  addcity: any;
};

const CardForm: React.FC<citta> = ({ addcity }) => {
  const handlclick = () => {
    const citta = {
      id: 4,
      imgUrl:
        "https://images.unsplash.com/photo-1682685796014-2f342188a635?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descrizione:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, fugiat.",
      titolo: "caldo deserto",
      isvisited: false,
    };
    addcity(citta);
  };
  return (
    <>
      <div className="flex flex-col gap-3 w-80 mb-10"></div>
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <button onClick={handlclick}> Aggiungi Card</button>
    </>
  );
};

export default CardForm;
