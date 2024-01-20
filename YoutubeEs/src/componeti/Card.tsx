type CardProps ={
  imgUrl: string;
  titolo: string;
  descrizione: string;
  isvisited: boolean;
}

const Card: React.FC<CardProps> = ({imgUrl, titolo, descrizione, isvisited}) => {
  return (
    <>
    <div className="rounded-md bg-zinc-950">
      <img src={imgUrl} alt="Luogo" />
      <div className="flex flex-col p-4">
        <h2 className="text-2xl text-white">{titolo}</h2>
        <p className="text-gray-500">{descrizione}</p>
        {isvisited ? <span>Visited</span> : <span>Not Visited</span>}
        
      </div>
    </div>
    </>
  );
};

export default Card;
