 export const getlocalstorage=()=> JSON.parse(localStorage.getItem('db')) ?? [] 
 //passar para json.parse() se nao  ele ficará sempre string e nao poderá executar metodos como o push, o getitem sempre vai buscar um astring do localstorage
 
 
