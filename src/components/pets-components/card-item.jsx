const CardItem = ({ pet, apiURL }) => {
    return (
        <div className="relative bg-white rounded-xl border border-gray-400 shadow w-48 overflow-hidden flex flex-col items-center">
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
        </div>
    );
};

export default CardItem;