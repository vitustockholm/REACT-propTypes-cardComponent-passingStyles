import React from 'react';
import PropTypes from 'prop-types';
// import '../styles/style.css';
import '../styles/PrimaryCard.css';

const SecondaryCard = ({ text, background }) => {
  const { header, title, content } = text;
  return (
    <div
      className='card primaryCard second'
      style={{ border: `2px solid ${background}` }}
    >
      <div className='header'>
        <h4 style={{ color: 'black' }}>{header}</h4>
      </div>
      <div className='content' style={{ color: background }}>
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

SecondaryCard.propTypes = {
  text: PropTypes.exact({
    header: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  background: PropTypes.string,
};
export default SecondaryCard;
