import {Character, PageData} from "../model";
import Gallery from "./Gallery";
import {render, waitFor,screen} from "@testing-library/react";

test("characters are filtered and displayed",async() => {


    jest.spyOn(global,'fetch').mockImplementation(() => {
        return Promise.resolve({
            json: () => Promise.resolve(
                 {
                        info: {},
                        results: [
                            {
                                id: '4711',
                                name: 'Rick Sanchez',
                                image: '',
                                status: 'Alive',
                                species: 'Human'
                            },
                            {
                                id: '4712',
                                name: 'Morty Smith',
                                image: '',
                                status: 'Alive',
                                species: 'Human'
                            },
                            {
                                id: '4713',
                                name: 'Summer Smith',
                                image: '',
                                status: 'Alive',
                                species: 'Human'
                            }
                        ]

                })
        } as Response)
    })


render(<Gallery />)

await waitFor(() => {
    expect(screen.getByTestId(`character-0`)).toBeDefined()
})
})