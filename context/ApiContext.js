import React, { createContext, useState } from 'react';
import axios from 'axios';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(res.data.slice(0, 5)); // Get first 5
  };

  const addPost = async () => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'New Title',
      body: 'New Body',
      userId: 1,
    });
    setPosts((prev) => [res.data, ...prev]);
  };

  const updatePost = async (id) => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      title: 'Updated Title',
      body: 'Updated Body',
      userId: 1,
    });
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? res.data : p))
    );
  };

  return (
    <ApiContext.Provider value={{ posts, getPosts, addPost, updatePost }}>
      {children}
    </ApiContext.Provider>
  );
};
