import React from 'react';

import { connect } from 'react-redux';
import { selectCountry, deleteCountry } from '../actions';

class CountryTag extends React.Component {

    handleChange = (event) => {
        if (event.target.checked) {
            this.props.selectCountry(this.props.country.flag);
        } else {
            this.props.deleteCountry(this.props.country.flag);
        }
    }

    render() {
        return <div><input className='myCheckBox' type="checkbox" name={this.props.country.name} onChange={this.handleChange} /> <p>{this.props.country.name}</p></div>
    }

}

export default connect(null, { selectCountry, deleteCountry })(CountryTag);