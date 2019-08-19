import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Avatar from 'react-avatar';
import ReactPlaceholder from 'react-placeholder';
import {TextRow,RoundShape} from "react-placeholder/lib/placeholders";



import * as ThreadActions from "../actions";



class ThreadsList extends Component {


    componentWillMount() {

        this.props.actions.fetchThreads();
    }

    showThreadDetails(uuid){
        this.props.actions.fetchThread(uuid);

    }

    /**
     * This function to render the list of threads using .map React Function
     **/
    renderThreads (){

        return this.props.threads.map((thread,index)=>{
            return(
                <div key={index} className="">

                    <div className=" px-3 list-group-item-wrapper " onClick={this.showThreadDetails.bind(this,thread.id)}>
                            <li className='list-group-item'>


                                {/*Each thread Item contains :*/}
                                    {/*1-Avatar*/}
                                    {/*2- Subject*/}
                                    {/*3- Date*/}
                                    {/*4- Username*/}


                                <div className="row">

                                    {/*Avatar */}

                                    <div className="col-2">
                                        <Avatar className="ml-2 avatar"
                                                style={{fontFamily:"Google Sans"}}
                                                round="50%" name={thread.subject} size="30" textSizeRatio={1.75} />
                                    </div>

                                    {/*Details*/}

                                    <div className="col-10 text-right  ">
                                        <div className='row'>

                                            {/*Subject*/}

                                            <div className="col-6  px-0 text-left ">
                                                <p className=" ">{thread.subject}
                                                </p>
                                            </div>

                                            {/*Date*/}

                                            <div className="col-6  px-0 text-right ">
                                                <p className="date text-muted">06-05-2019</p>
                                            </div>

                                            {/*Username*/}
                                            <div className="col-12  px-0 text-left ">
                                                <p className=" text-muted username">{thread.creator.username}</p>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                </div>

            )
        });
    }

    render() {

        // Add a customer placeholde

        const awesomePlaceholder = (
            <div className='my-awesome-placeholder'>

                <div className="row">
                    {/*Avatar Placeholder */}
                    <div className="col-2">
                        <RoundShape color='#CFD4DB' style={{height: 30, width:30}} />
                    </div>
                    {/*Details Placholder*/}
                    <div className="col-10 text-right  ">
                        <TextRow color='#CFD4DB' style={{height: 30, borderRadius:8}} />
                    </div>
                </div>



            </div>
        );
        return (

            <div className="">
                {/*Search bar section */}
                <div className="search-control ">
                    <input className="form-control search-thread mx-auto w-75" type="text" placeholder="Search ..." aria-label="Search"/>
                </div>
                {/*End of search bar section */}

                {/*List of threads section */}

                <div  className="">

                     {/*Add three placholders itmes for the waiting then show the list after loading it*/}
                    

                    {/*First placeholder*/}
                    <ReactPlaceholder
                        customPlaceholder={awesomePlaceholder}
                        className="mb-1"
                        type='text'
                        showLoadingAnimation={true}
                        ready={this.props.ready}
                        color='#E0E0E0'>


                        {/*Here after get list of threads is ready, show it */}

                            <ul className="list-group">
                                {this.renderThreads()}
                            </ul>

                    </ReactPlaceholder>

                    {/*Second Placholder */}
                    <ReactPlaceholder
                        customPlaceholder={awesomePlaceholder}
                        className="mb-1"
                        type='text'
                        rows={5}
                        showLoadingAnimation={true}
                        ready={this.props.ready}
                        color='#E0E0E0'>

                        <div></div>

                    </ReactPlaceholder>

                    {/*Third placeholder */}
                    <ReactPlaceholder
                        customPlaceholder={awesomePlaceholder}
                        className="mb-1"
                        type='text'
                        rows={5}
                        showLoadingAnimation={true}
                        ready={this.props.ready}
                        color='#E0E0E0'>
                        <div></div>
                    </ReactPlaceholder>
                </div>



                {/*End of list of threads section */}
            </div>
        );
    }
}



const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ThreadActions, dispatch),
})


function mapStateToProps(state) {

    return {
        ready:state.threads.ready,
        threads:state.threads.all,

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadsList)

