


import { useData } from "../hooks/context-hook";
// import React, {useState} from "react"
// import del from "../assets/icon-delete.svg"

const Cart = () => {

    const { cart, del, thumb1, productData, price, count, total, handleDelete } = useData()
    // const [modal, setModal] = useState("block")

    return (
        <div id='Cart'

       
        >
           

            <div className="cart-header">
                <p> Cart </p>
                <br />
            </div>
            <br />

            <div className="cart-data">

                {!cart ? (

                    <p> Your cart is empty</p>

                ) : (
                        <div
                        >

                            <div className="margin-0 checkout-flex">
                                <br />

                          
                                    <img className="check-thumb" src={thumb1} />

                                <div className="cartTxt">
                                    <div


                                        className="margin-0"> {productData.product.title}</div>

                                    {`$${price}.00  x ${count}  `}
                                        <span style={{ fontWeight: "bold" }}>
                                            ${total}.00
                                        </span>

                                </div>
                                

                                    <img
                                        onClick={(e) => handleDelete(e)}

                                        className="trash" src={del} />



                            </div>

                            <br />
                            <div>
                                <button className="checkOut">

                                    checkout
                                    </button>
                            </div>
                        </div>
                    )}


            </div>


        </div>
    )
};

export default Cart













// import { useData } from "../hooks/context-hook";
// // import React, {useState} from "react"
// // import del from "../assets/icon-delete.svg"

// const Cart = () => {

//     const { cart, del, thumb1, productData, price, count, total, handleDelete } = useData()
//     // const [modal, setModal] = useState("block")

//     return (
//         <div id='Cart'

//         // className="modal"
//         // style={`{display: ${modal}}`}
//         >
//             {/* {console.log("cat", cart)} */}
            
//             <div>

//                 <div className="cart-header">
//                     <p> Cart </p>
//                     <br />
//                 </div>
//                 <br />

//                 <div className="cart-txt">

//                     {!cart ? (

//                         <p> Your cart is empty</p>

//                     ) : (
//                             <div style={{ margin: "0px", width: "400px" }}>

//                                 <div className="margin-0 checkout-flex">
//                                     <br />

//                                     <div className="check-thumb"
//                                     >
//                                         <img className="check-thumb" src={thumb1} />
//                                     </div>

//                                     <div>
//                                         <div style={{ width: "300px" }} className="margin-0"> {productData.product.title}</div>

//                                         <div className="margin-0">{`$${price}.00 x ${count}`}
//                                             <span style={{ fontWeight: "bold" }}>
//                                                 ${total}.00
//                                         </span>
//                                         </div>
//                                     </div>

//                                     <div className="trash">

//                                         <br />
//                                         <img 
//                                         onClick={(e)=>handleDelete(e)}

//                                         className="trash" src={del} />

//                                     </div>

//                                 </div>

//                                 <br />
//                                 <div>
//                                     <button className="checkOut">

//                                         checkout
//                                     </button>
//                                 </div>
//                             </div>
//                         )}


//                     {/* do you remeber how to */}
//                 </div>

//             </div>

//         </div>
//     )
// };

// export default Cart
