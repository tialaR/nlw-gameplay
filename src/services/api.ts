import axios from 'axios';

//Os dados do usuário serão solicitados do endpoint do discord
const api = axios.create({
  baseURL: 'https://discord.com/api',
});

export { api };
