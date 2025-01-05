
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
    return(
           
      <div className="header"> 
        <Title />
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