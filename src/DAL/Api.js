
export function getUser(){
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response=>response.json())
        .then(data=>console.log(data))
}


export async function getProductByID(id){
   return fetch(`http://localhost:3300/products/id/${id}`)
   .then(response=>response.json())
   .then(data=>data)
}

export async function getHomeProducts(){
   return fetch(`http://localhost:3300/products/homeProducts`)
   .then(response=>response.json())
   .then(data=>data)
}


export function getAllProducts(){
    return fetch("url.nice")
        .then(response=>response.json())
        .then(data=>{return data})
}

export async function getProductImgByID(id){
    return fetch(`http://localhost:3300/productImg/id/${id}`)
   .then(response=>response.json())
   .then(data=>data)
}

export async function getHomePageProductDetails(productID){
    return fetch(`http://localhost:3300/productDetails/id/${productID}`)
        .then(response=>response.json())
        .then(data=>data)
}

export async function getCategories(){
    return fetch("http://localhost:3300/categories/all")
    .then(response=>response.json())
    .then(data=>data)
}