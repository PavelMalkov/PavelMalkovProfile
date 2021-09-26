import React, { Component } from 'react'
import "./aboutperson.css"
import List from "./react-component/Navbuttons.js";
/*import Navbuttons from "./react-component/Navbuttons";*/

export default class AboutPerson extends Component {
    render() {
        return (
            <div className="nav-about-person">
                <List users = {users}/>
            </div> 
        )
    }
}

const users = [{
    id: 1,
    icon:"bi bi-person", 
    href: "/Profile",
    string: "Профиль"
},
{ 
    id: 2,
    icon:"bi bi-bell", 
    href: "/Notifications",
    string: "Уведомления"
},
{
    id: 3,
    icon:"bi bi-building", 
    href: "/Company",
    string: "Компания"
},
{ 
    id: 4,
    icon:"bi bi-credit-card", 
    href: "/Payments",
    string: "Платежи"
},
{ 
    id: 5,
    icon:"bi bi-lock", 
    href: "/Confidentiality",
    string: "Конфидециальность"
},
{ 
    id: 6,
    icon:"bi bi-shield-check", 
    href: "/Security",
    string: "Безопасность"
},];

/*
<ul>
    <li><i class="bi bi-person"/><a href = "/Profile">Профиль <img src = {active} alt ="!"/></a></li>
    <li><i class="bi bi-bell"/><a href = "/Notifications">Уведомления <img src = {active} alt ="!"/></a></li>
    <li><i class="bi bi-building"/><a href = "/Company">Компания <img src = {active} alt ="!"/></a></li>
    <li><i class="bi bi-credit-card"/><a href = "/Payments">Платежи <img src = {active} alt ="!"/></a></li>
    <li><i class="bi bi-lock"/><a href = "/Confidentiality">Конфидециальность <img src = {active} alt ="!"/></a></li>
    <li><i class="bi bi-shield-check"/><a href = "/Security">Безопасность <img src = {active} alt ="!"/></a></li>
</ul> 
*/