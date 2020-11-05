import React from 'react'
import "./Header1.css"
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import InfoIcon from '@material-ui/icons/Info';


const Header1 = () => {
    return (
             <div className="head">
            <div className="header1">
              <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSnSSrkfOQ6uvQNWmfL-1rcSrYFXXZeZusFIg&usqp=CAU" alt="facebook"/>
            </div>
            <div className="icon1">
                <HomeIcon/>
                <PermContactCalendarIcon />
                <InfoIcon />    
            </div>
            
    </div>
    )
}

export default Header1
