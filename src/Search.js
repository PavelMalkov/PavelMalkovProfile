import React, { Component } from 'react'
import "./search.css"
export default class search extends Component {
    render() {
        return (
            <div className="find">
                <div className="content">
                    <i class="bi bi-search"></i>
                    <input className = "input" type="text" size="40" placeholder = "Поиск" />
                </div>
            </div>
        )
    }
}
