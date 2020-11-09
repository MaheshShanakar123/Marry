import React from 'react';
import { useForm } from 'react-hook-form';
import Calendar from 'react-calendar';

var mystyle = {
    height: "200px"
}
function ConventionDetails(props) {
    var { register, handleSubmit, errors } = useForm();
    const { data } = props.location;
    console.log(data);
    var mystyle = {
        height: " 474px",
        marginTop: "88px"
    }
    var datastyle = {
        marginTop: "88px"
    }
    var description = {
        marginTop: "30px",
        fontSize: "15px",
        lineHeight: "1.6"
    }
    var heading = {
        fontSize: "20px",
        lineHeight: "1.6",
        fontWeight: "bold",
        textAlign: "left",
    }
    const left = {
        textAlign: "left",
    }
    const booking = {
        fontSize: "20px",
        borderRadius: "10px",
        padding: "7px"
    }
    var cardStyle = {
        marginTop: "65px",
        marginLeft: "20px",
        marginRight: "20px",
        marginBottom: "40px",
        borderRadius: "20px",
        paddingBottom: "70px",
        boxShadow: "0px 0px 5px 0px"
    }
    var selectedDate = new Date;
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
    return (
        <div>
            <div className="container-fluid">
                <div className="card text-dark" style={cardStyle}>
                    <div className="row">
                        <div className="col-md-5 offset-md-1">
                            <img src={data[0].img} alt="WedddingBanner" className="conventionimage" data-toggle="tooltip" data-placement="bottom" title={data[0].name} style={mystyle} />
                        </div>
                        <div className="col-md-4 offset-md-1" style={datastyle}>
                            <h1>{data[0].name}</h1>
                            <p style={description}>{data[0].description}</p>
                            <p style={left}>
                                <span style={heading}>Total No of Seats :</span>
                                <span>{data[0].size}</span> </p>
                            <p style={left}>
                                <span style={heading}>Location :</span>
                                <span>{data[0].city}</span> </p>
                            <p style={left}>
                                <span style={heading}>State :</span>
                                <span>{data[0].state}</span> </p>
                            <div>
                                <button className="btn btn-primary" style={booking} data-toggle="modal" data-target="#myModal">Book Now</button>
                            </div>

                            <div className="modal" id="myModal">
                                <div className="modal-dialog modal-lg">
                                    <div className="modal-content">


                                        <div className="modal-header">
                                            <h4 className="modal-title">{data[0].name}</h4>
                                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        </div>

                                        <div className="modal-body">

                                            <form onSubmit={handleSubmit(onSubmit)}>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Name:</label>
                                                            <input type="text" className="form-control" id="name" placeholder="Enter Your Name" name="name" ref={register({ required: "Name is required" })} />
                                                            {errors.name && <p>{errors.name.message}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Convention Hall Name:</label>
                                                            <input type="text" className="form-control" id="conventionname" value={data[0].name} name="conventionname" ref={register} disabled />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Email:</label>
                                                            <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" ref={register({ required: "Email is required" })} />
                                                            {errors.email && <p>{errors.email.message}</p>}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Password:</label>
                                                            <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={register({ required: "Password required", minLength: { value: 8, message: "Password should be greter than 8 characters" } })} />
                                                            {errors.pswd && <p>{errors.pswd.message}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Booking Date:</label>
                                                            <input type="date" className="form-control" id="date" name="date" onChange={datachange} ref={register({ required: "Booking Date is required" })} />
                                                            {errors.date && <p>{errors.date.message}</p>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary float-right " data-dismiss="modal">Submit</button>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConventionDetails; 