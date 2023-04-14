import Search from "./screens/Search/Search";
import './App.css';
import CurrentWeather from "./screens/currentWeather/CurrentWeather";


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <div className="search">
        <Search onSearchChange={handleOnSearchChange} />
        <CurrentWeather/>
      </div>
    </div>
  );
}

export default App;
