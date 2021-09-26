import React, { Component } from 'react'
import './defoult.css';
import photo from './image/photo.png'

export default class Acount extends Component {
    render() {
        return (
            <div className="account">
                <div className = "top">
                    <img src = {photo} alt = "photo" />
                    <p>Иван Иванович</p>
                    <span className = "chevron-down"><i class="bi bi-chevron-down"></i></span>
                </div>
            </div>
        )
    }
}
