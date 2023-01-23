import React from "react";
import classes from "./Pokelist.module.css";
import { Link } from "react-router-dom";

function Card(props)
{
    return(
        <div className={classes.card}>
            <img src={props.pic} alt="hello there"/>
            <Link to={`${props.name}`}><h2>{props.name}</h2></Link>
        </div>
    );
}

export default Card;