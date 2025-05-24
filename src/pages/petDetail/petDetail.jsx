import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Carousel } from "flowbite-react";
import { FaRegHeart, FaHeart, FaShare } from "react-icons/fa6";

const PetDetail = () => {
    const { id } = useParams();
    const apiURL = import.meta.env.VITE_API_URL;
    const [petDetails, setPetDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false); // added favorite state

    useEffect(() => {
        if (id && apiURL) {
            const fetchPetDetails = async () => {
                try {
                    const response = await fetch(`${apiURL}/pet/details/${id}`);
                    if (!response.ok) {
                        throw new Error("Failed to fetch pet details");
                    }
                    let data;
                    try {
                        data = await response.json();
                    } catch (jsonErr) {
                        const text = await response.text();
                        console.error("Failed to parse JSON. Response text:", text);
                        throw jsonErr;
                    }
                    console.log("Fetched pet details:", data);
                    setPetDetails(data);
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchPetDetails();
        } else {
            setError("Pet ID or API URL is missing");
            setLoading(false);
        }
    }, [id, apiURL]);

    const handleShareClick = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href)
                .then(() => {
                    alert("Link copied to clipboard!");
                })
                .catch((err) => {
                    alert("Failed to copy link: " + err);
                });
        } else {
            alert("Clipboard API not supported");
        }
    };

    if (loading) {
        return <div>Loading pet details...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!petDetails) {
        return <div>No pet details available</div>;
    }

    console.log("Rendering petDetails:", petDetails);
    return (
        <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                <Carousel slideInterval={5000}>
                    {petDetails.data.pictures && petDetails.data.pictures.map((pic, index) => (
                        <img key={index} src={`${apiURL}/${pic}`} alt={`Pet image ${index + 1}`} />
                    ))}
                </Carousel>
            </div>
            <div className="grid lg:grid-flow-col lg:grid-rows-2 gap-4 p-[2rem]">
                <div className="lg:col-span-2 md:col-span-1 row-start-1 row-end-3 bg-(--white) rounded-2xl mt-4 p-[4rem]">

                    <h1 className="text-3xl font-bold mb-2"><strong>{petDetails.data.pet_name}</strong></h1>
                    <p className=" text-xl mb-1"><strong>Jenis:</strong> {petDetails.data.breed?.name}</p>
                    <hr />
                    {/* <div className="flex items-center mb-2">
                        {petDetails.category?.icon && (
                            <img
                                src={`${apiURL}/${petDetails.category.icon}`}
                                alt={petDetails.category.name}
                                className="w-8 h-8 mr-2 object-contain"
                            />
                        )}
                        <p className="text-lg font-semibold">{petDetails.data.category?.name}</p>
                    </div> */}
                    <div className="grid grid-flow-col gap-1 my-[1rem] ">
                        <p className="mb-1"><strong>Kelamin:</strong> {petDetails.data.gender}</p>
                        <p className="mb-1" title={petDetails.data.age?.description} ><strong>Umur:</strong> {petDetails.data.age?.category}</p>
                        <p className="mb-1"><strong>Berat:</strong> {petDetails.data.weight} Kg</p>
                        <p className="mb-1"><strong>Jumlah Warna:</strong> {petDetails.data.color_count}</p>
                    </div>
                    <hr />
                    <p className="my-[1rem]"><strong>Tentang {petDetails.data.pet_name} <br /> </strong> {petDetails.data.about_pet}</p>
                </div>
                <div className="lg:row-start-1 mt-4 p-[4rem] bg-(--white) rounded-2xl">
                    <h3 className="text-xl font-semibold mb-2">Informasi Owner</h3>
                    <hr />
                    <div>
                        <p className="my-[1rem]"><strong>Address:</strong> <br /> <hr /> <br />{petDetails.data.user?.alamat || petDetails.data.user?.address || 'N/A'}</p>
                        <p className="my-[1rem]"><strong>Email:</strong> <br /> <hr /> <br />{petDetails.data.user?.email}</p>
                        <p className="my-[1rem]"><strong>Phone:</strong> <br /> <hr /> <br />{petDetails.data.user?.phone}</p>
                    </div>
                    <div className="flex justify-between mb-2">
                        <div className="grid grid-cols-2 gap-2 my-[1rem]">
                            {petDetails.data.user?.picture && (
                                <img
                                    src={`${apiURL}/${petDetails.data.user.picture}`}
                                    alt={petDetails.data.user.username}
                                    className="w-10 h-10 rounded-full mr-3 object-cover"
                                />
                            )}
                            <p>{petDetails.data.user?.username}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 my-[1rem]">
                            <div
                                className="favorite bg-(--blue-sky) justify-items-center h-10 w-10 rounded-4xl cursor-pointer flex items-center justify-center"
                                onClick={() => setIsFavorite(!isFavorite)}
                                aria-label="Toggle favorite"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsFavorite(!isFavorite); }}
                            >
                                {isFavorite ? <FaHeart /> : <FaRegHeart />}
                            </div>
                            <div
                                className="share bg-(--blue-sky) justify-items-center h-10 w-10 rounded-4xl flex items-center justify-center cursor-pointer"
                                onClick={handleShareClick}
                                aria-label="Share link"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleShareClick(); }}
                            >
                                <FaShare />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetail;
