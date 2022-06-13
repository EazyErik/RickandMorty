import GalleryItem from './GalleryItem';
import './Gallery.css';
import { useEffect, useState } from 'react';
import { Character, Info, PageData } from '../model';

export default function Gallery() {

    const [name, setName] = useState('');
    const [characters, setCharacters] = useState<Array<Character>>([]);
    const [info, setInfo] = useState<Info>();

    useEffect(() => fetchPage(), []);

    const fetchPage = (url: string = 'https://rickandmortyapi.com/api/character') => {
        fetch(url)
            .then(response => response.json())
            .then((page: PageData) => {
                setCharacters(page.results);
                setInfo(page.info);
            });
    }

    const nextPage = () => fetchPage(info!.next);

    const prevPage = () => fetchPage(info!.prev);

    const components = characters
            .filter(c => c.name.toLowerCase().includes(name.toLowerCase()))
            .map(c => <div key={c.id}><GalleryItem character={c} /></div>)

    return (
        <div className="gallerie-wrapper">
            <h1>The Rick and Morty gallery</h1>
            <div className="navigation">
                { info?.prev && <button onClick={prevPage}>Prev</button> }
                { info?.next && <button onClick={nextPage}>Next</button> }
            </div>
            <div className="search">
                <label htmlFor="search-value">Search for name:</label> <input id="search-value" type="text" value={name} onChange={ev => setName(ev.target.value)} />
            </div>
            <div className="gallery">
                {components}
            </div>
        </div>
    )
}