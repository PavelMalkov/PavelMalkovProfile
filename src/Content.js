import React, { Component } from 'react'
import './content.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Company from "./component/Company"
import Confidentiality from "./component/Confidentiality"
import Notifications from "./component/Notifications"
import Payments from "./component/Payments"
import Profile from "./component/Profile"
import Security from "./component/Security"

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <Router>
                    <Switch>
                        <Route exact path="/Profile" component = {Profile} />
                        <Route exact path="/Notifications" component = {Notifications} />
                        <Route exact path="/Company" component = {Company} />
                        <Route exact path="/Payments" component = {Payments} />
                        <Route exact path="/Confidentiality" component = {Confidentiality} />
                        <Route exact path="/Security" component = {Security} />
                    </Switch>
                </Router>
            </div>
        )
    }
}
