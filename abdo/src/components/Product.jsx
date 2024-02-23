import React from 'react'
import { Link } from 'react-router-dom';
import DATA from '../Data'
const Product = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4 " key={item.id} style={{width: "15rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <Link to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</Link>
                    </div>
</div>
                );
    }

                return (
                <div className='mybg'>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1 style={{color:'white',boxShadow:'5px'}}>Product</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product