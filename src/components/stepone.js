import React from 'react';

import { connect } from 'react-redux';
import { searchContinents, selectContinent, clearSearch } from '../actions';

class StepOne extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
    }

    handleChange = (event) => {
        this.props.searchContinents(event.target.value);
    }

    handleClick = (event) => {
        if (!event.target.value) {
            this.props.searchContinents('');
        }
    }

    onClickContinent = (continent) => {
        this.props.selectContinent(continent);
        this.inputRef.current.value = '';
        this.props.clearSearch();
    }

    renderList() {
        return this.props.contienetsSearchList.map((ele, index) => {
            return <div className='myTag text-center' key={index} onClick={() => this.onClickContinent(ele)}>{ele}</div>
        })
    }

    renderSelectedContinent() {
        if (this.props.selectedContinent) {
            return <h3>You Selected {this.props.selectedContinent}</h3>
        }
    }

    render() {
        return (
            <div>
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal">Step One</h4>
                </div>
                <div class="card-body">
                    <label>
                        Select a Continents
                    <input ref={this.inputRef} type="text" onClick={this.handleClick} onChange={this.handleChange} />
                    </label>
                    {this.renderList()}
                    {this.renderSelectedContinent()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contienetsSearchList: state.contienetsSearchList,
        selectedContinent: state.selectedContienetCountries.continent
    };
}

export default connect(mapStateToProps, { searchContinents, selectContinent, clearSearch })(StepOne);