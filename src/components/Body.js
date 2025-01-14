
import { restaurantList } from "../constants";
import RestaurantCard  from "./RestaurantCard";
 
import {useState, useEffect} from 'react';


function filterData(searchText, restaurants  ){
  const filterData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
  

  return filterData;   
}



const Body=()=>{
 
  const[restaurants, setRestaurants]= useState(restaurantList);

   const [searchText, setSearchText]=useState();



    // useEffect(()=>{
    //   const filteredData = filterData(searchText, restaurants);
    // },[])
  
    

    return (
        
      <>
      <div className="search-conatiner">
        <input type="text"
        className="search-input"
        placeholder="Search"
        value={searchText}
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        />

        <button className="search-btn"
        onClick={()=>{ 
        
        // need to filter the data

        const data=   filterData(searchText, restaurants);

        // updatae the state -- restaurants

          setRestaurants(data);
        }}
        >
          Search    
              </button>
      </div>

    


<div className="RestaurantCard">
      {
        restaurants.map(restaurant=>{
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id}  />
  
        })
      }
        
      </div>
      </>
    
    )
   } 
 
   export default Body;
  