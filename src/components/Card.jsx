import { useState, useEffect } from 'react'


export default function Card({pokemonData}) {
/*
    const [post, setPost] = useState([]);
    const url_base = 'https://pokeapi.co/api/v2/pokemon/'

    const fetchApi = async (id) =>{
    try {
      const response = await fetch(`${url_base}${id}`)
      const data = await response.json()
      setPost((prevpost) => [...prevpost, data])
    } catch (error) {
      console.error('error del fetch');
      
    }
  }

useEffect(() =>{
      fetchApi()
   
    },[])
useEffect(() =>{
    console.log(post);
    
  },[post]) */

       
    const [details, setDetails] = useState(null);

    useEffect(() => {
      let cancelled = false;
      const fetchDetails = async () => {
        if (!pokemonData || !pokemonData.url) return;
        try {
          const res = await fetch(pokemonData.url);
          const data = await res.json();
          if (!cancelled) setDetails(data);
        } catch (error) {
          console.error('Error del fetch:', error);
        }
      };
      fetchDetails();
      return () => { cancelled = true };
    }, [pokemonData]);

    const imageUrl = details?.sprites?.other?.['official-artwork']?.front_default
      || details?.sprites?.front_default
      || (details ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png` : null);

    return (
      <div className='bg-white rounded-lg p-8'>
        <div className='flex justify-center'>
          {imageUrl ? (
            <img src={imageUrl} alt={pokemonData.name} className='w-32 h-32 object-contain' />
          ) : (
            <div className='w-32 h-32 flex items-center justify-center text-sm text-gray-500'>Cargando...</div>
          )}
        </div>
        <div className='text-xl font-semibold capitalize text-black mt-4'>
          <h2>{pokemonData.name}</h2>
          <p>ID: {details?.id ?? '—'}</p>
        </div>
      </div>
    )
}