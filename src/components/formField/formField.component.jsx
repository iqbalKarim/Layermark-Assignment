import './formField.styles.css';

const FormField = ({ label, ...otherProps }) => {
  return (
    <div className='formField'>
      <label>{label}</label>
      <input className='input' {...otherProps} />
    </div>
  );
};

export default FormField;
