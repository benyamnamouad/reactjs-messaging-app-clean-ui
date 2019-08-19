import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";

import * as ThreadActions from "../../actions";

import NewThreadForm from "./NewThreadForm";
import {bindActionCreators} from "redux";






class NewThread extends Component {

    componentWillMount() {
        // this.props.actions.reSetUploadingState()

    }


    componentDidMount(){
        // Set the title of onglet to "New thread"
        document.title = "New Thread"
    }

    /**
     * Submit form values to the action function
     * @param values
     */
    submit (values){
        this.props.actions.createThread(values).then(()=>{
         console.log(this.props.history.push('/'));
        });

    }



    render() {
        return (
            <div>

                <div className="container my-5">
                    <div className="text-center head">
                        <h1> Add new thread</h1>

                    </div>
                    {/*Add new thread section*/}

                    <div className="w-75 mx-auto">

                        <NewThreadForm onSubmit={this.submit.bind(this)} />

                    </div>

                    {/*End of add new thread function*/}


                </div>

            </div>


        )
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(ThreadActions, dispatch),
});


const mapStateToProps = state => ({
    auth: state.auth,
})
export default connect(mapStateToProps, mapDispatchToProps)(NewThread)


