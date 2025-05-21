const CardItem = ({ pet, apiURL }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img
                src={`${apiURL}/${pet.pictures[0]}`}
                alt={pet.pet_name}
                className="w-40 h-40 rounded-lg object-cover mb-2"
            />
            <div className="font-bold text-lg">{pet.pet_name}</div>
            <div className="text-gray-500">{pet.breed?.name}</div>
        </div>
    );
};

export default CardItem;