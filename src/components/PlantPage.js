import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({plants, onAddPlant, handleSearch, search}) {
  return (
    <main>
      <NewPlantForm 
      onAddPlant={onAddPlant}/>
      <Search 
      handleSearch={handleSearch} 
      search={search}/>
      <PlantList
      plants= {plants}
      handleSearch={handleSearch} 
      search={search}/>
    </main>
  );
}

export default PlantPage;
 