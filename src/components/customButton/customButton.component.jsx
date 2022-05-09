import './customButton.styles.css';

const Button = ({ children, disabled, ...otherProps }) => {
  return (
    <>
      <button
        className={`loginButton ${disabled ? 'disabled' : ''} `}
        {...otherProps}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
