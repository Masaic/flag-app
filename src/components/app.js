import React from 'react';
import { connect } from 'react-redux';

import StepOne from './stepone';
import StepTwo from './steptwo';
import StepThree from './stepthree';

class App extends React.Component {

    renderStepTwo() {
        if (this.props.selectedContinent) {
            return <StepTwo></StepTwo>
        }
    }

    renderStepThree() {
        if (this.props.selectedFlags.length > 0) {
            return <StepThree></StepThree>
        }

    }

    render() {
        return <div class="container">

            <h1>Flag Picker</h1>

            <h3>This app will help you to learn flags around the world in 3 steps</h3>

            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 shadow-sm">
                    <StepOne></StepOne>
                </div>
                <div class="card mb-4 shadow-sm">
                    {this.renderStepTwo()}
                </div>
                <div class="card mb-4 shadow-sm">
                    {this.renderStepThree()}
                </div>
            </div>
        </div>
    }


};

const mapStateToProps = (state) => {
    return {
        selectedContinent: state.selectedContienetCountries.continent,
        selectedFlags: state.selectedFlags
    };
}

export default connect(mapStateToProps)(App);