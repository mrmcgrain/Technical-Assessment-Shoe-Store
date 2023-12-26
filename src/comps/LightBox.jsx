
import { useData } from "../hooks/context-hook"
// import ProductInfo from "./ProductInfo"
const LightBox = () => {

    const { iconPrev, 
        iconNext, 
        handleSlideShow,
        iconClose, 
        handleLight, 
        thumb1,
        thumb2,
        thumb3,
        thumb4,
        thumbs,
        slide } = useData()

    return (
        <div id='LightBox'
        // onClick={(e) => handleLight(e)}
            onClick={(e) => e.target.id === "LightBox" ? handleLight(e) : null
        }
        >


            <div
                className="light-flex"
                
                >


                <div id="-"
                    onClick={(e) => handleSlideShow(e)}
                    style={{
                        backgroundColor: "white", borderRadius: "50px"
                    }}>

                    <img className="leftArrow"
                        alt="leftArrow"
                        id="-"
                        src={iconPrev}

                    />

                </div>

                <div>

                    <div className="close-flex">
                        <img src={iconClose}
                        alt="iconClose"
                            onClick={(e) => handleLight(e)}
                        />
                    </div>


                    <div
                        id="prev-img"
                        className="border"
                        style={{ backgroundImage: `url(${thumbs[slide]})` }}
                    >      </div>


                    <div className="border">

                        <div id="thumbs">

                            <div
                                style={{ backgroundImage: `url(${thumb1})` }}
                                className="thumbs"
                                id="0"
                                onClick={(e) => handleSlideShow(e)}
                            >
                            </div>

                            <div
                                style={{ backgroundImage: `url(${thumb2})` }}
                                className="thumbs"
                                id="1"
                                onClick={(e) => handleSlideShow(e)}
                            > </div>
                            <div
                                style={{ backgroundImage: `url(${thumb3})` }}
                                className="thumbs"
                                id="2"
                                onClick={(e) => handleSlideShow(e)}
                            > </div>

                            <div
                                style={{ backgroundImage: `url(${thumb4})` }}
                                className="thumbs"
                                id="3"
                                onClick={(e) => handleSlideShow(e)}
                            > </div>


                        </div>

                    </div>

                </div>

                <div
                    onClick={(e) => handleSlideShow(e)}
                    id="+"
                    style={{ backgroundColor: "white", borderRadius: "50px" }}>

                    <img className="rightArrow"
                    alt="rightArrow"
                        id="+"
                        src={iconNext}

                    />
                </div>

            </div>

        </div>
    )
};

export default LightBox
