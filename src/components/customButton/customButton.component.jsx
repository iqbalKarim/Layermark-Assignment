import './customButton.styles.css';

const Button = ({ children, ...otherProps }) => {
  return (
    <>
      <button className='loginButton' {...otherProps}>
        {children}
      </button>
    </>
  );
};

export default Button;
