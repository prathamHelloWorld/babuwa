import React from 'react';


const Card=({ id,name,username,email })=>{
    return(
            <div className="pics">
                    <img src={`https://robohash.org/${ username }?200*200`} alt="pro" />
                    <div>
                    <h1>
                        {name}
                    </h1>
                    <h1 className="text">
                        {email}
                    </h1>
                    </div>
            </div>
    )
}

export default Card;