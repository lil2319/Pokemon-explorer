import React from "react";
import pokemonLogo from "../assets/pokemonLogo.png";
import poke from "../assets/poke.png";
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="home-container">
            <img src={pokemonLogo} alt="Pokémon Logo" className="logo" />
            <h2>Welcome to Pokémon Explorer!</h2>
            <h3>Catch the vibe, not just the Pokémon!
                Dive into the world of your favorite pocket monsters! discover cool stats
                about every Pokémon you meet. Whether you're a seasoned trainer or just starting your journey,
                there's always something new to explore. Gotta browse 'em all!</h3>
            <Link to="/pokedex">
                <img src={poke} alt="Pokeball Logo" />
            </Link>
            <h5>Click the Pokeball to go to the pokedex!</h5>
        </div>
    );
}
