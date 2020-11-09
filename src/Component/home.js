import React, { createContext, Component } from 'react';
import banner2 from '../assets/banner2.jpg';
import './home.css';
import Convention from './conventionhall_Deatils';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom'; import { Redirect } from 'react-router';
import Vendors, { Vendor } from './Vendor';
import { UserProvider } from '../Context/vendorcontext';
export const GlobalContext = createContext();

var array = [];
var data = [
    {
        id: 1,
        img: require("../assets/sarji.jpg"),
        name: 'Sarji convention Hall',
        address: 'Near Jnnce College',
        size: "1000-1500",
        state: 'karnataka',
        city: 'Shimoga',
        description: "Sarji Convention Hall is the most ideal place to make your dreams come true and cherish your wonderful moments. Sarji Convention Hall is one of the premier New Marriage hall in Shimoga wedding venues in the city. while also being a fantastic facility for hosting a family gathering, engagement, reception, school or college fests, exhibitions, religious ceremonies, baby showers, company luncheons, and conference. Hall with an air-conditioned reception hall that can occupy 1000 people."
    },
    {
        id: 2,
        img: require("../assets/dwaraka.jpg"),
        name: 'Dwaraka',
        address: 'Sagara Road',
        size: "700-1300",
        state: 'karnataka',
        city: 'Shimoga'
    }, {
        id: 3,
        img: require("../assets/veerashaiva.jpg"),
        name: 'Veerashaiva Kalyana Mantapa',
        address: 'Near B.H.Road',
        size: "500-700",
        state: 'karnataka',
        city: 'Shimoga'
    }, {
        id: 4,
        img: require("../assets/krishna.jpg"),
        name: 'Krishnappa kalyana mantapa',
        address: 'BTM Layout',
        size: "1000-1500",
        state: 'karnataka',
        city: 'Banglore'
    },
    {
        id: 5,
        img: require("../assets/kali.jpg"),
        name: 'kali mantapa',
        address: 'JP Nagara',
        size: "1000-1500",
        state: 'karnataka',
        city: 'Banglore'
    },
    {
        id: 6,
        img: require("../assets/shekar.jpg"),
        name: 'Shekar convention Hall',
        address: 'Padarayana Pura',
        size: "1000-1500",
        state: 'karnataka',
        city: 'Banglore'
    },
    {
        id: 7,
        img: require("../assets/mangalya.jpg"),
        name: 'Manganlya Mantapa',
        address: 'B.H.Road',
        size: "1000-1500",
        state: 'karnataka',
        city: 'Shimoga'
    },
    {
        id: 8,
        img: require("../assets/shankar.jpg"),
        name: 'Shankar Hall',
        address: 'Electronic City',
        size: "1000-1500",
        state: 'karnataka',
        city: 'Banglore'
    },
];

var data1 = [{
    id: 8,
    img: require("../assets/shankar.jpg"),
    name: 'Shankar Hall',
    address: 'Electronic City',
    size: "1000-1500",
    state: 'karnataka',
    city: 'Banglore'
},];
var vendorList = [{
    id: 1,
    img: require("../assets/Vendors/Phtography.jpg"),
    name: 'Photography',
},
{
    id: 2,
    img: require("../assets/Vendors/Mehndi.jpg"),
    name: 'Mehndi',
}, {
    id: 3,
    img: require("../assets/Vendors/Catering.jpg"),
    name: 'Catering',
}, {
    id: 4,
    img: require("../assets/Vendors/Decorator.jpg"),
    name: 'Decorators',
}, {
    id: 5,
    img: require("../assets/Vendors/Lighting.jpg"),
    name: 'Lightings',
}, {
    id: 6,
    img: require("../assets/Vendors/Archestra.jpg"),
    name: 'Archestra',
},]

var singledata = [];
var vendors = "/vendor/" + localStorage.getItem('vendor');
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            location: 'Shimoga',
            data: data = [
                {
                    id: 1,
                    img: require("../assets/sarji.jpg"),
                    name: 'Sarji convention Hall',
                    address: 'Near Jnnce College',
                    size: "1000-1500",
                    state: 'karnataka',
                    city: 'Shimoga',
                    description: "Sarji Convention Hall is the most ideal place to make your dreams come true and cherish your wonderful moments. Sarji Convention Hall is one of the premier New Marriage hall in Shimoga wedding venues in the city. while also being a fantastic facility for hosting a family gathering, engagement, reception, school or college fests, exhibitions, religious ceremonies, baby showers, company luncheons, and conference. Hall with an air-conditioned reception hall that can occupy 1000 people."

                },
                {
                    id: 2,
                    img: require("../assets/dwaraka.jpg"),
                    name: 'Dwaraka',
                    address: 'Sagara Road',
                    size: "700-1300",
                    state: 'karnataka',
                    city: 'Shimoga'
                }, {
                    id: 3,
                    img: require("../assets/veerashaiva.jpg"),
                    name: 'Veerashaiva Kalyana Mantapa',
                    address: 'Near B.H.Road',
                    size: "500-700",
                    state: 'karnataka',
                    city: 'Shimoga'
                }, {
                    id: 4,
                    img: require("../assets/krishna.jpg"),
                    name: 'Krishnappa kalyana mantapa',
                    address: 'BTM Layout',
                    size: "1000-1500",
                    state: 'karnataka',
                    city: 'Banglore'
                },
                {
                    id: 5,
                    img: require("../assets/kali.jpg"),
                    name: 'kali mantapa',
                    address: 'JP Nagara',
                    size: "1000-1500",
                    state: 'karnataka',
                    city: 'Banglore'
                },
                {
                    id: 6,
                    img: require("../assets/shekar.jpg"),
                    name: 'Shekar convention Hall',
                    address: 'Padarayana Pura',
                    size: "1000-1500",
                    state: 'karnataka',
                    city: 'Banglore'
                },
                {
                    id: 7,
                    img: require("../assets/mangalya.jpg"),
                    name: 'Manganlya Mantapa',
                    address: 'B.H.Road',
                    size: "1000-1500",
                    state: 'karnataka',
                    city: 'Shimoga'
                },
                {
                    id: 8,
                    img: require("../assets/shankar.jpg"),
                    name: 'Shankar Hall',
                    address: 'Electronic City',
                    size: "1000-1500",
                    state: 'karnataka',
                    city: 'Banglore'
                },
            ],
            redirect: false
        }
        // this.readData = this.readData.bind(this);
    }
    handlelocationchange = (event) => {
        this.setState({
            location: event.target.value,
            data: ''
        }, () => {
            localStorage.setItem('location', this.state.location)
        })

    }
    readData = (value) => {
        console.log(value)
        var singledata = data.find((values) => {
            console.log(value)
            return value === values.name;
        });
        this.setState({
            data: singledata,
            redirect: true
        }, () => {
            console.log(this.state.data);
            //  return (
            //      <div>{this.state.data}
            //      </div>
            //  )
        })
        array.push(singledata);
        console.log(array);
        // console.log(singledata);
        // var singledata = data.find((values)=>{
        //     // console.log(value)
        //     return "Sarji convention Hall" === values.name;
        // });
        // this.props.router.push({
        //     pathname:'/contact',
        //     state :{
        //         id:7,
        //     }
        // })
    }
    componentDidMount() {
        var message = this.props.location.state
    }
    componentDidUpdate() {
        console.log('update');
        console.log(array);
    }
    vendorshow(name) {
        console.log(name);
        this.vendorName = name;
        localStorage.setItem("vendor", this.vendorName)
    }
    render() {
        var datas = `${this.state.name}`;

        console.log(vendors);
        // if (this.state.redirect) {
        //     return <Redirect push to="/contact" />;
        //   }
        return (
            // this.state.data.length > 1 ?
            <div className="container-fluid">
                <div className="row">
                    <div>{this.state.data.name}</div>
                    <div className="banner col-md-10 offset-md-1">
                        <div className="form-group col-md-4 offset-md-4 selectcity">
                            <select className="form-control" value={localStorage.getItem('location')} onChange={this.handlelocationchange} >
                                <option value="Shimoga">Shimoga</option>
                                <option value="Banglore">Banglore</option>
                            </select>
                        </div>
                    </div>
                </div>
                {/* <GlobalContext.Provider value="data">
                <vendorshow></vendorshow>
                </GlobalContext.Provider>  */}
                <article className="vendorname">Vendors List</article>
                <div class="row">
                    {
                        vendorList.map(vendor =>
                            (
                                <div className="col-md-4">
                                    <Link to={"/vendor"}               >
                                        <div className="card vendorcard" onClick={() => this.vendorshow(vendor.name)}>
                                            <div className="card-body">
                                                <div style={{ backgroundImage: `url(${vendor.img})` }} className="vendorimage">
                                                    <h4 className="vendorname1">{vendor.name}</h4>
                                                </div>
                                                {/* <img src={vendor.img} className ="vendorimage"/> */}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        )
                    }

                </div>
                <article className="vendorname">Convention Halls</article>
                <div className="row">
                    {
                        data.filter(name => {
                            return name.city == localStorage.getItem('location')
                        })
                            .map(convention => (
                                <div className="col-md-3" key={convention.id}>
                                    <div className="card cardstyle">
                                        <div className="card-body" key={convention.id}>
                                            <a href="" target="_blank"><img src={convention.img} alt="WedddingBanner" className="conventionimage" /></a>
                                            <h4 className="card-title" >{convention.name}</h4>
                                            <p className="card-text">{convention.address}</p>
                                            <p className="card-text">{convention.size}</p>
                                            <p className="card-text">{convention.city}</p>
                                            <p className="card-text">{convention.state}</p>

                                            <Link
                                                to={{
                                                    pathname: "/conventiondetails",
                                                    data: array // your data array of objects
                                                }}
                                            ><a className="btn btn-primary" onClick={() => this.readData(convention.name)}>Read More...
</a> </Link>
                                            {/* <span onClick={() => this.readData(convention.name)}><Link to ={{pathname:'/contact',state:{data2:{this.state.data}}}}>vcx</Link></span> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
            // <div><About fun={array} /></div>
        )

    }
}

export default Home; 