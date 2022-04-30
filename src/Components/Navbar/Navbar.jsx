import { useState } from "react";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import './Navbar.scss'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                
                <h1>WatchMe</h1>
                <span>Home</span>
                <span>Series</span>
                <span>Movies</span>
                <span>New and Popular</span>
                <span>My List</span>
            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <img src="https://images.pexels.com/photos/11642199/pexels-photo-11642199.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="" 
                />
                <div className="profile">
                 <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar