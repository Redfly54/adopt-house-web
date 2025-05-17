import React, { useRef } from 'react';
import HeroBG from '../../assets/img/HeroBG.png';

const HeroSection = ({ user, isEditing, setUser }) => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
    const fileInputRef = useRef(null);
    const apiURL = import.meta.env.VITE_API_URL;

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const token = localStorage.getItem('auth_token');
            const formData = new FormData();
            formData.append('picture', file);

            console.log('FormData:', formData);

            try {
                const response = await fetch(`${apiURL}/users/update-picture`, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    alert('Profile picture updated successfully!');
                    setUser(data.user);
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || 'Failed to update profile picture');
                }
            } catch (error) {
                alert('An error occurred while uploading the picture.');
                console.error(error);
            }
        }
    };

    return (
        <div className="section-Hero bg-(--grey) h-screen mx-10 py-5 ">
            <img
                src={HeroBG}
                alt="Hero Background"
                className="object-cover filter opacity-80 rounded-md"
            />

            <div className="relative z-10 text-center text-black">
                {isEditing ? (
                    <>
                        <img
                            src={`${BACKEND_URL}/${user.picture}`}
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto border-4 p-1 border-white shadow-lg cursor-pointer"
                            onClick={handleImageClick}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            ref={fileInputRef}
                            style={{ display: 'none' }}
                            onChange={handleFileChange}
                        />
                    </>
                ) : (
                    <img
                        src={`${BACKEND_URL}/${user.picture}`}
                        alt="Profile"
                        className="w-32 h-32 rounded-full mx-auto border-4 p-1 border-white shadow-lg"
                    />
                )}

                <h1 className="text-4xl font-bold">{user.username}</h1>
            </div>
        </div>
    );
};

export default HeroSection;