import {  useState } from 'react';
import { useNavigate } from 'react-router';
import useAxios from "../../hooks/useAxios";
import axios from 'axios';

export default function EventForm({onAddEvent,apiUrl}) {
    const{post} = useAxios();
    const navigate = useNavigate();
  const [formData, setFormData]= useState({
    title: '',
    date: '',
    location: '',
    description: '',
    type:'',
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
}

const handleSubmit = (e) =>{
    e.preventDefault();

    const newEvent = {...formData}

    // const postData = async () =>{
    //     const data = await post(apiUrl, newEvent);
    //     if(data){
    //         onAddEvent(data);
    //     navigate('/events');
    //     setFormData ({
    //         title: '',
    //         date: '',
    //         location: '',
    //         description: '',
    //         type:'',
    //     });
    //     }
    // }

    // postData();

    axios.post('http://127.0.0.1:8000/api/events', newEvent)
    .then((res) => {
      onAddEvent(res.data); // passing the response data (new book) from the server to APP component
        navigate('/events');
        setFormData({   title: '',
                  date: '',
                  location: '',
                  description: '',
                  type:'',});
    })
    .catch(err => console.error('Failed to add book', err));

}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
        />
       
      </div>

      <div>
        <label htmlFor="date">Date & Time</label>
        <input
          id="date"
          name="date"
          type="datetime-local"
          value={formData.date}
          onChange={handleChange}
          required
        />
  
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          required
        />
     
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
       
      </div>

      <div>
        <label htmlFor="type">Type</label>
        <textarea
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
       
      </div>

      <button type="submit" >
        Add Event
      </button>
    </form>
  );
}
