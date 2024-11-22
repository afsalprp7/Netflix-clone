import React,{useEffect,useState} from 'react'
import './NavBar.css'
function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { 
        setScrolled(true);
    } else {
        setScrolled(false);
    }
};

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
}, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="NetflixLogo" />
      <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="AvatarLogo" />
    </div>
  )
}

export default NavBar
