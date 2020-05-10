import React from 'react';
import {Homepage} from './components/homepage';
// import './App.css';
import {Movie} from './components/movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import {RateContextProvider} from './context/rateContext';
import {RatersAmountContesxtProvider} from './context/RatersAmountContesxtProvider';
import {AppRouters} from './routers/AppRouters';
import Container from 'react-bootstrap/Container'
import './styles/styles.scss';


//     <RateContext>   </RateContext>      <Homepage/>
//      <Movie/>

function App() {
  return (
    <div style={{
      backgroundColor: 'rgb(0, 0, 0)',
      minHeight:'100vh'
    }}>>
    <Container style={{
      backgroundColor: 'rgb(75, 50, 50)',
      minHeight:'100vh'
    }}>



    <RatersAmountContesxtProvider>
<RateContextProvider>
<AppRouters>
    <div className="App">
      <header className="App-header">

      </header>
    </div>
    </AppRouters>

    </RateContextProvider>
    </RatersAmountContesxtProvider>
    </Container>
    </div>
  );
}

export default App;
