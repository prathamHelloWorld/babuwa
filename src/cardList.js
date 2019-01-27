import React from 'react';
import Card from './card';

const CardList=({robots})=>{
    const cardarray=robots.map((user,i)=>{
        return(
            <Card id={ robots[i].id } username={ robots[i].username } name={ robots[i].name } email={ robots[i].email  } key={i}  />
        )
    }
    )
    return(
    <div className="row">
        { cardarray }
    </div>
    )
}

export default CardList;