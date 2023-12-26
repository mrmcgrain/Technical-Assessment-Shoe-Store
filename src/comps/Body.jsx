import Preview from "./Preview"
import ProductInfo from "./ProductInfo"
import Cart from "./Cart"
import { useData } from "../hooks/context-hook";
import SideNav from "../modal/SideNav"



const Body = () => {
    const { display, handleDisplay, sideNav} = useData()


    return (
        <div id='Body'>
            {/* <p> Body </p>  */}


            <div id="container"

            >


                <div id="left-body">
                    <Preview />
                    {sideNav && <SideNav />}

                </div>

                <div id="right-body">
                    <ProductInfo />
                    {display && <Cart />}
                </div>

            </div>




        </div>
    )
};

export default Body
