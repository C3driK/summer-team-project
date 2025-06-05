
import { useState } from "react";
import { useNavigate } from 'react-router';
import styles from './EventList.module.css';
import EventCard from "../../components/EventCatd";

const EventList = ({eventData, onHandleEditFields,onHandleDelete}) =>{
    const [searchValue, setSearchValue] = useState('');
    // const [filter, setFilter] = useState('all');
    // const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // const handleSeeMore =(id) =>{
    //     console.log("See more button was clicked",id);
    //     navigate(`/employeedetail/${id}`);
    // }

    // const handleEdit = (id) =>{
    //     console.log("Edit button was clicked",id);
    //     navigate(`/editemployee/${id}`);
    // }


    // const handleSearch =(event) =>{
    //     setSearchValue(event.target.value);

    // }

    const simulateLoading = (callback) =>{
        setTimeout(callback, 2000);
    };

    // const filteredEmployee = employeeData.filter(employee =>{
    //     const searchByText = searchValue.toLowerCase();
    //     const searchById = searchValue;
    
    //     const search = 
    //         employee.name.toLowerCase().includes(searchById) ||
    //         employee.title.toLowerCase().includes(searchByText) || 
    //         employee.department.toLowerCase().includes(searchByText) || 
    //         employee.id.includes(searchById) 

    //     const filtered = filter === 'all' ||  employee.title === filter;

    //     return (search && filtered);
    // });
    
    return(
        <>
        <h1>Event Details</h1>
        
        {/* <div className={styles.searchAndFilter}>

            <div className={styles.search}>
             <label htmlFor='search' >Search</label>
                <input type='text' id='search' name='search' value={searchValue} onChange = {handleSearch} placeholder="Search by Name, Id, Title, Dept" className={styles.searchInput} />
            </div>

            <div className={styles.filter}>
                <label htmlFor='filter-user'>Filter by Title</label>
                <select value={filter} onChange={(e) =>setFilter(e.target.value)}>
                <option value = 'all'>All</option> */}

                {/* This displyas duplicate title */}
                {/* {employeeData.map(employee =>(
                    <option key={employee.id} value={employee.title}>{employee.title}</option>
                ))} */}

                {/* It removes the duplicate title */}
                {/* {[...new Set(employeeData.map(emp => emp.title))].map(title => (
                    <option key={title} value={title}>{title}</option>
                ))} */}
              

                {/* </select>
            </div>
        </div> */}

       <div className={styles.employeeList}>
       {eventData.length > 0 ? (

        eventData.map(event => (
        <EventCard key={event.id} {...event} 
            // handleEdit = {(id,editFields) => onHandleEditFields(id, editFields)}
            handleDelete = {(id) => onHandleDelete(id)}
            OnHandleSeeMore = {()=> handleSeeMore(employee.id)}
            OnHandleEdit = {() => handleEdit(employee.id)}
            
        />

        ))
       ) : (

        <p>No matching found. Try another search.</p>

       )}
        
        
       </div>
       </>
    )
}

export default EventList;