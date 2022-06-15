import { Character } from "../model"
import './GalleryItem.css';
import {Link} from "react-router-dom";


interface GalleryItemProps {
    character: Character
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <div className="image-wrapper">
               <Link to={`/characterdetails/${props.character.id}`}><img data-testid={"image"} src={props.character.image} /></Link>
            </div>
            <div  className="character-information">
                <div data-testid={"name"} >
                    <span  className="label">Name:</span> {props.character.name}
                </div>
                <div data-testid={"status"} >
                    <span className="label">Status:</span> {props.character.status}
                </div>
                <div data-testid={"species"} >
                    <span className="label">Species:</span> {props.character.species}
                </div>
            </div>
        </div>
    )
}
