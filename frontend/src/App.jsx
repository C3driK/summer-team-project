import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.css'
import EventList from './pages/Events/EventList';
import useAxios from './hooks/useAxios';
import { BrowserRouter, Route, Routes } from 'react-router';
import Root from './pages/Root';
import AddEvent from './pages/Events/AddEvent';

function App() {
  const [eventData, setEventData] = useState([]);

  const apiUrl = 'http://127.0.0.1:8000/api/events';
  console.log('Callling api', apiUrl);
  const {get, patch, remove} = useAxios();
  
  useEffect(() =>{
    const getData = async () => {
      const data = await get(apiUrl);
      if (data) {
        console.log(data);
        setEventData(data);
      }
    };
    getData();
  },[])


  const addEventHandler = (newEvent) =>{
    const updatedEmployee = [...eventData, {...newEvent} ];
    setEventData(updatedEmployee);
    console.log(updatedEmployee);
  }

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
          {/* <Route index element={<About />} /> */}
          <Route path="/events" 
               element = { <EventList 
                eventData={eventData} 
               setEventData = {setEventData} 
              //  onHandleEditFields = {handleEditFields} 
              //  onHandleDelete = {handleDelete}
                  />  }              
            />
          <Route path="/add" element={<AddEvent onAddEvent={addEventHandler} apiUrl={apiUrl}/> } />
        
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
