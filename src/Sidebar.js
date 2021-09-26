import React, { Component } from 'react'
import './sidebar.css';
import logo from './image/company\'s-logo.svg';
import help from './image/women.svg';
import "./aboutperson.css"
import List from "./react-component/Navbuttons.js";

export default class Sidebar extends Component {
    render() {
        return (
            <div className = "side-menu">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className = "list-content">
                    <div className="nav-about-person">
                        <List users = {title}/>
                    </div> 
                </div> 
                {/* <div className = "sidebar-list">
                    <ul>
                        <li> <i class="bi bi-grid-1x2-fill"></i> Устройства</li>
                        <li> <i class="bi bi-people-fill"></i> Люди</li>
                        <li> <i class="bi bi-calendar-event-fill"></i> События</li>
                    </ul>
                </div> */}
                <div className = "help">
                    <div className = "bg"></div>
                    <img src = {help} alt = "help"/>
                    <button> <i class="bi bi-chat-left-fill"></i> Помощь </button>
                </div>
                <div className = "nav-about-person">
                    <List users = {back}/>
                </div>                
            </div>
        )
    }
}

const back = [{
    id: 1,
    icon:"bi bi-door-closed-fill", 
    href: "/",
    string: "Выход"
}];

const title = [{
    id: 1,
    icon:"bi bi-person", 
    href: "/",
    string: "Устройства"
},
{ 
    id: 2,
    icon:"bi bi-bell", 
    href: "/",
    string: "Люди"
},
{
    id: 3,
    icon:"bi bi-building", 
    href: "/",
    string: "События"
}];