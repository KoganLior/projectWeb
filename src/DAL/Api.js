
export default function getUser(){
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response=>response.json())
        .then(data=>console.log(data))
}


export default function getProductByID(id){
    fetch("product.url")
        .then(response=>response.json())
        .then(data=>console.log(data))
}


export default function getAllProducts(){
    fetch("url.nice")
        .then(response=>response.json())
        .then(data=>{return data})
}