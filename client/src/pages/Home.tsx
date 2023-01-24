import React, { useState, useEffect } from 'react'
import Card from '../components/Card';
import Loader from '../components/Loader';
import axios from 'axios';


const Home: React.FC<any> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Array<any>>([]);


  useEffect(() => {


    const getAllPosts = async () => {
      try {

        setLoading(true)

        const { data } = await axios("http://localhost:8080/api/v1/posts");

        setPosts(data?.data)
        setLoading(false)

      } catch (error) {
        alert('Something went wrong....')
        setLoading(false)
      }
    }

    getAllPosts()

  }, [])

  return (
    <div>
      {loading ? <Loader /> : <Card posts={posts} />}
    </div>
  )
}

export default Home