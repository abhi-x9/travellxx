import { createContext,  useContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducers/clientReducer"
import { useParams } from "react-router-dom";

const AppContext = createContext();


export const API__BASE = "https://travellxx.herokuapp.com";

const initialState = {
  isLoading: false,
  isError: false,
  home: [],
  slider: [], 
  details: [],
}

const AppProvider = ( { children } ) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const params = useParams();

  //homePAge
  const getData = async(url) => {
    dispatch({ type: "SET_LOADING" });

    try{
      const res = await axios.get(url + "/home");
      const home = await res.data;

      dispatch({ type: "MY_API_DATA", payload: home});
   
    } catch (error){
        dispatch({ type: "API_ERROR" });
    }
  };

  //details PAge
  const getDetailsData =  async (id) => {
    
    dispatch({ type: "SET_LOADING"});

      try{
        const res = await axios.get(API__BASE + "/details/" + id);
        const Detailsdata = await res.data; 

       dispatch({ type: 'DETAILS_DATA', payload: [Detailsdata]});
      
      } catch (error) {
        dispatch({ type: "API_ERROR"});
      }  ;
  };

  //slider Data
  const getsliderData = async (url) => {
    
    dispatch( { type: "IS_LOADING" } );
    
     try {

      const res = await axios.get(url + "/silder");  
      const slider = await res.data;  
      
      dispatch({ type: "SLIDER_DATA", payload: slider });
    } 
    catch (error) {
        dispatch( { type: "IS_ERROR" } );
    }
  };
  
  useEffect(() => {
 
    getData(API__BASE);
    getsliderData(API__BASE);
    getDetailsData(params.id)
  });
  
  return <AppContext.Provider value={{ ...state }}>
      {children}
    </AppContext.Provider>
}

//hooks

const useAboutContext = () => {

  return useContext(AppContext);

}

export { AppProvider , AppContext, useAboutContext };

