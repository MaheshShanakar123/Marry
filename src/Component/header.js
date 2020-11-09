import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Output from './Ouput';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Home from './home';
import About from './About';
import Contact from './Contact';
import Convention from './conventionhall_Deatils';
import Vendor from './Vendor';
import Vendordata from './Vendordata';
import logo from '../assets/logo.png';

class Header extends Component {
    render() {
        const mystyle = {
            color: "black",
            padding: "10px",
            fontFamily: "Arial",
            fontSize :"35px",
          };
          const mystyle1={
            color: "black",
            padding: "10px",
            fontFamily: "Arial",
            fontSize :"35px",
            paddingLeft:"912px",
          }
          var logo1 ={
              height: "48px",
          }
          var navstyle = {
          background: "white",
          boxShadow: "0px 0px 14px 0px",
          height: "116px"
          }
          var vendor = "/vendor/"+ localStorage.getItem('vendor');
        return (
            <div>
            <Router>
                <nav className="navbar navbar-expand-md navbar-dark " style={navstyle}>
                <img src={logo} alt="Logo" style = {logo1}/>;
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/"} style={mystyle1}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} style={mystyle}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/contact"} style={mystyle}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                            <Route exact path='/' component={Home}></Route>
                            <Route exact path='/Home' component={Home}></Route>
                            <Route exact path='/about' component={About}><About /></Route>
                            <Route exact path='/contact' component={Contact}></Route>
                            <Route exact path='/conventiondetails' component={Convention}></Route>
                            <Route exact path='/vendor'  component={Vendor}></Route>
                            <Route exact path='/vendordata'  component={Vendordata}></Route>
                        </Switch>
            </Router>
            </div>)
    }
}

export default Header
