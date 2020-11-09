import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../Context/AddVendor';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

function populardata(props) {
    console.log(props);
    // var { transaction } = useContext(GlobalContext);
    // console.log(transaction);
    // var vendorsingledata = transaction;
    var getId = [];
    var vendorshow = (id) => {
        console.log(id);
        getId.push(id);
        console.log(localStorage.setItem('data', id));
    }
    // var mostpopulardata = vendorsingledata.filter(vendor => {
    //     return vendor.vendor == localStorage.getItem('vendor') && Id != vendor.id && vendor.Package_Price < 100000;
    // })
    // console.log(mostpopulardata);
    return (
        <div className="container-fluid">
            <h2 className="mostpopular">Most Popular</h2>
            <Link
                to={{
                    pathname: "/vendor",
                    data: getId
                }}
            >
                <h2 className="seeall">See All </h2></Link>
            <div className="row">
                {
                    props.data.map(vendor => (
                        <div className="col-md-4">
                            <div className="card popularcard flex-row flex-wrap" onClick={() => vendorshow(vendor.id)}>
                                <div className="row">
                                    <Link
                                        to={{
                                            pathname: "/vendordata",
                                            data: getId
                                        }}
                                        target="_blank"
                                    >
                                        <div className="border-0 pull-left">
                                            <img src={vendor.img} className="popularimage" />
                                        </div>
                                    </Link>
                                    <span className="information">{vendor.companyName}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <hr></hr>
            <h2 className="mostpopular">Latest</h2>
            <Link
                to={{
                    pathname: "/vendor",
                    data: getId
                }}
            >
                <h2 className="seeall">See All </h2></Link>
            <div className="row">
                <div className="col-md-4">
                    {
                        props.latest.map(vendor => (
                            <div className="card popularcard flex-row flex-wrap" onClick={() => vendorshow(vendor.id)}>
                                <div className="row">
                                    <Link
                                        to={{
                                            pathname: "/vendordata",
                                            data: getId
                                        }}
                                        target="_blank"
                                    >
                                        <div className="border-0 pull-left">
                                            <img src={vendor.img} className="popularimage" />
                                        </div>
                                    </Link>
                                    <span className="information">{vendor.companyName}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default populardata
