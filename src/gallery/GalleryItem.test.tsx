import { render, screen } from "@testing-library/react"
import GalleryItem from "./GalleryItem"

test('that character is rendered', () => {
    const character = {
        id: '4711',
        name: 'Rick Sanchez',
        image: 'http://imageurl/',
        status: 'Alive',
        species: 'Human'
    }

    render(<GalleryItem character={character} />)

    expect((screen.getByTestId('image') as HTMLImageElement).src).toEqual('http://imageurl/')
    expect(screen.getByTestId('name').textContent).toEqual('Name: Rick Sanchez')
    expect(screen.getByTestId('status').textContent).toEqual('Status: Alive')
    expect(screen.getByTestId('species').textContent).toEqual('Species: Human')
})