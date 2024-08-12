import { useState, useEffect, useContext } from 'react';
import CryptoJS from 'crypto-js';
import { AppContext } from '../context/AppContext';

const API_URL = process.env.REACT_APP_API_URL;

const useFetch = (url, dataMapper, setState, extraQueries = '') => {
  const { setCharacters } = useContext(AppContext);
  const [loading, setLoading] = useState(true);
  const privateKey = 'adbb34cccfcfe63101caa7df9f7f925dd50870c1';
  const publicKey = '50bbee73e64c6d9975586af60a5dd6aa';
  const ts = Math.floor(Date.now() / 1000);
  const concatenatedString = ts + privateKey + publicKey;
  const md5Hash = CryptoJS.MD5(concatenatedString).toString();
  const builtUrl = `${API_URL}${url}?apikey=${publicKey}&hash=${md5Hash}${extraQueries}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(builtUrl);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        const mappedData = dataMapper(result.data.results);
        setState(mappedData);
        setCharacters(mappedData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, dataMapper, setState, extraQueries]);

  return { loading };
};

export default useFetch;
