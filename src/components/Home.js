import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ThreadsList from "./ThreadsList";
import ThreadDetail from "./ThreadDetail";




export default class Home extends Component {


    render() {
        return (
            /*
            The Home contains 3 components :
            1- Sidebare
            2- Threads List
            3- Thread Details
            */

            <div className='row'>

                {/*Start of side bar */}
                <div className="col-2 side-bar">
                    <Link to="/new-thread" >
                        <div className='btn compose-btn'>
                            <div >
                               <p>
                                   COMPOSE <i className="fas fa-pencil-alt"></i>
                               </p>
                           </div>
                        </div>
                    </Link>

                    <ul className="list-group p-4">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i className="fas fa-inbox"></i> Inbox
                            <span className="badge badge-primary badge-pill">14</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i className="fas fa-edit"></i> Draft
                            <span className="badge badge-primary badge-pill">2</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i className="fas fa-paper-plane"></i> Sent
                            <span className="badge badge-primary badge-pill">1</span>
                        </li>

                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <i className="fas fa-trash"></i> Trash
                            <span className="badge badge-primary badge-pill">0</span>
                        </li>
                    </ul>

                </div>

                {/*End of sidebar */}

                {/*Start of Threads List */}
                <div className="col-4 thread-bar ">
                    <ThreadsList/>
                </div>

                {/*End of Threads List */}


                {/*Start of Thread Detail Section */}
                <div className="col-6 thread-details">
                    <ThreadDetail/>
                </div>

                {/*End of Thread Detail Section*/}


            </div>
        );
    }
}
