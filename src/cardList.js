import React from 'react';
import Card from './card';
import 'bootstrap/dist/css/bootstrap.min.css'

const CardList=({robots})=>{
    const cardarray=robots.map((user,i)=>{
        return(
            <Card id={ robots[i].id } username={ robots[i].username } name={ robots[i].name } email={ robots[i].email }  />
        )
    }
    )
    return(
    <div className="row">
        { cardarray }
        { cardarray }
    </div>
    )
}

export default CardList;