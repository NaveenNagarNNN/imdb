import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import color from "../color.json"

export default function DataPokemon() {
    // console.log(props)
    const { data } = useParams()
    const navigate = useNavigate()

    console.log("checkhere")



    const [pokemon, setPokemon] = useState(
        {
            name: "",
            id: 0,
            description: "",
            height: 0,
            weight: 0,
            type: [{ slot: 1, type: { name: "" } }],
            stats: []
        }
    )

    // useEffect(() => {
    //     fetch(`https://pokeapi.co/api/v2/pokemon/${data}`)
    //         .then((e) => { return e.json() })
    //         .then((e) => {
    //             setPokemon(
    //                 {
    //                     name: e.name,
    //                     id: e.id,
    //                     description: "",
    //                     height: e.height,
    //                     weight: e.weight,
    //                     type: e.types,
    //                     stats: e.stats
    //                 }
    //             )
    //             setTypePokemon(e.types[0].type.name)
    //         }
    //         )
    // }, [])

    // useEffect(() => {
    //     document.title = `Pokedex - ${pokemon.name}`
    // }, [pokemon])

    return (
        <main >
            <header
                className="w-full md:min-h-[400px] md:h-fit flex justify-center flex-col"
            // style={colorTheme}
            >

                <section className="max-w-5xl mx-auto flex-1 p-8">
                    <div className="bg-black/40 md:px-16 py-4 flex flex-col md:flex-row justify-between gap-6 items-center rounded-lg">
                        <div className="flex flex-col items-center">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${1}.png`} className="w-80" />

                        </div>
                        <div className="md:w-1/2 px-6 flex flex-col items-center gap-6">
                            <p className="text-white text-xs md:text-base">
                                Pokémon are creatures of all shapes and sizes who live in the wild or alongside their human partners (called “Trainers”). During their adventures, Pokémon grow and become more experienced and even, on occasion, evolve into stronger Pokémon.</p>


                        </div>
                    </div>
                </section>
            </header>

        </main>
    )
}