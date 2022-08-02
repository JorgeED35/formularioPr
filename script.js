const url = 'https://jsonplaceholder.typicode.com/posts/'

/* fetch(url) //introduccion al fetch
.then(res => res.json())
.then(data => console.log(data))
.catch(e => console.log(e))
.finally(() => console.log("Finalizo empty")) */

const findPostById = async (id) => {

    try {
        const res = await fetch(url + id)
        const post = await res.json()

        console.log(post)
    } catch (error) {
        
       
    }finally{
        console.log("Yo ahi estare IPA")
    }

}
findPostById(101)