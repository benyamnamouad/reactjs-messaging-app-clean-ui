import React, {Component} from 'react'

import {Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";

// Validators of the form

const validate = values => {
    const errors = {}


    if (!values.message) {
        errors.message = 'The message should not be empty'
    }
    return errors
}

// Rendering new Field input including the new validator using reduxForm

const renderAreaField = ({
                             input,
                             label,
                             type,
                             meta: { touched, error }
                         }) => (
    <div>
        <div>
            <textarea rows="5" className={`form-control ${touched && error ? 'is-invalid':''} || ${touched ? 'is-valid':''} `} {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span className="invalid-feedback ">{error}</span>))}
        </div>
    </div>
)



class NewMessageForm extends Component {

    render() {

        const { handleSubmit } = this.props;
        return (
            <div>

                <form className="text-center" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <Field
                            name="message"
                            component={renderAreaField}
                            label="Write your message here ... " />

                    </div>

                    {/*// this to use spinner uploadin later */}
                    {!this.props.messageUploading ? <button type="submit" className="btn btn-danger message-submit float-right">Submit</button>
                        : <div className="spinner-border spinner-border-sm mx-2" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }

                </form>

            </div>
        )

    }


}

const NewMessage = reduxForm({
    // a unique name for the form
    form: 'new-message',
    validate, // <--- validation function given to redux-form
})(NewMessageForm)


const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(NewMessage);


