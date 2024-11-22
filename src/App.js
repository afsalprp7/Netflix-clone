import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/navbar/NavBar';
import Posts from './components/Posts/Posts';
import { Originals,action,horror,Romance,comedy} from './urls';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Posts url={Originals} title='Netflix Originals'/>
      <Posts url={action} title='Action Movies' isSmall/>
      <Posts url={horror} title='Horror Movies' isSmall/>
      <Posts url={Romance} title='Romance' isSmall/>
      <Posts url={comedy} title='Comedy' isSmall/>
      
    </div>
  );
}

export default App;
