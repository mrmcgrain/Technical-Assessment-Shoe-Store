import Header from "../comps/Header"
import Body from "../comps/Body"
import LightBox from "../comps/LightBox"

import { useData } from "../hooks/context-hook";

const DashBoard = () => {

    const { display, lightBox } = useData()

  return (

    <div id='DashBoard' 
    > 


{lightBox && <LightBox />}

         <Header />

         <Body />
      
    </div>
  )
};

export default DashBoard
