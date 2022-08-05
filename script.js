//Invocando los elelmentos a cambiar con JS
const loading = document.querySelector('#loading')

//addEventListener para que al momento de la ejecucion este tenga que esperar 
document.addEventListener('DOMContentLoaded', () => {
    fetchApi()    
})



//async y await para implementar una promesa como metodo para consumir la API
const fetchApi = async (url = 'https://rickandmortyapi.com/api/character') => {
    //    console.log('Jomar Player w Js')
    try {
        loadingStatus(true)
        
        const res = await fetch(url)
        const data = await res.json()

       //console.log(data)
       pintarData(data)
    } catch (error) {
        
    } finally{
         loadingStatus(false)
    }
}

const pintarData = data => {
    const cards = document.getElementById('card-dina')
    const templatesCard = document.getElementById('template-card').content
    cards.textContent = "";
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
    pintarPaginacion(data.info)
}

const pintarPaginacion = data => {
    //console.log(data)
    const pagina = document.getElementById('paginacion')
    pagina.textContent = "";
    const templatePag = document.getElementById('template-paginacion').content
    const clone = templatePag.cloneNode(true)

    if (data.prev) {
        clone.querySelector('.btn-outline-secondary').disabled = false;
    } else {
        clone.querySelector('.btn-outline-secondary').disabled = true; 
    }

    if (data.next) {
        clone.querySelector('.btn-outline-primary').disabled = false;
    } else {
        clone.querySelector('.btn-outline-primary').disabled = true;
        
    }
        
    pagina.appendChild(clone)
    
    pagina.addEventListener('click', e => {
        if (e.target.matches(".btn-outline-primary")) {
            console.log('click on me')
            fetchApi(data.next)
        }

        if (e.target.matches(".btn-outline-secondary")) {
            console.log('click on you')
            fetchApi(data.prev)
        }
    })
}
//Pintar el loading  
const loadingStatus = (status) => {
    if (status) {
        loading.classList.remove('d-none')
    } else {
        loading.classList.add('d-none')
            }
}