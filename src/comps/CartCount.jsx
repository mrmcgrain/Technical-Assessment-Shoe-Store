import { useData } from "../hooks/context-hook"
const CartCount = () => {


const { count } = useData()

  return (
    <> 
         <p 
                        className="cartCount"
                        style={{ fontSize: "-1px" }}
                        >
                        {count}
                        </p>
                       
      
    </>
  )
};

export default CartCount
