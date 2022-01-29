import '../css/ProductCard.css'



const ProductCard = ({img}) => {
    return (
        <>
            <div className="product">
                <div className='nav'>
                    <div className="circle" style={{backgroundColor:'rgb(255, 110, 91)'}}></div>
                    <div className="circle" style={{backgroundColor:'rgb(255, 252, 102)'}}></div>
                    <div className="circle" style={{backgroundColor:"rgb(0, 255, 98)"}}></div>
                </div>
                <div className='img'>
                    <img src={img} alt="" />
                </div>
            </div>
        </>
    );
}

export default ProductCard;