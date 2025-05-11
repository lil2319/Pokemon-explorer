import React, { useEffect, useState } from 'react';

export default function PokemonDetail({ id }) {
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await res.json();
                setPokemon(data);
            } catch (error) {
                console.error("Failed to fetch Pokémon details:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchPokemon();
    }, [id]);

    if (loading) return <p>Loading…</p>;
    if (!pokemon) return <p>Failed to load.</p>;

    return (
        <div className="pokemon-detail">
            <p>#{pokemon.id}</p>
            <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
            <div>
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
                    alt="Back sprite"
                />
            </div>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p>Types: {pokemon.types.map(t => t.type.name).join(', ')}</p>
        </div>
    );
}
