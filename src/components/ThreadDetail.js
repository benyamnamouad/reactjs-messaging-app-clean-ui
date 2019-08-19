import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';
import Avatar from 'react-avatar';

import * as ThreadActions from "../actions";
import NewMessage from "./NewMessage";



class ThreadDetail extends Component {

    constructor(props){
        super(props);
        this.state={
            messageHidden:true,
        }
    }

    componentWillMount() {
        // User this state to show and add the section of creating a new message
        this.setState({
            messageHidden:true,
        });
    }

    /**
     * Function used to show the creating new message form when clicking the btn new message
     */
    newMessage(){

        this.setState({
            messageHidden:false,
        });

    }

    /**
     * Submit the values of the new message
     * @param uuid
     * @param values
     */

    submitMessage(uuid,values){
        // value of creator should be added here

        values.creator = "admin@dzconseil.com";
        this.props.actions.createMessage(uuid,values);
        this.setState({
            messageHidden:true,
        });


    }

    /**
     * Render the list of messages of each thread
     * @param thread
     * @returns {any[]}
     */

    renderMessages(thread){
        return thread.messages.map((message,index)=>{
            return(
                <div key={index} className="">

                    <li className="list-group-item" >

                        <div className="message-wrapper">
                            <div className="row">
                                <div className="col-1 pl-0">
                                    <Avatar className=""

                                            style={{fontFamily:"Google Sans, cocon-next-arabic"}}
                                            round="50%" name={message.creator.username} size="30" textSizeRatio={1.75} />


                                </div>
                                <div className="col-7 text-left px-0 username">
                                    {message.creator.username}
                                </div>


                            </div>

                            <div className="message-body mt-3">
                                {message.body}

                            </div>
                        </div>


                        </li>

                </div>

            )
        });
    }

    render() {

        return (

            <div>


                { this.props.thread ? ( <div className="">


                    {/*Header section of thread */}

                    <div className="thread-detail-header">
                        <div className="row">


                                    <div className="col-6  px-0 text-left ">
                                        <p className=" ">{this.props.thread.subject}
                                        </p>
                                    </div>

                                    <div className="col-6  px-0 text-right ">
                                        <p className=" text-muted"><i className="fas fa-trash trash-btn"></i></p>
                                    </div>

                                    <div className="col-6 mt-2 px-0 text-left ">
                                        <p className=" text-muted username">{this.props.thread.creator.username}</p>
                                    </div>
                                    <div className="col-6 mt-2  px-0 text-right ">
                                        <p className="date text-muted">06-05-2019</p>
                                    </div>



                        </div>

                    </div>

                    {/*End of header section */}


                <div className="thread-messages-area">
                    {this.renderMessages(this.props.thread)}
                </div>


            </div> ) :

                (

                <div> No message on this thread </div>
                )

                }

                <div className="add-new-message-form">
                    <div className='btn btn-success new-message-btn float-right mb-3' onClick={this.newMessage.bind(this)}>
                        new message
                    </div>

                    {
                        this.state.messageHidden ? (<div></div>) : (<NewMessage onSubmit={this.submitMessage.bind(this,this.props.thread.id)}/>)
                    }
                </div>


            </div>

        );
    }
}



const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ThreadActions, dispatch),
})


function mapStateToProps(state) {

    return {

        thread:state.threads.thread,

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ThreadDetail)

