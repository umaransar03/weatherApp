import Search from "./screens/Search/Search";
import './App.css';


function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }

  return (
    <div className="container">
      <div className="search">
        <Search onSearchChange={handleOnSearchChange} />
      </div>
    </div>
  );
}

export default App;
