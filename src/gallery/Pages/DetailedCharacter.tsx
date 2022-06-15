import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {Character} from "../../model";



export default function DetailedCharacter() {

    const {characterId} = useParams()
    const [character,setCharacter] = useState<Character>()


    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`,{method:"GET"})
            .then((response) => response.json() )
            .then((json:Character) => setCharacter(json))


    },[])
    return(
        <div className={"singleCharacter"}>
           <h2>{character?.name}</h2>
            <h2>{character?.species}</h2>
            <img src={character?.image}/>
            <Link to={"/"}>back to Main Page</Link>
        </div>
    )
}