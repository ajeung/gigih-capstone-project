import './App.css';
import Footer from './components/header_footer/footer';
import Header from './components/header_footer/header';
// import DataUser from './pages/DataUser';
import Home from './pages/Home';
// import EditProfile from './pages/EditProfile';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <body>
        <Home/>
        {/* <DataUser /> */}
        {/* <EditProfile /> */}
      </body>
      <Footer/>
    </div>
  );
}

export default App;