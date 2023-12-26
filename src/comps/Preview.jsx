
import { useData } from "../hooks/context-hook";

const Preview = () => {

    const {

        thumb1,
        thumb2,
        thumb3,
        thumb4,
        handleLight,
        thumbs,
        handleSlideShow,
        iconNext,
        iconPrev,
        handlePreviewSlideShow,
        previewSlide

    } = useData()


    return (
        <>

            <div id="prevContainer">


                <div
                    className="media-arrow-left"
                    id="-"
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




                <div
                    onClick={(e) => window.screen.width > 375 ? handleLight(e) : null}
                    id="prev-img"
                    className="border"
                    style={{ backgroundImage: `url(${thumbs[previewSlide]})` }}
                >      </div>


                <div className="media-arrow-right"
                    onClick={(e) => handlePreviewSlideShow(e)}
                    id="+"
                    style={{ backgroundColor: "white", borderRadius: "50px" }}>

                    <img className="rightArrow"
                        alt="rightArrow"
                        id="+"
                        src={iconNext}

                    />
                </div>

                <div className="border">

                    <div id="thumbs">

                        <div
                            style={{ backgroundImage: `url(${thumb1})` }}
                            className="thumbs"
                            id={0}
                            onClick={(e) => handlePreviewSlideShow(e)}

                        >
                        </div>

                        <div
                            style={{ backgroundImage: `url(${thumb2})` }}
                            className="thumbs"
                            id={1}
                            onClick={(e) => handlePreviewSlideShow(e)}

                        > </div>
                        <div
                            style={{ backgroundImage: `url(${thumb3})` }}
                            className="thumbs"
                            id={2}
                            onClick={(e) => handlePreviewSlideShow(e)}

                        > </div>

                        <div
                            style={{ backgroundImage: `url(${thumb4})` }}
                            className="thumbs"
                            id={3}
                            onClick={(e) => handlePreviewSlideShow(e)}

                        > </div>


                    </div>

                </div>








            </div>







        </>
    )
};

export default Preview
