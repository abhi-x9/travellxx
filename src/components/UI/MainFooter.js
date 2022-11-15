import { NavLink } from 'react-router-dom';
import './MainFooter.css';
import { AiOutlineApple} from 'react-icons/ai'
import { RiGooglePlayFill } from 'react-icons/ri';

const MainFooter = () => {

return (

        <div className='footer-container'>
          <div className='footer-heading'>Travel With React🌺</div>
            <div className='footer-details'>
            <ul className='footer-items'>
              <li><NavLink to="#" className="nav-links"><h3>Download</h3></NavLink></li>
              <li><button className="ggl-btn">
               < RiGooglePlayFill size={30} /><span>Google Play</span></button></li>

              <li><button to="#" className="apl-btn">
              <AiOutlineApple size={30} /> <span>Apple store</span></button></li>
                
            </ul>
            <ul className='footer-items'>
              <li><NavLink to="#" className="nav-links"><h2>Follow us</h2></NavLink></li>
              <li><NavLink to="#" className="nav-links">Facebook</NavLink></li>
              <li><NavLink to="#" className="nav-links">Instagram</NavLink></li>
              <li><NavLink to="#" className="nav-links">Twitter</NavLink></li>
              <li><NavLink to="#" className="nav-links">You Tube</NavLink></li>
            </ul>
            <ul className='footer-items'>
              <li><NavLink to="#" className="nav-links"><h3>Contact Us</h3></NavLink></li>
              <li><NavLink to="#" className="nav-links">Contact form</NavLink></li>

            </ul>
            <ul className='footer-items'>
              <li><NavLink to="#" className="nav-links"><h3>Information</h3></NavLink></li>
              <li><NavLink to="#" className="nav-links">Cookies</NavLink></li>
              <li><NavLink to="#" className="nav-links">Policy</NavLink></li>
              <li><NavLink to="#" className="nav-links">Terms</NavLink></li>
            </ul>
            </div>
        </div>
      )

    }

    export default MainFooter;