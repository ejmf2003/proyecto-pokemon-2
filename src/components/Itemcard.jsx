import React from 'react'

export default function Itemcard() {

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
      
  return (
    <div>
      
    </div>
  )
}
