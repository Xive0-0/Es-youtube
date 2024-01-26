import { useState, ChangeEvent, FormEvent } from "react";

const CardForm: React.FC<{ addCity: any }> = ({ addCity }) => {
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
      id: Math.random(),
      imgUrl: formData.imgUrl,
      descrizione: formData.descrizione,
      titolo: formData.titolo,
      isVisited: formData.isVisited,
    };
    addCity(city);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
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
