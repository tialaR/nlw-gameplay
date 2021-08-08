//Variáveis de configuração do discord:

//Dividindo o a uri de autenticação gerada no discord para melhorar a organização do app
//https://discord.com/api/oauth2/authorize?client_id=873935931470647336&redirect_uri=https%3A%2F%2Fauth.expo.io%2Fgameplay&response_type=code&scope=identify%20email%20connections%20guilds

const REDIRECT_URI = 'https://auth.expo.io/@anonymous/gameplay-1d639204-a12c-48bc-ab5a-30b7c4a6c4b2';
const SCOPE = 'identify%20email%20connections%20guilds';
const RESPONSE_TYPE = 'token';
const CLIENT_ID = '873935931470647336'; //Cliente do app registrado no discord
const CDN_IMAGE = 'https://cdn.discordapp.com'; /* O discord salva as imagens em outro servidor - as imagens do avatar do usuário serão buscadas desse servidor */


export {
  REDIRECT_URI,
  SCOPE,
  RESPONSE_TYPE,
  CLIENT_ID,
  CDN_IMAGE,
}
