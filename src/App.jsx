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
        const data = response.data;
        const id = data[0].id;
        const response2 = await api.get(`v1/images/${id}`);
        const data2 = response2.data;
        setCat(data2);
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
      {cat && (
        <img src={cat.url} alt={cat.id} />
      )}
      <br></br>
      <button type="button" onClick={backPage}>Back</button>
      <button type="button" onClick={addPage}>Next</button>
    </>
  )
}

export default App;
