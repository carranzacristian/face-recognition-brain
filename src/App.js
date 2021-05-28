import './App.css';
import Rank from './components/rank/Rank';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import './App.css';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: 'repulse'
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
        <Navigation />
        <Rank />
        <Logo />
        <ImageLinkForm />

      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
