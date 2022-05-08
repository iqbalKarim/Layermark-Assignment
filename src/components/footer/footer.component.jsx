import './footer.styles.css';

const Footer = () => {
  return (
    <div className='footer'>
      <img width='100px' src={require('../../assets/water.png')} alt='' />
      <hr />
      <h3>
        <span className='bold'>LAYER</span>NOTE
      </h3>
    </div>
  );
};

export default Footer;
