import React, { useState } from 'react'
import Card from '../components/Card';
import Loader from '../components/Loader';


const Home:React.FC<any> = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const [posts, setPosts]     = useState<Array<any>>([]);

  return (
    <div>
        {loading ? <Loader/> :<Card posts={posts} />}
    </div>
  )
}

export default Home