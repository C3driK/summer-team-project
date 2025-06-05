import { useNavigate, useState } from 'react';
import useAxios from "../../hooks/useAxios";

export default function EventForm() {
    const{post} = useAxios();
    const navigate = useNavigate();
  const [formData, setFormData]= useState({
    title: '',
    date: '',
    location: '',
    description: '',
  });

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData(prev => ({...prev, [name]: value}));
}

const handleSubmit = (e) =>{
    e.preventDefault();

    const newEvent = {...formData}

    const postData = async () =>{
        const data = await post(apiUrl, newEvent);
        if(data){
            onAddEvent(data);
        navigate('/event');
        setFormData ({
            title: '',
            date: '',
            location: '',
            description: '',
        });
        }
    }

    postData();

}

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={data.title}
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
          value={data.date}
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
          value={data.location}
          onChange={handleChange}
          required
        />
     
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
       
      </div>

      <button type="submit" disabled={processing}>
        Add Event
      </button>
    </form>
  );
}
