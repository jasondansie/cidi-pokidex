import React from "react";
import Card from "./Card.js"
import { Link } from "react-router-dom"
import classes from "./Pokelist.module.css";

class Pokelist extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            data : [],
            isLoading : false
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true });

        fetch("https://pokeapi.co/api/v2/pokemon?limit=125&offset=0")
        .then(res => res.json())
        .then(data => {
            const fetches = data.results.map(p => { return fetch(p.url).then(res=>res.json())})
            Promise.all(fetches).then(res =>  this.setState({ data: res, isLoading: false}));
        })
    }

    render()
    {
        if(this.state.isLoading)
            return <p> Loading... </p>

        return(
            <div className={classes.cards}>
                {this.state.data.map(card => <Card key={card.name} name={card.name} pic={card.sprites.other.home.front_default}
                click={<Link to={card.name}/>}/>)}
            </div>
        );
    }
}

export default Pokelist;