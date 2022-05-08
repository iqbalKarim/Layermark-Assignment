import LoginSection from '../../components/loginSection/loginSection.component';
import './home.styles.css';

const Home = () => {
  return (
    <div className='homeContainer'>
      <div className='loginSection'>
        <LoginSection />
      </div>
      <div className='coverImageSection'>
        <img
          className='coverImage'
          src={require('../../assets/Marching Fire.jpg')}
          alt=''
        />
      </div>
    </div>
  );
};

export default Home;
