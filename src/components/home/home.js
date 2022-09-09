
import React, { useState, useEffect } from 'react'
import axios from '../../axios'
import Post from '../post/Post'
import './home.css'


function Home({ selectedOption }) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function fetchData() {
            let headersList = {
                "Accept": "*/*",
                "app-id": "63191962b021bd6318c63093"
            }

            let reqOptions = {
                url: "https://dummyapi.io/data/v1/post?limit=10",
                method: "GET",
                headers: headersList,
            }

            let response = await axios.request(reqOptions);
            console.log(response.data);
            setPosts(response.data.data)
        }

        fetchData()
    }, [selectedOption])

    return (
        <div className='main'>
            {posts.map((post) => (
                <Post post={post} />

            ))}
        </div>
    )
}

export default Home