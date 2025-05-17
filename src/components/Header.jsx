import { useEffect, useState } from 'react';
import $ from 'jquery';
import logo from '../assets/images/logo.png';
import closeButton from '../assets/images/closebutton.svg';
import openButton from '../assets/images/hamburger.svg';

export const Header = () => {
   const [open,setOpen] = useState(false);
    useEffect(() => {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const headerHeight = $('.header-wrap').outerHeight() || 0;
    const target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top - headerHeight
      }, 1000);
      document.querySelector('body').style.overflow = "unset";
      setOpen(false);
    }
  });
  return () => {
    $('a[href^="#"]').off('click');
  };
}, []);
  const handleOpen=()=>{
      document.querySelector('body').style.overflow="hidden";
      setOpen(true);
  }

  const handleClose=()=>{
      document.querySelector('body').style.overflow="unset";
      setOpen(false);
  }
  return (
    <div className='header-wrap'>
        <header>
        <div className='container'>
            <div className="header-content">
                <div className="logo">
                    <img src={logo} alt="logo" width={'190'} height={'56'} />
                </div>
                <div className='menu-button'>
                    <button onClick={handleOpen}>
                     <img src={openButton} alt="open" width={'30'} height={'30'} />
                    </button>
                </div>
                <div className={`links ${open?'show':''}`}>
                    <div className='close-button'>
                        <button onClick={handleClose}>
                        <img src={closeButton} alt="close" width={'30'} height={'30'} />
                        </button>
                    </div>
                    <nav>
                      <ul>
                       <li>
                        <a href="#home">Home</a>
                       </li>
                       <li>
                        <a href="#about">About</a>
                       </li>
                       <li>
                        <a href="#skills">Skills</a>
                       </li>
                       <li>
                        <a href="#projects">Projects</a>
                       </li>
                       <li>
                        <a href="#experience">Experience</a>
                       </li>
                       <li>
                        <a href="#contact">Contact</a>
                       </li>
                      </ul>
                    </nav>
                </div>
            </div>
        </div>
        </header>
    </div>
  )
}
