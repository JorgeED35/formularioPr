const posts = [
    {
        userId: 1,
        id: 1,
        title:"Jomar",
        body:
            "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "Isabel",
        body:
            "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "Piter",
        body:
            "pitel\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

const findPostId = (id) => 

    new Promise((resolve, reject) => {
            setTimeout(() => {
            const post = posts.find((item) => item.id === id)
            if(post){
                resolve(post)
            }else{
                reject("No se encuentra ningun usuario referente a este id: " + id)
            }

        }, 2000);

    })


/* findPostId (2)
.then((post) => {
    console.log(post)})
.catch(e => console.log(e)); */

const buscar = async (id) => {
try {
    const resPost = await Promise.all([
        findPostId(1),
        findPostId(2)
    ])
    console.log(resPost[1].title, resPost[0].title)

    //const post1 = await findPostId(1)
    //const post2 = await findPostId(2)
    //console.log(post2.title, post1.title)
    } catch (error) {
    console.log(error)
} finally{
    console.log("se ejcuta si o si")
}

}
buscar(4)

console.log("Fin del codigo jj")