import Logo from './assets/logo.jpg'
import Menu from './assets/menu.svg'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Section1 from './assets/bg2.jpg';
import Section2 from './assets/bg4.jpg';
import Section3 from './assets/bg3.jpg';
import Section4 from './assets/bg4.webp';
import Section5 from './assets/bg6.webp';

function App() {
  return (
    <div className="App">

          <Header logo={Logo}  menu={Menu}/>
          <Main heading="CREW-6 MISSION" img={Section1}/>
          <Main heading="STARLINK MISSION" img={Section2}/>
          <Main heading="UPCOMING LAUNCH STARLINK MISSION" img={Section3}/>
          <Main heading="STARSHIP UPDATE" img={Section4}/>
          <Main heading="STARSHIP SELECTED BY NASA TO SUPPORT SUSTAINED LUNAR EXPLORATION" img={Section5}/>
          
          <div className="footer">
            <Footer />
          </div>
    </div>
  );
}

export default App;