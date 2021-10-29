import react from "react";
import { useEffect, useState } from "react/cjs/react.development";
import Pokemon from "./componentes/Pokemon";

function App() {
  const [listaPokemon, setListaPokemon] = useState([]);

  async function getPokemon(){
    const answer = await fetch('http://localhost:4000/pokemon');
    const pokemons = await answer.json();
    setListaPokemon(pokemons)
  }

  useEffect(() => {
    getPokemon()
 }, [])

  return (
    <div>
      <div className="title">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/62902855-31e8-48de-986e-5080e8ef5f15/d5uxsvu-cbf56dfe-0c82-40f9-928b-1e756acf0236.png/v1/fill/w_312,h_112,strp/pokedex_vector_logo_by_macoscrazy_d5uxsvu-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTEyIiwicGF0aCI6IlwvZlwvNjI5MDI4NTUtMzFlOC00OGRlLTk4NmUtNTA4MGU4ZWY1ZjE1XC9kNXV4c3Z1LWNiZjU2ZGZlLTBjODItNDBmOS05MjhiLTFlNzU2YWNmMDIzNi5wbmciLCJ3aWR0aCI6Ijw9MzEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.W5OaCwDASPcITC1_1B8Rr-lqsOWzYddfZH3HwnCkR4o"
          alt=""
        />
      </div>
      <div className="container-pokemon">
        {listaPokemon.map((item) => (
          <Pokemon
            key={item.id}
            foto={item.image}
            nome={item.name.english}
            hp={item.base.hp}
            ataque={item.base.Attack}
            defesa={item.base.Defense}
            tipo={item.type}
          />
        ))}
      </div>
    </div>
  );
}
export default App;
