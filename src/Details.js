import React from 'react';

// const Details = () => {
//     return <h1>hi lol</h1>;
// }
const Details = props => {
    return (
    <pre>
        <code>
            {JSON.stringify(props, null, 4)}
        </code>
    </pre>
        )
}


export default Details;