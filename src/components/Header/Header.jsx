import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

    const [searchInputValue, setSearchInputValue] = useState('')

    const catchSearchInputValue = (event) => {
        setSearchInputValue(event.target.value)
    }

    return (
        <header className="header">
            <div className="header__container container">

                <img src="./images/header/carma-icon.svg" alt="" className="header__icon" />

                <form className="header__search-wrap">
                    <input
                        type="text"
                        className="header__search"
                        placeholder="Search makes, models..."
                        value={searchInputValue}
                        onChange={catchSearchInputValue} />

                    <Link to={`/find-your-car?searchInputValue=${searchInputValue}`} >
                        <img src="./images/header/search-btn.svg" alt="" className="header__search-icon" />
                    </Link>


                </form>
                <nav className="header__nav">
                    <NavLink to='/' className='header__nav-link nav-link-font'>Home</NavLink>
                    <NavLink to='/find-your-car' className='header__nav-link nav-link-font'>Find your car</NavLink>
                    {/* <NavLink to='/sell-or-trade-in' className='header__nav-link nav-link-font'>Sell or trade in</NavLink>
                    <NavLink to='/how-it-works' className='header__nav-link nav-link-font'>How it works</NavLink>
                    <NavLink to='/car-finance' className='header__nav-link nav-link-font'>Car finance</NavLink> */}
                </nav>
                <div className="header__menu">
                    <NavLink to='/favorite-cars'>
                        <img src="./images/header/favorite-list.svg" alt="" className="header__favorite-btn" />
                    </NavLink>
                    <img src="./images/header/menu-btn.svg" alt="" className="header__menu-btn" />
                </div>
            </div>
        </header>
    )
}