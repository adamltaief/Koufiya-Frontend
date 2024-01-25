
import React ,{Fragment} from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/LOGO.png'
let hr={
        void:'#',
        section8:'#section8',
        connecter:'http://127.0.0.1:5500/se-connecter/se-connecter.html.html',
        section4:"#section4",
        section3:'#section3',
        section7:'#section7',
        svgee08:'#svg-ee08',
        svg5013:'#svg-5013',
        Sectionup:'#Sectionup',
        }
function Navbar() {
    return (
        <Fragment>
            <nav style={{backgroundColor: '#4F4F4F', height: '60px', margin: 0, padding: 0,display: 'flex', alignItems: 'center', justifyContent: 'space-between',position: 'Fixed',right :'0', top: '0', width: '100%', zIndex: '1'}}>
                <div style={{listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center'}}>
                    <img href={hr.void} src={logo} alt="Your Logo" style={{height: '100px',marginLeft: '20px'}} />
                    <li style={{marginLeft: '10px'}}><Link to={'/'} style={{textDecoration: 'none',fontSize: '25px',color:'white',fontFamily:'Impact'}}>Koufiya</Link></li>
                </div>
                    <div>
                        <i className="bi bi-list"></i>
                    </div>
                <ul style={{listStyleType: 'none', margin: 0, padding: 0, display: 'flex', alignItems: 'center'}}>
                    <li style={{marginRight: '25px'}}><a href={hr.section3} style={{textDecoration: 'none',fontSize: '14px',color:'white',fontFamily:'Arial', fontWeight: 'bold' }}>About us</a></li>
                    <li style={{marginRight: '25px'}}><a href={hr.void} style={{textDecoration: 'none',fontSize: '14px',color:'white',fontFamily:'Arial', fontWeight: 'bold' }}>Products</a></li>
                    <li style={{marginRight: '25px'}}><Link to={'/palestinian-culture'} style={{textDecoration: 'none',fontSize: '14px',color:'white',fontFamily:'Arial', fontWeight: 'bold' }}>Palestinian culture </Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/gallery'} style={{textDecoration: 'none',fontSize: '14px',color:'white',fontFamily:'Arial', fontWeight: 'bold' }}>Gallery</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/donate-for-gaza'} style={{textDecoration: 'none',fontSize: '14px',color:'white',fontFamily:'Arial', fontWeight: 'bold' }}>Donate for GAZA</Link></li>
                    <li style={{marginRight: '60px'}}><a href={hr.section8} style={{textDecoration: 'none',fontSize: '14px',color:'white',fontFamily:'Arial', fontWeight: 'bold' }}>Contact us</a></li>
                    <li style={{marginRight: '25px'}}><Link to={'/sign-up'} style={{textDecoration: 'none',fontSize: '16px',color:'white',fontFamily:'Arial', fontWeight: 'bold' }}>Sign up</Link></li>
                    <li style={{marginRight: '25px'}}><Link to={'/sign-in'} style={{textDecoration: 'none',fontSize: '16px',fontWeight: 'bold',color:'white',fontFamily:'Arial'}}>Sign in</Link></li>
                </ul>
            </nav>
    </Fragment>

    )
}

export default Navbar;