import React, { useState, useEffect, useContext } from 'react';
import PokemonDetail from './PokeDetail';
import InfiniteScrollTrigger from "../components/infiniteScroll";
import pokedex from "../assets/pokedex.png"
import pokeLogo from "../assets/pokeLogo.png"

export default function Pokedex() {
    const [list, setList] = useState([]);
    const [nextUrl, setNextUrl] = useState(
        'https://pokeapi.co/api/v2/pokemon?limit=20'
    );
    const [search, setSearch] = useState("");
    const [allPokemonList, setAllPokemonList] = useState([]);


    useEffect(() => {
        (async () => {
            const res = await fetch(nextUrl);
            const data = await res.json();
            setList(prev => {
                const existingNames = new Set(prev.map(p => p.name));
                const newPokemon = data.results.filter(p => !existingNames.has(p.name));
                return [...prev, ...newPokemon];
            });
            setNextUrl(data.next);
        })();
    }, []);

    const loadMore = async () => {
        if (!nextUrl) return;
        const res = await fetch(nextUrl);
        const data = await res.json();
        setList(prev => {
            const existingNames = new Set(prev.map(p => p.name));
            const newPokemon = data.results.filter(p => !existingNames.has(p.name));
            return [...prev, ...newPokemon];
        });
        setNextUrl(data.next);
    };

    useEffect(() => {
        const fetchData = async () => {

            const Res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000');
            const Data = await Res.json();
            setAllPokemonList(Data.results);

            const res = await fetch(nextUrl);
            const data = await res.json();
            setList(prev => {
                const existingNames = new Set(prev.map(p => p.name));
                const newPokemon = data.results.filter(p => !existingNames.has(p.name));
                return [...prev, ...newPokemon];
            });
            setNextUrl(data.next);
        };

        fetchData();
    }, []);

    const filteredList = search
        ? allPokemonList.filter(p =>
            p.name.toLowerCase().includes(search.toLowerCase()))
        : list;

    return (
        <div className='home-container'>
            <img src={pokeLogo} alt="Pokemon" className='logo' />
            <div className="search-bar">
                <img src={pokedex} alt="pokedex" />
                <input
                    type="text"
                    placeholder="Search Pokémon..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className="card-grid">
                {filteredList.map(pokemon => {
                    const id = pokemon.url.split('/').filter(Boolean).pop();
                    return (
                        <div className="flip-card" key={id}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div>{`#${id}`}</div>
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                                        alt={pokemon.name}
                                    />
                                    <div>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</div>
                                </div>
                                <div className="flip-card-back">
                                    <PokemonDetail id={id} />
                                </div>
                            </div>
                        </div>

                    );
                })}
            </div>
            {!search && nextUrl && (
                <InfiniteScrollTrigger onLoadMore={loadMore} hasMore={!!nextUrl} />)}
        </div>
    );
}
