import React, { useCallback, useEffect, useState } from "react";
import {

  MOVIE_SEARCH_URL,
} from "../constants/constant";
import Cards from "./Cards/Cards";
import useDebounce from "../utils/CustomHooks/useDebounce";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "../redux/actions/movieAction";
import { fetchMovieV2 } from "../redux/actions/movieActionV2";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [movieList, setMovieList] = useState([]);

  const dispatch = useDispatch()

  const debouncedInputValue = useDebounce(searchText, 1000);

  const { data, isLoading, error } = useSelector(state => state.movieList);
  const { data: listV2 } = useSelector(state => state.movieListV2);

  useEffect(()=> {
    // OLD REDUCER FUNCTION
    dispatch(fetchMovie())
    // NEW CREATE REDUCER AND CREATE ACTION FUNCTION LOGIC
    dispatch(fetchMovieV2())
  },[])

  useEffect(()=>{
    setMovieList(data)
  },[data])

  useEffect(()=> {
    console.log("V2 logic", listV2)
  },[listV2])

  useEffect(() => {
    if (debouncedInputValue) {
      getSearchResults(debouncedInputValue);
    }
    {
      // dispatch(fetchMovie())
      // fetchMovies();
    }
  }, [debouncedInputValue]);

  const getSearchResults = (value) => {
    try {
      fetch(MOVIE_SEARCH_URL + value)
        .then((res) => res.json())
        .then((data) => {
          setMovieList(data?.results);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    let value = e.target.value;
    setSearchText(value);
  };

  return (
    <div>
      <p>HotStar</p>
      <input onChange={handleInputChange}></input>
      <p>Trending Movies</p>
      <Cards list={movieList} />
    </div>
  );
};
export default Home;
