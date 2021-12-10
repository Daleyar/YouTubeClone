import React from "react";
import './searchBar.css'

class SearchBar extends React.Component {
    state = {
        searchTerm: '',
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSearch(this.state.searchTerm);
        this.setState({
            searchTerm: ''
          })
    }
    render(){
        return(
            <>

            <div className="searchBar">
             <form onSubmit={this.handleSubmit}>
                  <input className="searchInput" name='searchTerm' type="text" placeholder="  Search..." onChange={this.handleChange} value={this.state.searchTerm}/>
                  <button className="searchButton" type="submit">Search</button>
             </form>

            </div>      
            </>  
        )
    }
}
export default SearchBar;