import React from "react";
import Cocktail from "./Cocktail.jsx";
import Loading from "./Loading.jsx";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const {cocktails, loading} = useGlobalContext()
  if(loading){
    return <Loading />
  }
  if(cocktails.length < 1){
    return (
      <h2 className="section-title">
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className="section">
      <h2 className="section-title">
        Coctails
      </h2>
      <div className="cocktails-center">
        {cocktails.map(cocktail => {
          return <Cocktail key={cocktail.id} {...cocktail} />
        })}
      </div>
    </section>
  );
};

export default CocktailList;
