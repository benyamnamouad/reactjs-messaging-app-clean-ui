import React, {Component} from 'react'
import {Link} from "react-router-dom";

import {Field, reduxForm } from 'redux-form'
import {connect} from "react-redux";

// Validators of the form

const validate = values => {
    const errors = {}
    if (!values.subject) {
        errors.subject = 'Please write a subject for your thread'
    }

    if (!values.recipient) {
        errors.recipient = 'Please add a recipient for your thread'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.recipient)) {
        errors.recipient = 'Invalid email address'}

    if (!values.message) {
        errors.message = 'The message should not be empty'
    }
    return errors
}

// Rendering new Field input including the new validator using reduxForm

const renderField = ({
                         className,
                         input,
                         label,
                         type,
                         meta: { touched, error }
                     }) => (
    <div>
        <div>
            <input className={`${className} form-control ${touched && error ? 'is-invalid':''} || ${touched ? 'is-valid':''} `} {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span className="invalid-feedback ">{error}</span>))}
        </div>
    </div>
)

// Rendering new TextArea input including the new validator using reduxForm


const renderAreaField = ({
                             input,
                             label,
                             type,
                             meta: { touched, error, warning }
                         }) => (
    <div>
        <div>
            <textarea rows="5" className={`form-control ${touched && error ? 'is-invalid':''} || ${touched ? 'is-valid':''} `} {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span className="invalid-feedback ">{error}</span>))}
        </div>
    </div>
)



class NewThreadForm extends Component {

    render() {

        const { handleSubmit } = this.props;
        return (
            <div>

                <form className="text-center" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <Field
                                name="subject"
                                label="Subject of the thread"
                                component={renderField}
                                type="text" />
                        </div>
                        <div className="form-group col-md-6">
                            <Field
                                name="recipient"
                                component={renderField}
                                type="text"
                                label="Recipient of thread" />
                        </div>
                    </div>


                    <div className="form-group">
                        <Field
                            name="message"
                            component={renderAreaField}
                            label="Write your message here " />

                    </div>

                    <Link to="/"><button className="btn btn-danger mr-2">Cancel</button>
                    </Link>

                        {/*this to use spinder uploading later */}
                    {!this.props.threadUploading ? <button type="submit" className="btn btn-success">Submit</button>
                        : <div className="spinner-border spinner-border-sm mx-2" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    }

                </form>

            </div>
        )

    }


}

const NewThreadFormRedux = reduxForm({
    // a unique name for the form
    form: 'new-thread',
    validate, // <--- validation function given to redux-form
})(NewThreadForm)


const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(NewThreadFormRedux);


