import React from 'react';

import { connect } from 'react-redux';
import { closeList, deleteCountries } from '../actions';

class StepThree extends React.Component {

    renderList() {
        return this.props.selectedFlags.map((ele, index) => {
            return <li key={index}>{ele}</li>
        })
    }

    handleOnClick = () => {
        this.props.deleteCountries();
        this.props.closeList();
    }

    render() {
        return (
            <div>
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Step Three</h4>
                </div>
                <div class="card-body">
                    <ul>{this.renderList()}</ul>
                    <button onClick={this.handleOnClick}>Clear Flags</button>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        selectedFlags: state.selectedFlags
    };
}

export default connect(mapStateToProps, { closeList, deleteCountries })(StepThree);