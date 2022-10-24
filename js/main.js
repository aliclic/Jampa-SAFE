 
 //const localstoragecards= JSON.parse(localStorage.getItem('cards')




 //const cards= localStorage.getItem('cards')!== null ? localstoragecards : []
 
 
 
 //const updatelocalstorage=()=>{
   //
/*
   let cardsJson=[
    {'id':'0','descrição' : '','bairro' : '', 'data': '','img':''},
    
    ]


 async function getcep(cep,cards_size){
    const url= 'https://viacep.com.br/ws/'+cep+'/json/'
    const response= await fetch(url)
    const info= await response.json()
    console.log(info) //fins de teste!!!
    let bairro=document.getElementById(`bairro${cards_size}`)
    bairro.innerHTML=info.bairro
   // return bairro.innerHTML (isso aq retorna a Promise, e não de fato o atributo que a gnt quer!)
    }
    


  
function addelement(){


    let card=document.createElement('div')
    let cards=document.getElementById('cards')
    let cards_size=String(cards.childElementCount)
    card.id=cards_size
    card.classList.add("card");
    card.classList.add("m-5");
    card.innerHTML=` <img src="" class="card-img-top card-image" id="image${cards_size}" alt="image"> <ul class="list-group list-group-flush"> <li class="list-group-item fw-bold">Tipo:<span class="px-2" id="type${cards_size}"></span></li>  <li class="list-group-item fw-bold">Bairro:<span class="px-2 card-descricao" id="bairro${cards_size}"></span></li>  <li class="list-group-item fw-bold">Data: <span class="px-2 card-descricao" type="date" id='date${cards_size}'></span></li>  <li class="list-group-item fw-bold">Descrição: <span class="px-2 card-descricao" id="description${cards_size}" > </span></li>   </ul>  <div class="card-body d-flex justify-content-around"> <button type="button" class="btn btn-danger card-button" ; onclick="removecard(document.getElementById('${cards_size}') )" >Excluir</button> <button type="button" class="btn btn-warning card-button" onclick='edit(document.getElementById('${cards_size}'))'>Alterar</button> </div> `
    card.style.width='18rem'
    cards.appendChild(card);
    let image=document.getElementById(`image${cards_size}`)
    let file=document.getElementById('formFile')
    let tipo=document.getElementById('tipo')
    let type=document.getElementById(`type${cards_size}`)
    let description=document.getElementById(`description${cards_size}`)
    let descrição=document.getElementById('exampleFormControlTextarea1')
    let date=document.getElementById(`date${cards_size}`)
    let cep=document.getElementById('CEP')
    let data=document.getElementById('title')


    // image.src=file.value
    type.innerHTML=tipo.value
    description.innerHTML=descrição.value
    getcep(cep.value,cards_size)
    date.innerHTML=data.value.split("-").reverse().join("/") //reversão da string de Data e formatação
}




function removecard(card){
let cards= document.getElementById('cards')
alert('VOCE ESTA REMOVENDO UM CARD')
cards.removeChild(card)
}



function alterarcard(){
   /* let image=document.getElementById(`image${id}`)
        let file=document.getElementById('formFile')
        let tipo=document.getElementById('tipo')
        let type=document.getElementById(`type${id}`)
        let description=document.getElementById(`description${id}`)
        let descrição=document.getElementById('exampleFormControlTextarea1')
        let date=document.getElementById(`date${id}`)
        let cep=document.getElementById('CEP')
        let data=document.getElementById('title')
    
    
        // image.src=file.value
        type.innerHTML=tipo.value
        description.innerHTML=descrição.value
        getcep(cep.value,cards_size)
        date.innerHTML=data.value.split("-").reverse().join("/") //reversão da string de Data e formatação 
    }


function edit(){
    /*let button=document.getElementById('modal-button')
    let card= document.getElementById(id)
    button.onclick=`alterarcard(${id})` 

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

 */
 