import React from 'react'
import { connect } from 'react-redux'
import { searchVideo } from '../actions/index'
import { Field, reduxForm } from 'redux-form'

class Search extends React.Component {
  // renderError({ error, touched }) {
  //   if (touched && error) {
  //     return (
  //       <div className="ui error message">
  //         <div className="header"> {error} </div>
  //       </div>
  //     )
  //   }
  // }

  renderInput = ({ input, label, meta }) => {
    // console.log(meta)
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {/* {this.renderError(meta)} */}
      </div>
    )
  }

  onSubmit = (formValues) => {
    this.props.searchVideo(formValues.search)
    // this.props.onSubmit(formValues)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field
            name="search"
            component={this.renderInput}
            label="Search Videos"
          />
          {/* <div className="field">
            <label>Video Search</label>
            <input
              type="text"
              value={this.searchTerm}
              onChange={this.onInputChange}
            />
          </div> */}
        </form>
      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {}
  if (!formValues.search) {
    errors.search = 'You must enter a valid term'
  }

  return errors
}

// const mapStateToProps = (state) => {
//   return {
//     term: state.videos.term,
//   }
// }

const formWrapped = reduxForm({
  form: 'search',
  validate,
})(Search)

export default connect(null, { searchVideo })(formWrapped)
