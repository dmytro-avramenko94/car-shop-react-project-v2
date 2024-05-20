import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="header__container container">
                <NavLink to='/'>
                    <img src="./images/header/carma-icon.svg" alt="" className="header__icon" />
                </NavLink>
                <div className="header__search-wrap">
                    <input type="text" className="header__search" placeholder="Search makes, models..." />
                    <img src="./images/header/search-btn.svg" alt="" className="header__search-icon" />
                </div>
                <nav className="header__nav">
                    <NavLink to='/find-your-car' className='header__nav-link nav-link-font'>Find your car</NavLink>
                    <NavLink to='/sell-or-trade-in' className='header__nav-link nav-link-font'>Sell or trade in</NavLink>
                    <NavLink to='/how-it-works' className='header__nav-link nav-link-font'>How it works</NavLink>
                    <NavLink to='/car-finance' className='header__nav-link nav-link-font'>Car finance</NavLink>
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