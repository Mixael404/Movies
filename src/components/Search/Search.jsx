import React, { useEffect, useRef, useState } from "react";

export default function SearchInput({ updateFn }) {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         search: '',
    //         handler: this.props.handler,
    //         handleType: this.props.typeHandler,
    //         selected: '',
    //         updateFn: this.props.updateFn,
    //     }
    // }

    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState('');
    const [isFirst, setisFirst] = useState(true);

    const searchElement = useRef()

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
            console.log('Enter');
            // this.setState({ search: e.target.value }, () => {
            //     this.state.updateFn(this.state.search, this.state.selected);
            // })
            // setSearch(e.target.value);
            updateFn(search, selected);
        }
    }

    const handleRadioSelect = (e) => {
        // this.setState(() => ({ selected: e.target.value }), () => {
        //     this.state.updateFn(this.state.search, this.state.selected);
        // });
        setSelected(e.target.value);
        // updateFn(search, selected);
    }


    useEffect(() => {
        if(!isFirst && search !== ""){
            updateFn(search, selected);
        } else{
            updateFn('All', '');
            setisFirst(false)
        }
    }, [search, selected])


        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            ref={searchElement}
                            placeholder='Search'
                            type="text"
                            className="validate"
                            value={search}
                            onChange={handleSearch}
                            onKeyDown={handleEnter}
                        />
                        <button className="btn search-btn"
                            onClick={() => updateFn(search, selected)}
                        >
                            Search
                        </button>
                        <div className="radioBtns">
                            <p>
                                <label>
                                    <input className="with-gap" name="type" type="radio" value=""
                                        checked={selected == ''}
                                        onChange={handleRadioSelect}
                                    />
                                    <span>All</span>
                                </label>
                                <label>
                                    <input className="with-gap" name="type" type="radio"
                                        value="movie"
                                        checked={selected == 'movie'}
                                        onChange={handleRadioSelect}
                                    />
                                    <span>Movies</span>
                                </label>
                                <label>
                                    <input className="with-gap" name="type" type="radio" value="series"
                                        checked={selected == 'series'}
                                        onChange={handleRadioSelect}
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

export { SearchInput }