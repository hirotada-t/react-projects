import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon.js';
import './App.css';
import Card from './Components/Card/Card.js';
import Navbavr from './Components/Navbar/Navbavr.js';

function App() {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";
  const [loading, setLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      // すべてのポケモンデータを取得
      // 各ポケモンの詳細データを取得
      let res = await getAllPokemon(initialURL);
      loadPokemon(res.results);
      setNextUrl(res.next);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map((pokemon) => {
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  const handlePrevPage = async () => {
    if (!prevUrl) return;
    setLoading(true);
    let prevRes = await getAllPokemon(prevUrl);
    await loadPokemon(prevRes.results);
    setNextUrl(prevRes.next);
    setPrevUrl(prevRes.previous);
    setLoading(false);
  };
  const handleNextPage = async () => {
    if (!nextUrl) return;
    setLoading(true);
    let nextRes = await getAllPokemon(nextUrl);
    await loadPokemon(nextRes.results);
    setNextUrl(nextRes.next);
    setPrevUrl(nextRes.previous);
    setLoading(false);
  };

  return (
    <>
      <Navbavr />
      <div className="App">
        {loading ? (
          <h1>Now Loading・・・</h1>
        ) : (
          <>
            <div className="pokemonCardContainer">
              {pokemonData.map((pokemon, i) => {
                return <Card key={i} pokemon={pokemon} />;
              })}
            </div>
            <div className="btn">
              <button onClick={handlePrevPage}>前へ</button>
              <button onClick={handleNextPage}>次へ</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
