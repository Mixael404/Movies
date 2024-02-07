import { CardList } from "../components/CardsList/CardsList"
import React from "react";
import Preloader from "../components/Preloader";
import { SearchInput } from "../components/Search/Search";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            search : 'One',
            type: "",
            loading: true,
            error: false,
        }
    }

    componentDidMount(){
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.search}&type=${this.state.type}`)
            .then((response) => this.setState({data : [...response.data.Search], loading: false}))
    }


    updateSearchList = (search, type) => {
        this.setState({loading: true});
        axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}&type=${type}`)
            .then((response) => {
                if(response.data){
                    this.setState({data : [...response.data.Search], loading: false, error: false})
                } 
            })
            .catch(() => {
                this.setState({error: true})
            })
    }


    updateSearch(string){
        this.setState({search: string})
    }

    updateTypeInput(name){
        this.setState({type: name})
    }

    render(){
        return(
            <main className="content">
                <div className="container">
                    Hello from Movies App
                    <SearchInput updateFn={this.updateSearchList} handler={this.updateSearch.bind(this)} typeHandler={this.updateTypeInput.bind(this)}/>
                    {
                    !this.state.loading ? <CardList movies={this.state.data}/> : <Preloader />
                    }
                    {this.state.error && <h4>Not found</h4>}
                </div>
            </main>
        )
    }
}

export { Main }