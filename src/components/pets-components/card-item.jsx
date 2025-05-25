import { useNavigate } from "react-router-dom";
import MarkFav from "./MarkFav";

const CardItem = ({ pet, apiURL, favorites }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pet-detail/${pet.id}`);
    };



    return (
        <div onClick={handleClick} className="relative bg-white rounded-xl border border-gray-400 shadow w-48 overflow-hidden flex flex-col items-center">
            <img
                src={`${apiURL}/${pet.pictures[0]}`}
                alt={pet.pet_name}
                className="w-full h-40 object-cover rounded-t-xl"
            />
            <div className="flex w-full px-4 pb-4 pt-2 items-center justify-between">
                <span className="text-lg font-poppins">{pet.pet_name}</span>
                <span className="text-5xl">I</span>
                <span className="text-black text-lg text-right">
                    {pet.breed?.name}
                </span>
            </div>
            <div className="absolute top-3 right-3 text-2xl select-none focus:outline-none cursor-pointer">

                <MarkFav pet={pet} apiURL={apiURL} favorites={favorites} />
            </div>
        </div>
    );
};

export default CardItem;
