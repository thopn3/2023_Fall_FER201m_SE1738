// Tạo 1 component đặt tên là Product - Functional component
function Product({id, name, price}){
    return (
        <div className="item">
            <div>Product id: {id}</div>
            <div>Product name: {name}</div>
            <div>Price: {price}</div>
        </div>
    )
}


function ProductList({data=[]}){
    return (
        <div className="product-list">
            {
                data.map(({id, name, price})=>(
                    <Product key={id} id={id} name={name} price={price}/>
                ))
            }
        </div>
    )
}

// Export function trở thành component để sử dụng trong module khác
export default ProductList
