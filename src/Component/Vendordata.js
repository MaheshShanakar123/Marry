import React, { useContext, useState, useEffect } from 'react'
import { GlobalContext } from '../Context/AddVendor';
import './cssfiles/vendordata.css';
import { useForm } from 'react-hook-form';
import Populardata from './populardata';

function Vendordata(props) {
    var { register, handleSubmit, errors } = useForm();
    console.log(props);
    useEffect(() => {
        document.title = ` ${parsedata.companyName} `
    }, [])
    var vendorarray = [];
    const Id = localStorage.getItem('data');
    console.log(Id);
    var { transaction } = useContext(GlobalContext);
    console.log(transaction);
    var vendorsingledata = transaction;
    var vendorsdata = vendorsingledata.filter(vendor => {
        console.log(Id)
        console.log(Id == vendor.id);
        console.log(vendor.id)
        return Id == vendor.id;
    })
    localStorage.setItem('vendorsdata', JSON.stringify(vendorsdata[0]));
    var getlocaldata = localStorage.getItem('vendorsdata');
    var parsedata = JSON.parse(getlocaldata);
    console.log(parsedata);
    console.log(getlocaldata);

    var onSubmit = (data) => {
        console.log(data);
    }
    var datachange = (date, event) => {
        console.log(date);

        var selecteddate = document.getElementById("date").value;
        console.log(selecteddate);
        var selectedDate = new Date(selecteddate);
        console.log(selectedDate);
        var todaysDate = new Date();
        console.log(todaysDate);
        console.log(selectedDate.getDay());
        if (selectedDate <= todaysDate) {
            alert('Please select greater than todays date');
            document.getElementById("date").value = "";
        } else if (selectedDate.getDay() == 2) {
            alert('Do not select Tuesday and Saturdays');
            document.getElementById("date").value = "";
        }
    }

    var mostpopulardata = vendorsingledata.filter(vendor => {
        return vendor.vendor == localStorage.getItem('vendor') && Id != vendor.id && vendor.Package_Price < 100000;
    })
    console.log(mostpopulardata);

    var latestdata = vendorsingledata.filter(vendor => {
        return vendor.vendor == localStorage.getItem('vendor') && Id != vendor.id && vendor.Package_Price >= 100000;
    })
    console.log(mostpopulardata);
    var vendorshow = (id) => {
        console.log('hgjh')
        console.log(id);
    }
    return (
        <div>
            <h1 className="wedding">{parsedata.companyName}, {parsedata.city}</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="information">About {parsedata.companyName}</div>
                            <hr></hr>
                            <div className="description">{parsedata.description}</div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Name:</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name" ref={register({ required: "Name is required" })} />
                                            {errors.name && <p>{errors.name.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Mobile Number:</label>
                                            <input type="text" className="form-control" id="name" placeholder="Enter Your Phone Number" name="phone" ref={register({ required: "Phone Number is required" })} />
                                            {errors.phone && <p>{errors.phone.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Email:</label>
                                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" ref={register({ required: "Email is required" })} />
                                            {errors.email && <p>{errors.email.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <label>Booking Date:</label>
                                            <input type="date" className="form-control" id="date" name="date" onChange={datachange} ref={register({ required: "Booking Date is required" })} />
                                            {errors.date && <p>{errors.date.message}</p>}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary col-md-4" data-dismiss="modal">Send Enquiry</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <img src={parsedata.img} className="image" />
                    </div>
                    <div className="col-md-3">
                        <div className="card pricecard justify-content-center align-items-center">
                            <div className="information">Price</div>
                            <hr></hr>
                            <div className="price">{parsedata.Package_Price}</div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid navdata">
                    <div className="row">
                        <div className="col-md-9 offset-md-3">
                            <nav>
                                <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Overview</a>
                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">About</a>
                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Photos</a>
                                    <a className="nav-item nav-link" id="nav-about-tab" data-toggle="tab" href="#nav-about" role="tab" aria-controls="nav-about" aria-selected="false">Contact</a>
                                </div>
                            </nav>
                            <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <div className="row">
                                        <div className="col-md-4 header">Package Price</div>
                                        <div className="col-md-4 header">Whatsapp No</div>
                                        <div className="col-md-4 header">Address</div>
                                        <div className="col-md-4 headerdata">{parsedata.Package_Price}</div>
                                        <div className="col-md-4 headerdata"><i class="fa fa-whatsapp"></i>{parsedata.watsapp}</div>
                                        <div className="col-md-4 address"></div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    {parsedata.description}
                                </div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                                <div className="tab-pane fade" id="nav-about" role="tabpanel" aria-labelledby="nav-about-tab">
                                    Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.
                    </div>
                            </div>

                        </div>
                    </div>
                </div>
                <Populardata data={mostpopulardata} latest={latestdata}></Populardata>
            </div>
        </div>
    )
}

export default Vendordata
