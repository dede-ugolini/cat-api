import { useEffect, useState } from 'react';
import api from './services/api.js';
import './App.css';

function App() {
  const [page, setPage] = useState(1);
  const [cat, setCat] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/v1/images/search?page=${page}`);
        setCat(response.data);
      } catch (error) {
        console.log("Erro ao buscar imagem:", error);
      }
    }

    fetchData();
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
      {cat[0] && (
        <img src={cat[0].url} alt={cat[0].id} />
      )}
      <br></br>
      <button type="button" onClick={backPage}>Back</button>
      <button type="button" onClick={addPage}>Next</button>
    </>
  )
}

export default App;
