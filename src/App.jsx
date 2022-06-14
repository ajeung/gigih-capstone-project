import './App.css';
import Footer from './components/header_footer/footer';
import Header from './components/header_footer/header';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <body>
        <Home/>
      </body>
      <Footer/>
    </div>
  );
}

export default App;