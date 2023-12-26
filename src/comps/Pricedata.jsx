import { useData } from "../hooks/context-hook";


const Pricedata = () => {

const {price, productData} = useData()


    return (
        <div id='Pricedata'>
            <p> Pricedata </p>

        </div>
    )
};

export default Pricedata
