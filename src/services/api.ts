const BASE_URL = 'https://apis.codante.io/api/legado-feminino';

export async function fetchUsers () {
  const response =  await fetch(`${BASE_URL}/women`);
  if(!response.ok){
    throw new Error("Erro ao acessar dados")
  }
  return response.json();
}


