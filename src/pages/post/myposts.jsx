import React, { useState, useEffect } from 'react';

const MyPosts = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem('auth_token');
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // Fetch user profile
  useEffect(() => {
    if (token) {
      fetch(`${apiURL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(res => res.ok ? res.json() : null)
        .then(data => setUser(data))
        .catch(() => setUser(null));
    }
  }, [token, apiURL]);

  // Fetch posts by user
  useEffect(() => {
   if (token && user?.user_id) {
    fetch(`${apiURL}/pets?user_id=${user.user_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.ok ? res.json() : { data: [] })
      .then(json => setPosts(json.data || []))
      .catch(() => setPosts([]));
  }
    }, [token, apiURL, user]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <h2 className="text-4xl font-bold text-center mb-2 font-poppins">Your Post Pet</h2>
      <hr className="border-black w-11/12 mx-auto mb-8" />
      <div className="flex flex-wrap justify-center gap-6">
        {posts.map((post) => (
          <div key={post.id} className="flex flex-col items-center">
            <div className="bg-white rounded-xl border border-black shadow flex flex-col items-center w-56 pb-4 relative">
              <img
                src={`${apiURL}/${post.pictures[0]}`}
                alt={post.name || post.pet_name}
                className="w-full h-48 object-cover rounded-t-xl p-3 object-fill"
              />
              {/* Heart icon */}
              <span className="absolute top-3 right-3 text-red-500 text-2xl select-none">❤️</span>
              <div className="w-full flex flex-col items-start px-4 mt-2">
                <span className="font-bold text-lg font-poppins">{post.name || post.pet_name}</span>
                <span className="text-sm font-poppins">{post.breed?.name || post.breed}</span>
              </div>
            </div>
            {/* Buttons below the card */}
            <div className="flex gap-2 mt-3">
              <button className="bg-yellow-300 hover:bg-yellow-500 text-black font-bold py-1 px-6 rounded-lg font-poppins">
                Edit
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-6 rounded-lg font-poppins">
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;