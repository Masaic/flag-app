import React from 'react';

import { connect } from 'react-redux';
import { openList } from '../actions';
import CountryTag from './countryTag';


class StepTwo extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = { displayList: false };
    // }

    renderList() {
        if (this.props.toggleList)
            return this.props.selectedContienetCountries.map((ele, index) => {
                return <CountryTag key={index} country={ele}></CountryTag>
            })
    }

    render() {
        return (
            <div>
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Step Two</h4>
                </div>
                <div class="card-body">
                    <label>
                        Select a Continents
                <input type="text" onClick={this.props.openList} />
                    </label>
                    <ul>{this.renderList()}</ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        selectedContienetCountries: state.selectedContienetCountries.countries,
        toggleList: state.toggleList
    };
}

export default connect(mapStateToProps, { openList })(StepTwo);