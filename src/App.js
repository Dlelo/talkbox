import { link } from 'fs';
import './App.css';
import AllChats from './components/AllChats';
import NavigationBar from './components/NavigationBar';

// two components will load on intial so they will be wrapped in empy quotes(fragment)

function App() {
  return (
    < >
    <NavigationBar/>
    <AllChats/>
    </>
  );
}

export default App;
