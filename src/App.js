import './App.css';
import AboutMe from './AboutMe';
import Picture from './Picture/jobelle_profile.jpg'
import Likes from './Likes';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h2 className='me'>ABOUT ME</h2>
      </div>
      <div>
        <img src={Picture} width={250} height={250} alt='profile'></img>
      </div>
      <AboutMe/>
      <div className='title_2'>
        <h2 className='me_2'>Likes</h2>
      </div>
      <Likes/>
    </div>
  );
}

export default App;
