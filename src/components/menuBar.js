import React from 'react';
import './menuBar.css'

class MeanuBar extends React.Component{

    render(){
        return(
         <div className = "appMenu">
            <div className="dropdown">
                <button className="dropbtn">Java</button>
                <div className="dropdown-content">
                    <a href="#">oops</a>
                    <a href="#">overloading 2</a>
                    <a href="#">overriding</a>
                </div>
           </div>
          &nbsp;&nbsp;
           <div className="dropdown">
                <button className="dropbtn">.Net</button>
                <div className="dropdown-content">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                </div>
           </div> 
           &nbsp;&nbsp;
           <div className="dropdown">
                <button className="dropbtn">NodeJs</button>
                <div className="dropdown-content">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                </div>
           </div> 
           &nbsp;&nbsp;
           <div className="dropdown">
                <button className="dropbtn">ReactJs</button>
                <div className="dropdown-content">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                </div>
           </div> 
           &nbsp;&nbsp;
           <div className="dropdown">
                <button className="dropbtn">Spring Boot</button>
                <div className="dropdown-content">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                </div>
           </div> 
            &nbsp;&nbsp;
           <div className="dropdown">
                <button className="dropbtn">Jenkins</button>
                <div className="dropdown-content">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                </div>
           </div> 
            &nbsp;&nbsp;
           <div className="dropdown">
                <button className="dropbtn">SQL Server</button>
                <div className="dropdown-content">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                </div>
           </div> 
            &nbsp;&nbsp;
           <div className="dropdown">
                <button className="dropbtn">My SQL</button>
                <div className="dropdown-content">
                    <a href="#"> 1</a>
                    <a href="#"> 2</a>
                    <a href="#"> 3</a>
                </div>
           </div> 
        </div>
        )
    }
}

export default MeanuBar;