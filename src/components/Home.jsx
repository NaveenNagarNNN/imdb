import React, { useEffect, useState } from 'react';
import { Search } from "./Box"
import axios from "axios";
import Pagination from './Pagination';
import { Oval } from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';


function Home() {
    const navigate = useNavigate();
    const [valueAPI, setValueAPI] = useState({
        name: "",
        id: 0,
        type: [{ slot: 0, type: {} }]
    })
    let [pokemon, setpokemon] = useState([]);
    let [pageNum, setPage] = useState(1);
    const [loading, setLoading] = useState(true)
    /* making api request */
    useEffect(function () {
        console.log("useEffect again");
        (function () {
            axios
                .get
                (`https://pokeapi.co/api/v2/pokemon/?offset=${(pageNum - 1) * 20}&limit=20`)
                .then((res) => {
                    console.table(res.name);
                    setpokemon(res.data.results);
                    setLoading(false)
                    setValueAPI({
                        name: res.name,
                        id: res.id,
                        type: res.types
                    })
                })
        })()
    }, [pageNum])
    /* Pagination handlers*/
    const onPrev = () => {
        if (pageNum > 1) {
            setPage(pageNum - 1);
        }
    }
    const onNext = () => {
        setPage(pageNum + 1);

    }



    return (
        <><div className="flex flex-col sm:flex-row items-center ">
            <Search searchPokemon={setpokemon} loading={setLoading} />
        </div>
            <div className="mt-8">
                <div className="mb-8 font-bold text-2xl text-center ">Pokemon</div>
                <div className="flex flex-wrap justify-center">
                    {pokemon.length == 0 ? <Oval
                        height="80"
                        width="80"
                        radius="9"
                        color="gray"
                        secondaryColor='gray'
                        ariaLabel="loading"

                    /> : pokemon.map((item, index) => {

                        return <>
                            <div

                                onClick={() => navigate(`/data/${valueAPI.name}`)}  ///${valueAPI.name}

                                key={item.id}
                                className=" bg-center bg-cover  w-[160px] h-[30vh] md: h-[40vh]  md:w-[180px] m-4 rounded-xl hover:scale-110 duration-300 flex items-end relative"
                                style={{
                                    backgroundImage:
                                        `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + ((pageNum - 1) * 20) + 1}.png)`  //{index + ((pageNum - 1) * 20) + 1}
                                }}
                            >
                                <div
                                    className="font-bold text-white bg-gray-900 bg-opacity-60 p-2 text-center w-full rounded-b-xl"> {item.title || item.name}</div>
                            </div>
                        </>
                    })
                    }
                </div>
                <Pagination
                    pageNum={pageNum}
                    onPrev={onPrev}
                    onNext={onNext}
                ></Pagination>
            </div>
        </>
    )
}

export default Home;