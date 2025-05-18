import "../styles/content.css";

const Content = ({
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    img,
    alt,
    imgStart,
}) => {
    return (
        <>
            <div
                className={
                    lightBg ? "home__content-section justify-items-center" : "home__content-section darkBg justify-items-center rounded-2xl"
                }
            >
                <div className="container items-center">
                    <div
                        className="row home__content-row justify-between px-[5rem] py-[2rem] "
                        style={{
                            display: "flex",
                            flexDirection: imgStart === "start" ? "row-reverse" : "row",
                        }}
                    >
                        <div className="md: col-auto">
                            <div className="home__content-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? "heading" : "heading dark"}>
                                    {headline}
                                </h1>
                                <p
                                    className={
                                        lightTextDesc
                                            ? "home__content-subtitle"
                                            : "home__content-subtitle dark"
                                    }
                                >
                                    {description}
                                </p>
                            </div>
                        </div>
                        <div className="md: col-auto">
                            <div className="home__content-img-wrapper">
                                <img
                                    src={img}
                                    alt={headline}
                                    className="home__content-img"

                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}

export default Content;