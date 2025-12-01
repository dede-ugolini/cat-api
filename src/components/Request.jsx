import { catApi, dinoApi } from '../services/api';
import { useState, useEffect } from 'react';
import CatImage from './CatImage';
import DinoImage from './DinoImage.jsx';
import VS from '../assets/VS.png'

function Request({ page }) {
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
        console.log("Erro na api do gatinho: ", error);
      }
    }
    fetchDataCat();
  }, [page]);

  useEffect(() => {
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
  }, []);


  return (
    <>
      <CatImage cat={cat} />
      <img src={VS} alt='Not found' />
      <DinoImage dino={dino} page={page} />
      <br></br>
    </>
  );
}
export default Request;
