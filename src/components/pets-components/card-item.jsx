import { useState } from "react";

const CardItem = ({ pet, apiURL,favorites }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isFavorited, setIsFavorited] = useState(favorites.includes(pet.id));

    const handleFavorite = async () => {
        setIsLoading(true);
        const token = localStorage.getItem('auth_token');
        try {
            const response = await fetch(`${apiURL}/users/favorites`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ posts: [pet.id] }),
            });
            if (response.ok) {
                setIsFavorited(true);
                const data = await response.json();
                console.log(favorites);
                alert(data.message);
            }
        } 
        catch (err) {
            alert("Failed to add favorite");
            console.error("Error adding favorite:", err);
        }
        setIsLoading(false);
    };

     const handleUnfavorite = async () => {
        const token = localStorage.getItem('auth_token');
        setIsLoading(true);
        try {
            const response = await fetch(`${apiURL}/users/favorites/${pet.id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            if (response.ok) {
                setIsFavorited(false);
                const data = await response.json();
                console.log(favorites);
                alert(data.message);
            }
        } 
        catch (err) {
            alert("Failed to add favorite");
            console.error("Error adding favorite:", err);
        }
        setIsLoading(false);
    };

    return (
        <div className="relative bg-white rounded-xl border border-gray-400 shadow w-48 overflow-hidden flex flex-col items-center">
            <img
                src={`${apiURL}/${pet.pictures[0]}`}
                alt={pet.pet_name}
                className="w-full h-40 object-cover rounded-t-xl"
            />
            <button
                type="button"
                className={`absolute top-3 right-3 text-2xl select-none focus:outline-none cursor-pointer ${
                    isFavorited ? "text-red-500" : "text-gray-400"
                }`}
                onClick={isFavorited ? handleUnfavorite : handleFavorite}
                disabled={isLoading}
                title={isFavorited ? "Remove from favorites" : "Add to favorites"}
            >
                ❤️
            </button>
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