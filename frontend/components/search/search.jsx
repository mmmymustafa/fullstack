import React from 'react';

class Search extends React.Component{
    render(){
        return(
            <div>
                <form>   
                    <input type="text" className="search-bar" placeholder="Search lyrics & more" />
                    <button type="submit" className="search-button"><i id="search" class="material-icons">search</i></button>
                </form>
            </div>
        )
    }
}

export default Search;