import ClassComp from "./ClassComp";
import Counter from "./Counter";
import FuncComp from "./FuncComp";
import './App.css'
import StylingsComp from "./Components/Stylings/StylingsComp";
import ListsandKeys from "./Components/ListsandKeys";
import UsersList from "./Components/UsersList";
import Pagination from "./Components/Pagination";
import Navbar from "./Components/Navbar";
import Routing from "./Components/Routing/Routing";


const App = () => {
  const name = 'sachin';

  const details = {
    id:4,
    age:'sulurpet'
  };

  return (
    <section className="App">
      <Navbar />
      <Routing />

      
      {/* <UsersList /> */}
      {/* <Pagination /> */}
      {/* <ListsandKeys /> */}
      {/* <StylingsComp />
      <Counter /> */}
      {/* <FuncComp title={name} courseName='Reactjs' details={details} />
      <ClassComp title={name} courseName='Reactjs' details={details} /> */}
    </section>
  )
}

export default App;