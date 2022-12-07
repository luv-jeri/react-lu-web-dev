import React from 'react';
import './Footer.css';

export default function Footer() {
  console.log('Footer Rendered');
  return (
    <div className='footer_container'>
      <div className='left_footer'>
        <div className='footer_title'>Footer</div>
        <div className='footer_text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl
        </div>
      </div>
      <div className='right_footer'>
        <img />
      </div>
    </div>
  );
}
