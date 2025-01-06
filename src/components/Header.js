
import {useState} from "react";

const Title = () => {
       
  
    return (
 
      <a href="/">
          
         
          <img 
        className='logo'
        alt="logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSimKS0-E61jy_dctanYVq2rzxMV35RExo-Aw&s"
      />
  
      </a>
  
  
    
    );
  }
  
  
  
  const Header =()=>{


    const [title, settitle]= useState("Foode Villa");


     
    return(
           
      <div className="header"> 
        <Title />
        
        <h1> {title}</h1>
        <button onClick={()=>{
           if(title=="Food Villa"){
          settitle("Food Ordering Website")
        }else{
          settitle("Food Villa");
        }
        }
 
        }> Change Title</button>

        <div className="nav-items">
          <ul>
            <ul>Home</ul>
            <ul>About</ul>
            <ul>Contact</ul>
            <ul>Cart</ul>
          </ul>
        </div>
      </div>
       
    )
  }

  
 export default Header;