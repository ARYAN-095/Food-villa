import {Link} from "react-router-dom";
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


    const [title, settitle]= useState("Food Villa");


     
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
          <Link to ="/">
          <ul>Home</ul>
          </Link>
            
            <Link to="/about">
             <ul>About</ul>
            </Link>
           
           <Link to="contact"> 
           <ul>Contact</ul>
           </Link>
            
            <ul>Cart</ul>
          </ul>
        </div>
      </div>
       
    )
  }

  
 export default Header;