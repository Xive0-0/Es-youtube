import { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from 'uuid';
type City = {
  id: string;
  imgUrl: string;
  descrizione: string;
  titolo: string;
  isVisited: boolean;
};

type AddCity = (city: City) => void

const CardForm: React.FC<{ addCity:AddCity}> = ({ addCity }) => {
  const [formData, setFormData] = useState({
    id: "",
    imgUrl: "",
    descrizione: "",
    titolo: "",
    isVisited: false,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const city = {
      id: uuidv4(),
      imgUrl: formData.imgUrl,
      descrizione: formData.descrizione,
      titolo: formData.titolo,
      isVisited: formData.isVisited,
    };
    console.log("Nuova città:", city);
    addCity(city);
  };
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    console.log(`Campo ${name} cambiato a:`, inputValue);
    setFormData({ ...formData, [name]: inputValue });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-80 mb-10 bg-zinc-900 p-5 rounded-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="titolo">Nome città</label>
          <input
            type="text"
            id="titolo"
            name="titolo"
            value={formData.titolo}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="descrizione">Descrizione</label>
          <textarea
            id="descrizione"
            name="descrizione"
            value={formData.descrizione}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <label htmlFor="imgUrl">Immagine</label>
          <input
            type="text"
            id="imgUrl"
            name="imgUrl"
            value={formData.imgUrl}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="isVisited">Visitata</label>
          <input
            type="checkbox"
            id="isVisited"
            name="isVisited"
            checked={formData.isVisited}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" className="bg-black" onClick={handleSubmit}>
          Aggiungi Card
        </button>
      </form>
    </>
  );
};

export default CardForm;
