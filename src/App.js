import './App.css';
import Header from "./components/Header";
import ToDoForm from './components/ToDoForm';
import ToDos from './components/ToDos';

function App() {
  return (
    <div>
      <Header />
      <ToDoForm />
  
      <ToDos/>
    </div>
  );
}

export default App;
