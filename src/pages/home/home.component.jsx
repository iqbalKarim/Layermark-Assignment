import LoginSection from '../../components/loginSection/loginSection.component';
import './home.styles.css';

const Login = () => {
  return (
    <div className='loginContainer'>
      <div className='login'>
        <div className='loginSection'>
          <LoginSection />
        </div>
        <div className='coverImageSection'>
          <img
            className='coverImage'
            src={require('../../assets/hero.png')}
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
