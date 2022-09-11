import {Col} from "react-bootstrap"
export default function HomePageProduct(props){
    return(
        <Col sm="3">
            <div className="p-2">
              <img
                src="https://dummyimage.com/800x500/b6a9d6/151b57"
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