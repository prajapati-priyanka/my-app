const CategoryCard = ({products}) => {

    const {categoryName, image} = products;
    console.log("in CategoryCard", products)
    return (
        <>
        <div className="card ecommerce-card">
                    <div className="card-with-text-overlay">
                        <figure className="card-header">
                            <img src={image} alt="" />
                        </figure>
                    </div>
                <div className="text-overlay lg-text">{categoryName}</div>
            </div>
            
        </>
    )
}

export {CategoryCard};
