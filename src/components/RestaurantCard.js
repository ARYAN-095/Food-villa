import { img_cdn_url } from '../constants';

const RestaurantCard =({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
   })=>{
      
    return (
      <div className='card'>
         <img src={img_cdn_url
          +  cloudinaryImageId  
         }
         />
        <h2>{ name}</h2>
        <h3>{ cuisines.join(", ")}</h3>
        <h4>{ lastMileTravelString} minutes</h4>
      </div>
    )
   }
  
   export default RestaurantCard;
    