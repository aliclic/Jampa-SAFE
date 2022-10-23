 
 async function getcep(cep){
    const url= 'https://viacep.com.br/ws/'+cep+'/json/'
    const response= await fetch(url)
    const info= await response.json()
    console.log(info) //fins de teste!!!
    let bairro=document.getElementById('bairro')
    bairro.innerHTML=info.bairro
    }
    

  
function addelement(){
    let card=document.createElement('div')
    card.classList.add("card");
    card.classList.add("m-5");
    card.innerHTML='  <img src="" class="card-img-top card-image image" alt="image"> <ul class="list-group list-group-flush"> <li class="list-group-item fw-bold">Tipo:<span class="px-2" id="type"></span></li>  <li class="list-group-item fw-bold">Bairro<span class="px-2 card-descricao" id="bairro"></span></li>  <li class="list-group-item fw-bold">Data: <span class="px-2 card-descricao" type="date"></span></li>  <li class="list-group-item fw-bold">Descrição: <span class="px-2 card-descricao" id="description" > </span></li>   </ul>  <div class="card-body d-flex justify-content-around"> <button type="button" class="btn btn-danger card-button" ; onclick="removecard(document.querySelector(".card") )" >Excluir</button> <button type="button" class="btn btn-warning card-button">Alterar</button> </div> '
    let cards=document.getElementById('cards')
    card.style.width='18rem'
    cards.appendChild(card);
   let image=document.querySelector('.image')
   let file=document.getElementById('formFile')
    image.src=file.value
    let tipo=document.getElementById('tipo')
    let type=document.getElementById('type')
    type.innerText=tipo.value
    let description=document.getElementById('description')
    let descrição=document.getElementById('exampleFormControlTextarea1')
    description.innerText=descrição.value
    let date=document.getElementById('date')
    let cep=document.getElementById('CEP')
    getcep(cep.value)
    let data=document.getElementById('title')
    date.innerHTML=data.value.split("-").reverse().join("/")  //reversão da string de Data e formatação
}


function removecard(card){
let cards= document.getElementById('cards')
alert('VOCE ESTA REMOVENDO UM CARD')
cards.removeChild(card)
}

function alterarcard(){


}

function validation(){
   
    let cep=document.getElementById('CEP')
        cep.style.outline=''
        cep.style.border=''
        cep.style.background=''
    if (cep.value.length!=8){
        cep.style.outline='red'
        cep.style.border='red'
        cep.style.background='pink'
        }
     if(cep.value.length===0 || cep.value.length===8){
        cep.style.outline=''
        cep.style.border=''
        cep.style.background=''
        }
 }