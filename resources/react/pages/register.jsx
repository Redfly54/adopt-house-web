import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [kelurahan, setKelurahan] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [city, setCity] = useState('');
    const [province, setProvince] = useState('');
    const [agree, setAgree] = useState(false);

    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (agree) {
            console.log({
                username,
                email,
                password,
                phone,
                address,
                kelurahan,
                kecamatan,
                city,
                province
            });
            // Redirect to another page after successful registration
            // navigate('/login');
        }
    };

    return (
        <div className="register-page flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-10 my-20">
                <h2 className="text-2xl font-semibold text-center mb-8">Sign Up</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
                    <div>
                        <label className="block mb-1">Username</label>
                        <input
                            type="text"
                            placeholder="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Email@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Handphone Number</label>
                        <input
                            type="text"
                            placeholder="085****"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Alamat</label>
                        <input
                            type="text"
                            placeholder="Jalan"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Kelurahan</label>
                        <input
                            type="text"
                            placeholder="Kelurahan"
                            value={kelurahan}
                            onChange={(e) => setKelurahan(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Kecamatan</label>
                        <input
                            type="text"
                            placeholder="Kecamatan"
                            value={kecamatan}
                            onChange={(e) => setKecamatan(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Kota</label>
                        <input
                            type="text"
                            placeholder="Kota"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1">Provinsi</label>
                        <input
                            type="text"
                            placeholder="Provinsi"
                            value={province}
                            onChange={(e) => setProvince(e.target.value)}
                            className="w-full p-2 bg-gray-200 rounded"
                            required
                        />
                    </div>
                </form>
                <div className="mt-6 flex flex-col items-center">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className='border-black-500 border-5'
                            checked={agree}
                            onChange={(e) => setAgree(e.target.checked)}
                            required
                        />
                        <span>I accept the <a href="#" className="text-black-500 underline">Terms & Policy</a></span>
                    </label>

                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="mt-4 w-1/2 bg-sky-500 text-white py-2 rounded hover:bg-blue-500 transition mx-auto"
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
