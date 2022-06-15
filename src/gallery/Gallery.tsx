import GalleryItem from './GalleryItem';
import './Gallery.css';
import { useEffect, useState } from 'react';
import { Character, Info, PageData } from '../model';

export default function Gallery() {
    const[page,setPage] = useState(localStorage.getItem(`page`) ?? `1`)
    const [errorMessage, setErrorMessage] = useState("");
    const [name, setName] = useState('');
    const [characters, setCharacters] = useState<Array<Character>>([]);
    const [info, setInfo] = useState<Info>();

    useEffect(() => {
        localStorage.setItem(`page`,page)
    },[page]);

    useEffect(() => fetchPage(), []);


    const fetchPage = (url: string = `https://rickandmortyapi.com/api/character?page=${page}`) => {
        fetch(url)
            .then(response => response.json())
            .then((page: PageData) => {
                setCharacters(page.results);
                setInfo(page.info);
            })
            .catch(() => setErrorMessage("Cannot load characters"));

    }

    const nextPage = () => {
        setPage(oldPage => `${parseInt(oldPage) + 1}`);
        fetchPage(info!.next);

    }
    const prevPage = () => {
        setPage(oldPage => `${parseInt(oldPage) - 1}`);
        fetchPage(info!.prev);

    }

    const components = characters
            .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
            .map((c,index)=> <div  key={c.id} data-testid={`character-${index}`} ><GalleryItem character={c} /></div>)

    return (
        <div className="gallerie-wrapper">
            <h1>The Rick and Morty gallery</h1>

            <div className="search">
                <label htmlFor="search-value">Search for name:</label> <input id="search-value" type="text" value={name} onChange={ev => setName(ev.target.value)} />
            </div>
            <div className="gallery">
                {components}
            </div>
            <div className="navigation">
                { info?.prev && <button onClick={prevPage}>Prev</button> }
                { info?.next && <button onClick={nextPage}>Next</button> }
            </div>
        </div>
    )
}