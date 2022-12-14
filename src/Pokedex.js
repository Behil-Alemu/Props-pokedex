import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = (props) => {
    return (
        <div className="Pokedex">
          <h2 className="Pokedex-title">Pokedex</h2>
          <div className="Pokedex-cards">
            {props.pokemon.map(p => (
              <Pokecard
                id={p.id}
                name={p.name}
                type={p.type}
                base_experience={p.base_experience}
              />
            ))}
          </div>
        </div>
      );
    
}
export default Pokedex;