import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Slide from './Components/Slide/Slide';
import UseContext from './useContext/UseContext';
import {ArrContext, userData} from './useContext/context';

function App() {
  return (
    <div className="App">
      {/* <ArrContext.Provider value={userData}>
        <UseContext />
      </ArrContext.Provider> */}
     <Header/>
     <Slide/>
     <Main/>
     <Footer/>
    </div>
  );
}

export default App;
