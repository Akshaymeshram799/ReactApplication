import '../css/Products.css'
import ProductCard from './ProductCard';
import img1 from '../Images/animation/1.png'
import img2 from '../Images/animation/2.png'
import img3 from '../Images/animation/3.png'
import img4 from '../Images/animation/4.png'
import img5 from '../Images/animation/5.png'
import img6 from '../Images/animation/6.png'

const Products = () => {
    return (
        <>
            <div className="products-con">
                <h1 data-aos="flip-up">Lets Learn and create Web.</h1>
                <p data-aos="flip-down">
                    People come to React from different backgrounds and with different learning styles. Whether you prefer a more theoretical or a practical approach, we hope you’ll find this section helpful.
                </p>

                <div className='productsCards' data-aos="zoom-in"> 
                     <ProductCard img={img1}/>
                     <ProductCard img={img2}/>
                     <ProductCard img={img3}/>
                     <ProductCard img={img4}/>
                     <ProductCard img={img5}/>
                     <ProductCard img={img6}/>
                </div>
            </div>
        </>
    );
}

export default Products;