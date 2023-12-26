import { useData } from "../hooks/context-hook";

// import minus from "../assets/icon-minus.svg"
// import plus from "../assets/icon-plus.svg"
// import cart from "../assets/icon-cart.svg"
// import whiteCart from "../assets/cart.svg"

const ProductInfo = () => {

  const {
    productData,
    handleCount,
    count,
    handleAddToCart,
    minus,
    plus,
    cart,
    whiteCart,
    price
  } = useData()


  return (

    <>
      <div id='ProductInfo'>
        <div id="title">
          <br />
          <p className="company">
            Sneaker Company
          </p>
        </div>

        <div id="title">
          <h1 className="title-h1">            {productData.product.title}
          </h1>
        </div>

        <br />

        <div id="desc">
          <p className="desc">   {productData.product.description} </p>
        </div>



        <div id="price">

          <div>
            <p className="price">${price}.00</p>
          </div>
          <div></div>


          <div className="disc">
            <p>{productData.product.saleOff}%</p>
          </div>
          <div id="mrsp-media">
          <p style={{textDecoration: "line-through"}}>${productData.product.price}</p>
        </div>

        </div>

        <div id="mrsp">
          <p style={{textDecoration: "line-through"}}>${productData.product.price}</p>
        </div>

        <div id="footer">

          <div className="buttons">
            <div
              className="countstuff"
              style={{ width: "100%" }}
              onClick={(e) => handleCount(e)}
              id="-"
            >
              <img src={minus} id="-" />

            </div>

            <p className="count">
              {count}
            </p>

            <div
              className="countstuff"

              style={{ width: "100%" }}

              onClick={(e) => handleCount(e)}
              id="+"

            >
              <img id="+" src={plus}


              />
            </div>

          </div>

          <div className="cart" onClick={(e) => count >= 1 ? handleAddToCart(e) : null}>

            <button className="addCart">
              <img src={whiteCart} />
              Add to cart</button>

          </div>



        </div>












      </div>
    </>
  )
};

export default ProductInfo
