import { useEffect, useState } from "react";

export const Posts = () => {
    const [allPosts, setAllPosts] = useState([]);     
    useEffect(() => {
        const allPosts = fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            setAllPosts(data.posts)
        })
        .catch(error => console.log(error));
    },[]);
    
    return(
        <div>
            {allPosts.map((item) => (
            <div key={item.id}>
                <p>{item.title}</p>
                <p>{item.views}</p>
            </div>
            ))}
    </div>
    );
};
