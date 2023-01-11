import {useLoaderData} from "react-router-dom"

function Show (props) {
    const person = useLoaderData()
    
    return <div className="person">
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <img src={person.image} alt={person.name}/>
    </div>
}

export default Show