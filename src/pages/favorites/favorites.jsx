import { useState, useEffect } from "react";
import CardItem from "../../components/pets-components/card-item";
import MarkFav from "../../components/pets-components/MarkFav";

const Favorites = () => {
    const apiURL = import.meta.env.VITE_API_URL;
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchFavoritesAndPets = async () => {
            setIsLoading(true);
            const token = localStorage.getItem('auth_token');
            if (!token) {
                setError("User not authenticated");
                setIsLoading(false);
                return;
            }
            try {
                // Fetch favorite IDs
                const favResponse = await fetch(`${apiURL}/users/favorites`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                });
                if (!favResponse.ok) {
                    const text = await favResponse.text();
                    console.error('Failed to fetch favorites:', favResponse.status, text);
                    throw new Error(`Failed to fetch favorites: ${favResponse.status} ${text}`);
                }
                const favData = await favResponse.json();
                console.log('Fetched favorites IDs:', favData);

                // Fetch all pets
                const petsResponse = await fetch(`${apiURL}/pets`);
                if (!petsResponse.ok) {
                    const text = await petsResponse.text();
                    console.error('Failed to fetch pets:', petsResponse.status, text);
                    throw new Error(`Failed to fetch pets: ${petsResponse.status} ${text}`);
                }
                const petsData = await petsResponse.json();
                console.log('Fetched all pets:', petsData);

                const favoriteIds = favData.favorites || [];
                const petsList = petsData.data || [];

                // Filter pets to only favorites
                const favoritePets = petsList.filter(pet => favoriteIds.includes(pet.id));

                setFavorites(favoritePets);
            } catch (err) {
                console.error('Error fetching favorites or pets:', err);
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchFavoritesAndPets();
    }, [apiURL]);

    // Function to update favorites state when a pet is favorited or unfavorited
    const updateFavorites = (petId, isFavorited) => {
        setFavorites(prevFavorites => {
            if (isFavorited) {
                // Add pet if not already in favorites
                if (!prevFavorites.some(pet => pet.id === petId)) {
                    // Find pet object from current favorites or create a placeholder
                    const newPet = { id: petId };
                    return [...prevFavorites, newPet];
                }
                return prevFavorites;
            } else {
                // Remove pet from favorites
                return prevFavorites.filter(pet => pet.id !== petId);
            }
        });
    };

    if (isLoading) {
        return <div>Loading favorites...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!favorites.length) {
        return <div>No favorites found.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <div className="justify-items-center border-b-2 my-[2rem]">

                <h1 className="text-3xl font-bold mb-6">My Favorites</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {favorites.map((pet, index) => (
                    <div key={pet.id || index} className="relative">
                        <CardItem pet={pet} apiURL={apiURL} favorites={favorites} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
