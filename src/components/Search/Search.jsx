import React from "react";

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            handler: this.props.handler,
            handleType: this.props.typeHandler,
            selected: '',
            updateFn: this.props.updateFn,
        }
    }

    handleSearch = (event) => {
        this.setState({ search: event.target.value });
    }

    handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter');
            this.setState({ search: e.target.value }, () => {
                this.state.updateFn(this.state.search, this.state.selected);
            })
        }
    }

    handleRadioSelect = (e) => {
        this.setState(() => ({selected: e.target.value}), () => {
            this.state.updateFn(this.state.search, this.state.selected);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder='Search'
                            type="text"
                            className="validate"
                            value={this.state.search}
                            onChange={this.handleSearch}
                            onKeyDown={this.handleEnter}
                        />
                        <button className="btn search-btn"
                            onClick={() => this.state.updateFn(this.state.search, this.state.selected)}
                        >
                            Search
                        </button>
                        <div className="radioBtns">
                            <p>
                                <label>
                                    <input className="with-gap" name="type" type="radio" value="" 
                                    checked={this.state.selected == ''} 
                                    onChange={this.handleRadioSelect}
                                    />
                                    <span>All</span>
                                </label>
                                <label>
                                    <input className="with-gap" name="type" type="radio" 
                                    value="movie" 
                                    checked={this.state.selected == 'movie'}
                                    onChange={this.handleRadioSelect}
                                    />
                                    <span>Movies</span>
                                </label>
                                <label>
                                    <input className="with-gap" name="type" type="radio" value="series" 
                                    checked={this.state.selected == 'series'}
                                    onChange={this.handleRadioSelect}
                                    />
                                    <span>Series</span>
                                </label>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { SearchInput }