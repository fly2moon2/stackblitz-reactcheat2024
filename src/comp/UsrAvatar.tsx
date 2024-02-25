import {FC, useEffect, useState } from 'react';

interface Props {
  name: string;
}

//export default function UsrAvatar() {
export const UsrAvatar:FC<Props> = ({ name }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
  });

  // name of handler functions 
  const handleChange = (e) => { 
  // this function gets the data whenever it is called through the element
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // we prevent the normal functionality of refreshing when form submits and add our logic.=
    alert(
      `Submitted Form Data:\nFirst Name: ${formData.firstName}\nEmail: ${formData.email}`
    );
    // Reset form fields after submitted
    setFormData({
      firstName: "",
      email: "",
    });
  };

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts));
  }, []);

  /*return (
    posts.map(post => <div>{post.title}</div>)
  );*/
   return (
      <div className="usr-avatar">
        <div>{name}</div>
        <label htmlFor="firstName">Name:</label>
        <input
        type="text"
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange} 
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <button type="submit" onClick={handleSubmit}> 
        Submit
      </button>
     
        <div>World</div>
        {/*} {posts.map(post => <div>{post.title}</div>)} */}
      </div>
  );
}