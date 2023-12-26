
import { useData } from "../hooks/context-hook";



const SideNav = () => {
    const {
        iconClose,
        handleSideNav
    } = useData()


    return (
        <div className="sideNav-opacity">

            <div className='sideNav'>

                <img src={iconClose} alt="closeImg"
                    onClick={(e) => handleSideNav(e)}
                />
                <br />
                <br />
                <br />
                <p> Collections </p>
                <br />
                <p> Men </p>
                <br />
                <p> Woman </p>
                <br />
                <p> About </p>
                <br />
                <p> Contact </p>

            </div>
        </div>
    )
};

export default SideNav
