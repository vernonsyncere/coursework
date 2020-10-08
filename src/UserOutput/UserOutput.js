import React from 'react'

const UserOutput = (props) => {

    return(
        <div >
            <p style={props.newStyle}>{props.username}</p>
           
        </div>
    )
}

export default UserOutput;