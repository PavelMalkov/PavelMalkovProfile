import React, { Component } from 'react'
import './person.css'
import './defoult.css'
import photo from './image/photo.png'

export default class Person extends Component {
    render() {
        return (
            <div className = "substrate">
                <div className = "who-person">
                    <div className = "who">
                        <span className = "bg"> <img src = {photo} /></span>
                        <span className= "icon"><i class="bi bi-pen"></i> </span>
                        <h1>Иван Иванов</h1>
                        <p>Директор</p>
                    </div>                    
                </div>
                <div className = "endline"></div>
                <div className = "info">
                    <h1>Основная иформация</h1>
                    
                    <div className = "blok">
                        <p>Статус</p>
                        <p><input className = "input" type="text" size="40" placeholder = "Директор" /></p>

                        <p>Компания</p>
                        <p><input className = "input" type="text" size="40" placeholder = "Открытая дверь" /></p>

                        <p>Локация</p>
                        <p><input className = "input" type="text" size="40" placeholder = "Обнинск, ул. Красных" /></p>

                        <p>Дата рождения</p>
                        <p><input className = "input" type="text" size="40" placeholder = "Май 19, 1996" /></p>
                    </div>

                    <h1>Контакты</h1>
                    <div className = "blok">
                        <p>Email</p>
                        <p><input className = "input" type="text" size="40" placeholder = "evanyates@gmail.com" /></p>

                        <p>Мобильный телефон</p>
                        <p><input className = "input" type="text" size="40" placeholder = "+7 999 999 99-99" /></p>
                    </div>
                </div>

            </div>
        )
    }
}
