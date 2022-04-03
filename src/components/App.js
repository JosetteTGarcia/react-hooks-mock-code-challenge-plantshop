import React, {useState, useEffect} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] =useState("")
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants))
  }, [])

  function handleAddingPlant(newPlant){
    setPlants([...plants, newPlant]);

  }

  const searchedPlant = plants.filter((plant) =>
  plant.name.toLowerCase().includes(search.toLowerCase())
)
  
  return (
    <div className="app">
      <Header />
      <PlantPage 
      plants={searchedPlant}
      onAddPlant={handleAddingPlant}
      handleSearch={setSearch}
      />
    </div>
  );
}

export default App;
 