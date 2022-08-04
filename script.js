//Invocando los elelmentos a cambiar con JS
const loading = document.querySelector('#loading')

//addEventListener para que al momento de la ejecucion este tenga que esperar 
document.addEventListener('DOMContentLoaded', () => {
    fetchApi()
    
})

//async y await para implementar una promesa como metodo para consumir la API
const fetchApi = async () => {
//    console.log('Jomar Player w Js')
    try {
        loadingStatus(true)
        
        const res = await fetch('https://rickandmortyapi.com/api/character')
        const data = await res.json()

       //console.log(data)
       pintarData(data)
    } catch (error) {
        
    } finally{
         loadingStatus(false)
    }
}

const pintarData = data =>{
    const cards = document.querySelector('#card-dina')
    const templatesCard = document.querySelector('#template-card').content
    const fragment = document.createDocumentFragment()
    
    data.results.forEach(item => {
       //console.log(item)
       const clone = templatesCard.cloneNode(true)
       clone.querySelector('h5').textContent = item.name
       clone.querySelector('p').textContent = item.species
       clone.querySelector('img').setAttribute("src", item.image)

       //Guardado en el frangment para evitar el reflow 
       fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
}
//Pintar el loading  
const loadingStatus = (status) => {
    if (status) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
            }
}