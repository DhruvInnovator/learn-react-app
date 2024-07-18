
import { useState, useEffect } from 'react';

export default function PostCards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setData(data))
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-8xl font-bold mb-4 text-center ">dekh be hogaya </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grisdd-cols-3 gap-4">{data.map((post) => (
          <a href={`/users/${post.id}`} key={post.id}>
          <div key={post.id} className="border border-gray-300 rounded-lg p-4 shadow-md">
            <h2 className="text-xl font-bold">{post.name}</h2>
            <p className="text-gray-500">{post.email}</p>
            <p className="text-gray-500">{post.phone}</p> 
          </div>
          </a>
          ) 
        )}
      </div>
    </div>
  );
}
