import React from 'react';
import CardList from './cardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots: robots,
            searchField:'',
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }
    render(){
        const { robots,searchField }=this.state;
        const filterRobots=robots.filter(
            robots=>{
                return robots.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
            }
        )
        return(
            <div>
            <SearchBox searchChange={ this.onSearchChange }/>
            <CardList robots={filterRobots}/>
            </div>
        )
    }

}

export default App;