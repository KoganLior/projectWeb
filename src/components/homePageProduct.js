import { useEffect,useState } from "react"
import {Col} from "react-bootstrap"
import { getProductImgByID } from "../DAL/Api"
export default function HomePageProduct(props){
  

  const [imgs, setImgs] = useState("")

    async function getImg(){
      const productImg= await getProductImgByID(props.id)
      console.log(productImg.source)
      setImgs(productImg.source)
    } 
    
    useEffect(()=>{getImg()},[])
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
                <h6 className="mt-1 mx-0">Price: 10.3$</h6>
              </div>
            </div>
          </Col>
    )
}