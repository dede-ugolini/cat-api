import { useEffect, useState } from 'react';
import { catApi, dinoApi } from './services/api.js';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState([]);
  const [dino, setDino] = useState([]);

  useEffect(() => {
    async function fetchDataCat() {
      try {
        const response = await catApi.get(`/v1/images/search?page=${page}`);
        const data = response.data;
        const id = data[0].id;
        const response2 = await catApi.get(`v1/images/${id}`);
        const data2 = response2.data;
        setCat(data2);
      } catch (error) {
        console.log("Erro ao buscar imagem:", error);
      }
    }
    async function fetchDataDino() {
      try {
        const response = await dinoApi.get('/api/dinosaurs');
        const data = response.data;
        console.log(data);
        setDino(data);
      } catch (error) {
        console.log("Erro na api do dino: ", error);
      }
    }
    fetchDataDino();
    fetchDataCat();
  }, [page]);


  function addPage() {
    setPage(page + 1);
    console.log(page);
  }
  function backPage() {
    if (page >= 1) {
      setPage(page - 1);
    }
    else {
      console.log("Página mínima atingida");
      return;
    }
  }


  return (
    <>
      <h1>Pagina {page}</h1>
      {cat && (
        <img src={cat.url} alt={cat.id} style={{
          maxHeight: '300px',
          maxWidth: '300px'
        }} />
      )}
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/Street_Fighter_VS_logo.png" />
      <img src={dino[page].image} style={{
        maxHeight: '300px',
        maxWidth: '300px'
      }} />
      <br></br>
      <button type="button" onClick={backPage}>Back</button>
      <button type="button" onClick={addPage}>Next</button>
    </>
  )
}

export default App;
