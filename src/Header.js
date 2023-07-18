import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Header() {

  const [{ basket, user }, dispatch] = useStateValue(); 

  return (
    <nav className='header'>
        <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon_logo"
        />
        </Link>
        <div className="header__search">

        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
        
        </div>


        <div className="header__nav">
        <Link to={!user && '/login'}>
        
          <div onClick={handleAuthenticaton} className="header__option"> 
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            {<span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span> }
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        
        <Link to='https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?gclid=Cj0KCQjw8NilBhDOARIsAHzpbLDvTaVzR7ei7qcZ0rPpPhEET2croPdykfa70r1Mwtfsa2LaEVHhUP8aAgHOEALw_wcB&mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_1007820_x__adext__ptid_kwd-303629226711' target='_blank'>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        </Link>
        

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        </div>

        
    </nav>
  )
}

export default Header