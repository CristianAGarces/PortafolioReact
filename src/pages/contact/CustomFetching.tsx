import { useState, useEffect } from "react";

const CustomFetching = (username: string) => {
  const [data, setData] = useState<GitHubUser | null>(null);

  // Define the GitHubUser interface at the top of your file:
  interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    html_url: string;
    name: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    created_at: string;
    location: string;
  }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApiGit = async () => {
      try {
        const respuesta = await fetch(
          `https://api.github.com/users/${username}`
        );
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
