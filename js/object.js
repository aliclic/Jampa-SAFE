 /* export async function getcep(cep,bairro){
const url= 'https://viacep.com.br/ws/'+cep+'/json/'
const response= await fetch(url)
const info= await response.json()
console.log(info)
let bairro=document.getElementById('bairro')
bairro.innerHTML=info.bairro
} */


const localstoragecards= JSON.parse(localStorage.getItem('cards'))




const cards= localStorage.getItem('cards')!== null ? localstoragecards : []



const updatelocalstorage=()=>{
    localStorage.setItem('cards',JSON.stringify(cards))
}





