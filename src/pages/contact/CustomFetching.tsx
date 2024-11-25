import { useState, useEffect } from 'react';

const CustomFetching = (username: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiGit = async () => {
      try {
        const respuesta = await fetch(`https://api.github.com/users/${username}`);
        const result = await respuesta.json();
        setData(result);
      } catch (e) {
        setError(`Error en el fetch de la Api: ${e}`);
      } finally {
        setLoading(false);
      }
    };

    fetchApiGit();
  }, [username]);

  return { data, loading, error };
};

export default CustomFetching;
