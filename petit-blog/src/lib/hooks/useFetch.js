import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [peticio, setPeticio] = useState({
    dades: [],
    carregant: true,
    error: null,
  });

  const setData = (nouDades) =>
    setPeticio({ dades: nouDades, carregant: false, error: null });
  const setError = (nouError) =>
    setPeticio({ dades: [], carregant: false, error: nouError });

  const fetchBlogs = async (setData, setError, signal) => {
    try {
      const resposta = await fetch(url, signal);
      if (!resposta.ok) throw new Error("Error de càrrega!");
      console.log(resposta);
      console.warn("Dades carregades correctament");
      const data = await resposta.json();
      setData(data);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Aturada de càrrega de dades!");
      } else {
        setError(error.message);
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    setTimeout(() => {
      // npx json-server --watch src/lib/data/db.json --port 8000
      fetchBlogs(setData, setError, controller.signal);
    }, 2000);
    return () => {
      controller.abort();
      console.log("CleanUP!");
    };
  }, []);

  return peticio;
};

export default useFetch;
