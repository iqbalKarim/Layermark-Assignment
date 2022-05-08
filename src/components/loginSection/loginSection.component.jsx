import './loginSection.styles.css';

const LoginSection = () => {
  return (
    <div className='loginSectionContainer'>
      <h1>VMS</h1>
      <h3>VALVE MANAGEMENT SYSTEM</h3>
      <hr />
      <h2>QA/QC</h2>
      <form>
        <div className='formField'>
          <label htmlFor='username'>Username</label>
          <input className='input' type='text' name='username' id='username' />
        </div>
        <div className='formField'>
          <label htmlFor='username'>Password</label>

          <input
            className='input'
            type='password'
            name='password'
            id='password'
          />
        </div>
        <div className='formField'>
          <button className='loginButton' type='submit'>
            LOGIN
          </button>
        </div>
        <div className='footer'>
          <img
            className='waterImage'
            src={require('../../assets/water.png')}
            alt=''
          />
          <hr />
          <h3>
            <span className='bold'>LAYER</span>NOTE
          </h3>
        </div>
      </form>
    </div>
  );
};

export default LoginSection;
