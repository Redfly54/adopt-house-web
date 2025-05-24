import CardItem from "./card-item";
import { useState, useEffect } from "react";

const CardList = ({user}) => {
    const apiURL = import.meta.env.VITE_API_URL;
    const [posts, setPosts] = useState([]);
    console.log(user);

    useEffect(() => {
        if (user) {
            fetch(`${apiURL}/results/${user}`)
                .then(res => res.json())
                .then(data => {
                    if (data.result) setPosts(data.result);
                });
        }
    }, [apiURL, user]);

    return (
        <div className="card-list w-full h-screen bg-white flex flex-wrap gap-4">
            {posts.map(post => (
                <CardItem key={post.id} post_id={post.id} pet={post} apiURL={apiURL} />
            ))}
        </div>
    )
}

export default CardList;