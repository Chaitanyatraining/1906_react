import ClassComp from "./ClassComp";
import FuncComp from "./FuncComp";

const App = () => {
  const name = 'sachin';

  const details = {
    id:4,
    age:'sulurpet'
  };

  return (
    <section>
      <p>This is para</p>
      <h1>This is heading</h1>
      <FuncComp title={name} courseName='Reactjs' details={details} />
      <ClassComp />
    </section>
  )
}

export default App;