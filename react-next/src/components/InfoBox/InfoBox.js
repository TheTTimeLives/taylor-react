import React from 'react'

class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName = (event) => {
        this.props.getName(event.target.value)
      };

    handleEmail = (event) => {
        this.props.getEmail(event.target.value)
    };
  
    handleSubmit(event) {
      event.preventDefault()
      this.props.submitForm()
    }

    render() {
        return (
        <div>
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input type="text" onChange={this.handleName} />
            </label>
            <label>
                Email:
                <input type="text" onChange={this.handleEmail} />
            </label>
            <input type="submit" value="Submit"/>
        </form>
  </div>)
    }
}

export default InfoBox