 import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/AddVendor';
import './cssfiles/Vendor.css';
import Sidebar from './sidebar';
import Search from './Search';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import { Component } from 'react';

var getId = [];
var vendor = localStorage.getItem('vendor')
var location = localStorage.getItem('location');
var vendorshow = (id) => {
    console.log(id);
    getId.push(id);
    console.log(localStorage.setItem('data',id));
}
var indexOfLastPost;
var indexOfFirstPost;
var currentPosts;
export class NamesContainer extends Component{
    // console.log(props);
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         posts : props,
    //         loading:false,
    //         currentpage : 1,
    //         itemsperpage :10
    //     }
    // }
//     const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // componentDidMount(){
    //     console.log('Hi');
    //     this.setState({
    //         posts : this.state.posts,
    //         loading:true,
    //         currentpage : 1,
    //         itemsperpage :2
    //     },() =>{
    //         console.log(indexOfLastPost =this.state.currentpage * this.state.itemsperpage)
    //         console.log(indexOfFirstPost = indexOfLastPost * this.state.itemsperpage)
    //         console.log(currentPosts = this.state.posts.names.slice(indexOfLastPost,indexOfFirstPost))
    //     })
    // }
    render() {
        return (
  
                <div className="row">
                <div className="col-md-8">
                    <div className="row">
                        {
                           this.props.names.filter(trans => {
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
            </div>

        )
    }
}

export default NamesContainer
