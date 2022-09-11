import { useEffect,useState } from "react"
import {Col} from "react-bootstrap"
import { getHomePageProductDetails, getProductImgByID } from "../DAL/Api"
export default function HomePageProduct(props){
  
    // -------------------- getting the product Image -----------------
    const [imgs, setImgs] = useState("")

    async function getImg(){
      const productImg= await getProductImgByID(props.id)
      setImgs(productImg.source)
    } 
    useEffect(()=>{getImg()},[])

    //------------------------------------------------------------------


     // -------------------- getting the product Price/Details -----------------
     const [productPrice, setPrice] = useState("")

     async function getProductPrice(){
       const productPrice= await getHomePageProductDetails(props.id)
       console.log(productPrice[0].price)
       setPrice(productPrice[0].price)
     } 
     useEffect(()=>{getProductPrice()},[])
 
     //------------------------------------------------------------------
     

    return(
        <Col sm="3">
            <div className="p-2">
              <img
                src={imgs}
                alt=""
                width="340"
                className="img-fluid rounded shadow-sm"
              />
              <div class="ms-3 d-inline-block align-middle">
                <h5 className="mt-3">{props.name}</h5>
                <h6 className="homePageProductPrice">{productPrice} $ </h6>
              </div>
            </div>
          </Col>
    )
}