import ProductInCart from "./productInCart"
export default function CartPage(){
    return (
        <section class="py-5">
                <div class="container px-4 px-lg-5 my-5">
                <div class="row">
                <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">
                   
                    <div class="table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col" class="border-0 bg-light">
                            <div class="p-2 px-3 text-uppercase">Product</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Price</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase">Quantity</div>
                            </th>
                            <th scope="col" class="border-0 bg-light">
                            <div class="py-2 text-uppercase"></div>
                            </th>
                            
                        </tr>
                        </thead>
                        <tbody>
                       <ProductInCart></ProductInCart>
                       <ProductInCart></ProductInCart>
                       
                        </tbody>
                    </table>
                    </div>
                   
                </div>
                </div>
                
                <div class="row py-5 p-4 bg-white rounded shadow-sm">
                <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary </div>
                    <div class="p-4">
                    <p class="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="text-muted">Total</strong>
                        <h5 class="fw-bold">$400.00</h5>
                        </li>
                    </ul><a href="#" class="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Coupon code</div>
                    <div class="p-4">
                    <p class="mb-4"><em>If you have a coupon code, please enter it in the box below</em></p>
                    <div class="input-group mb-4 border rounded-pill p-2">
                        <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3" class="form-control border-0" />
                        <div class="input-group-append border-0">
                        <button id="button-addon3" type="button" class="btn btn-dark px-4 rounded-pill"><i class="fa fa-gift mr-2"></i>Apply coupon</button>
                        </div>
                    </div>
                    </div>
                    
                </div>
                
                </div>
            </div>
            </section>
    )
}