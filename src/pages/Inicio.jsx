import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import PokemonCard from '../components/Card'

function Inicio() {
  const [post, setPost] = useState([]);
  const url_base = 'https://pokeapi.co/api/v2/pokemon/?limit=100'

  const fetchApi = async () =>{
    try {
      const response = await fetch(url_base)
      
      const data = await response.json()
      setPost(data.results)
    } catch (error) {
      console.error('error del fetch');
      
    }
  }

 

  useEffect(() =>{
    fetchApi()
 
  },[])
  
  useEffect(() =>{
    
    
  },[post])

  const [allPokemon, setAllPokemon] = useState([]); // Base de datos completa
  const [filteredPokemon, setFilteredPokemon] = useState([]); // Lo que mostramos
  const [searchTerm, setSearchTerm] = useState("");

  // 1. Precarga de la API al montar el componente
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1025");
      const data = await res.json();
      setAllPokemon(data.results);
      setFilteredPokemon(data.results); // Inicialmente mostramos todos
      
    };
    loadData();
  }, []);

  // 2. Función que maneja la búsqueda (Handle Search)
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    // Filtramos sobre el JSON que ya tenemos en 'allPokemon'
    const filtered = allPokemon.filter((pokemon) =>
      pokemon.name.includes(value)
    );
    setFilteredPokemon(filtered);
    setPost(filtered)
    console.log(filtered)
  };



  return (
    <>
    <div>
      <div className='flex justify-center'>
      <img src="/src/img/logo.png" alt="" className='h-50' />
      <input type="text" placeholder='Buscar Pokemon...' value={searchTerm} onChange={handleSearch} className='flex p-4 w-3xl border-2 h-8 rounded-3xl m-20 bg-white text-black' />
      </div>
    </div>
    <div className='p-8'>
      <div className='grid grid-cols-4 gap-6'>
        {post.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemonData={pokemon} />
        ))}
      </div>
    </div>
    </>
  )
}

export default Inicio