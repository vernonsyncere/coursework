import React from 'react'

const UserInput = (props) => {

    return(
        <div>
            <input style={props.newStyle} onChange={props.typed} type="text" value={props.username}/>
        </div>
    )
}

export default UserInput;