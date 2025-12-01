import axios from "axios";

export const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com'
});

export const dinoApi = axios.create({
  baseURL: 'https://dinoapi.brunosouzadev.com'
});

