
const getlocalstorage=()=> JSON.parse(localStorage.getItem('db')) ?? []//passar para json.parse() se nao  ele ficará sempre string e nao poderá executar metodos como o push, o getitem sempre vai buscar um astring do localstorage

const setlocalstorage=(db_card)=> localStorage.setItem('db',JSON.stringify(db_card))



//CREATE
const createcard=(card)=>{
   let db_card= getlocalstorage()  
   db_card.push(card)
   setlocalstorage(db_card)
}

//READ
const readcard=()=> getlocalstorage()

//UPDATE

const updatecard=(card,index) => {
    const db_card=readcard()
db_card[index]=card //dados atualizados
setlocalstorage(db_card)
}

//ERASE

const deletecard = (index) => {
    const db_card=readcard()
    db_card.splice(index,1) //método splice para arrays. param1: índice de start , param2: qtd de elementos a remover!
}
const isvalid=()=> {
   return document.getElementById('form').reportValidity()// método retorna true se todos os required foram atendidos e falso se não!!
}



const clearfields=()=>{
   const fields= document.querySelectorAll('.modal-field') //antes de atualizar os cards da maneira que esta no localstorage, ele exclui o lixo restante no DOM para nao duplicar cards.
   fields.forEach(
 field => field.value=''   
   )
}



const createrelato=(card,index)=> {
    const newrelato=document.createElement('div')
    newrelato.classList.add("card");
    newrelato.classList.add("m-5");
    newrelato.innerHTML=` <img src="${card.img}" class="card-img-top card-image" id="image" alt="image"> <ul class="list-group list-group-flush"> <li class="list-group-item fw-bold">Tipo:<span class="px-2" id="type">${card.tipo}</span></li>  <li class="list-group-item fw-bold">Bairro:<span class="px-2 card-descricao" id="bairro">${card.bairro}</span></li>  <li class="list-group-item fw-bold">Data: <span class="px-2 card-descricao" type="date" id='date'>${card.data}</span></li>  <li class="list-group-item fw-bold">Descrição: <span class="px-2 card-descricao" id="description" >${card.descrição} </span></li>   </ul>  <div class="card-body d-flex justify-content-around"> <button type="button" class="btn btn-danger card-button"; data-action='excluir' id='excluir-${index}'>Excluir</button> <button type="button" class="btn btn-warning card-button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-action='alterar' id='alterar-${index}'>Alterar</button> </div> `
    newrelato.style.width='18rem'

    const cards=document.getElementById('cards')
    cards.appendChild(newrelato)
    }

    const clearcards=()=> {
        const cards=document.querySelectorAll('.cards .card')
         //retorna uma array dos elementos correspondente
        cards.forEach(card => card.parentNode.removeChild(card)) //apagando o proprio elemento filho para evitar repetição dos cards!
    }

const updatecards=()=>{ 
    const db_card=readcard()
    clearcards() // para evitar que ao atualizar os cards se dupliquem na busca no localstorage
    db_card.forEach(createrelato)
}

const addcard=()=>{

    if(isvalid()){
        const card={
            descrição: document.getElementById('exampleFormControlTextarea1').value,
            tipo: document.getElementById('tipo').value,
            bairro: document.getElementById('CEP').value, 
            data:  document.getElementById('title').value.split('-').reverse().join('/'),
            img:document.getElementById('formFile').value
        }

        const index=document.getElementById('CEP').dataset.index
        if(index=='new'){
        createcard(card)
        console.log('cadastrando...')
        clearfields()
        updatecards()
        }
        else{
            updatecard(parseInt(index),card)
            updatecards()
        }
    }


    else{
        alert('Voce nao preencheu tudo!')
    }


}
const preencher=(card)=>{
            document.getElementById('exampleFormControlTextarea1').value=card.descrição
            document.getElementById('tipo').value=card.tipo
            document.getElementById('CEP').value =card.bairro
            document.getElementById('title').value=card.data
           //document.getElementById('formFile').value=card.img
           document.getElementById('CEP').dataset.index=card.index
}



const editarcard=(index)=>{
    const card=readcard()[index]
    card.index=index
     preencher(card)

}



const editdelet=(event)=> {
    console.log(event.target.type) // retorna um pointerveent, target te retorna qual elemento vc clicou! type vai te informar o type do botao ja que so apenas o botoes possuem esse atributo

    if (event.target.type==='button'){
       const [action,index] = event.target.id.split('-') //maneira diferente de nomear os indices de uma array
       if (action=='alterar'){
        editarcard(parseInt(index))
       }
       else{
        const response= confirm('Deseja mesmo excluir o seu Relato?')
        if(response){
       deletecard(parseInt(index))
       updatecards()
        }
       }
    }
}



document.getElementById('modal-button').addEventListener('click',addcard) //param1: tipo do evento; param2: o que vai ser realizado, função sem o () senão vai  dar erro!!!!



document.querySelector('.cards').addEventListener('click',editdelet)

