import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

var vendorList = ["Photography", "Mehndi", "Lightings", "Decorators", "Catering"];
var newArray = [];
// var vendoeList = [{
//     fontawesome : "fa fa-camera",
//     vendorlist : "PhotoGrapher"
// },
// {
//     fontawesome : "fa fa-camera",
//     vendorlist : "Mehndi"
// },
// {
//     fontawesome : "fa fa-camera",
//     vendorlist : "Lightings"
// },
// {
//     fontawesome : "fa fa-camera",
//     vendorlist : "PhotoGrapher"
// },
// ]
function Sidebar() {
    var index = vendorList.indexOf(localStorage.getItem('vendor'));
    console.log(index);
    if (index > -1) {
        var vendorsplice = vendorList.splice(index, 1);
        newArray.push(vendorsplice);
        console.log(newArray);
    }
    if (localStorage.getItem('vendor') !== newArray[0][0] && index > -1) {
        vendorList = vendorList.concat(newArray[0][0])
        console.log(vendorList);
        newArray.splice(0, 1);
    }
    useEffect(() => {
        console.log('hi');
        const data = vendorList.map(vendor => {
            console.log(vendor)
        })
        console.log(data);
    });
    var getvendorname = (vendor) => {
        console.log(vendor);
        localStorage.setItem('vendor', vendor);

    }
    return (
        <div>
            <div class="card">
                <h5 className="vendorlist">All Vendors List</h5>
                <Link to={'/vendor'}>
                    {vendorList.map(vendor => (
                        <div className="sidebarvendors" onClick={() => getvendorname(vendor)}>{vendor} <i class='fas fa-angle-right'></i></div>
                    ))}</Link>
                <hr />
                <div className="allvendor">All Vendor List <i class='fas fa-angle-right'></i></div>
            </div>
        </div>
    )
}

export default Sidebar
