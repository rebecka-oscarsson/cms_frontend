import React from 'react';
import {useFetch} from "../index";

function Start(props) {
    const [content, loading, error] = useFetch("http://localhost:1337/api/restaurants");
    ;
    if(loading) return <p>loading</p>
    else if(error) return <p>nääj det blev feeel</p>
    else if (content)
    return (
        <h2>
            {content.data[0].attributes.name}
        </h2>
    );
    else return null
}

export default Start;