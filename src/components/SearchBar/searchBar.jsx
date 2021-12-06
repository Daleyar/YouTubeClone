import React from "react";

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
            <div>
             <form onSubmit={this.handleSubmit}>
                  <input name='searchTerm' type="text" placeholder="Search" onChange={this.handleChange} value={this.state.searchTerm}/>
                  <button type="submit">Search</button>
             </form>
            </div>        
        )
    }
}
export default SearchBar;

