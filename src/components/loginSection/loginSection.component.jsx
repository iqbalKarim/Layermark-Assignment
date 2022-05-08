import Footer from '../footer/footer.component';
import Header from '../header/header.component';
import LoginForm from '../loginForm/loginForm.component';
import './loginSection.styles.css';

const LoginSection = () => {
  return (
    <div className='loginSectionContainer'>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  );
};

export default LoginSection;
