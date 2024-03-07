function Product(props) {
    console.log(props);
    function handleClick() {
        props.setAmount(props.amount + 1);
    }

    return (
        <article>
            <h2>{ props.title }</h2>
            <h3>{ props.author }</h3>
            <p>{ props.text }</p>
            <button onClick={ handleClick }>Add to cart</button>
        </article>
    )
}

export default Product;