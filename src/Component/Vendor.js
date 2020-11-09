import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/AddVendor';
import './cssfiles/Vendor.css';
import Search from './Search';

export function Vendor(props) {
    var getId = [];
    const [id, setId] = useState(1);
    console.log(getId);
    var { transaction } = useContext(GlobalContext);
    var Vendordata = [];
    Vendordata.push(transaction);
    console.log(Vendordata);
    var vendor = localStorage.getItem('vendor')
    var location = localStorage.getItem('location');
    console.log(localStorage.getItem('vendor'));

    var vendorshow = (id) => {
        console.log(id);
        getId.push(id);
        console.log(localStorage.setItem('data', id));
        setId(id);
    }
    console.log(getId);
    return (
        <div class="container-fluid">
            <div className="wedding">Wedding {vendor} in {location}</div>
            <div>
                <Search names={Vendordata} className="wedding"></Search>
            </div>
            <hr />
            {/* <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                            Vendordata[0].filter(trans => {
                                console.log(trans);
                                return trans.vendor === localStorage.getItem('vendor') && trans.city === location;
                            }
                            ).map(data =>
                                (
                                    <div className="col-md-6" key={data.id}>
                                        <Link
                                            to={{
                                                pathname: "/vendordata",
                                                data: getId// your data array of objects
                                            }}
                                            target="_blank"
                                        >
                                            <div className="card" onClick={() => vendorshow(data.id)}>
                                                <div className="card-body">
                                                    <img src={data.img} alt={data.name} className="image" />
                                                    <div className="companyname">{data.companyName}</div>
                                                    <div className="packageprice">Package Price : {data.Package_Price}</div>
                                                    <div className="description">{data.description}</div>
                                                    <button className="btn btn-danger enquiry">Send Enquiry</button>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
                <div class="col-md-4">
                    <Sidebar></Sidebar>
                </div>
            </div> */}
        </div>
    )
}

export default Vendor
