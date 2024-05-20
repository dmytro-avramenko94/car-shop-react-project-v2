import UniqueBodyTabs from "../components/Tabs/bodyTabs";
import UniquePriceTabs from "../components/Tabs/priceTabs";
import Advantages from "../components/Advantages/Advantages";
import NewCars from "../components/NewCars/newCars";
import { Link } from "react-router-dom";
import { Cars } from '../data/cars';

export default function Home() {


    return (
        <>
            <section className="hero">
                <div className="hero__container ">
                    <div className="hero__main-info">
                        <h1 className="hero__title hero-title-font">Find the car that's
                            searching for you.</h1>
                        <div className="hero__search-wrap">
                            <input type="text" className="hero__search-inp" placeholder="Search makes, models, body..." />
                            <img src="./images/home-hero/search-icon.svg" alt="search-icon" className="hero__search-icon" />
                        </div>
                        <p className="hero__input-sub-text hero-inp-sub-text">or</p>
                        <Link to="/find-your-car" className="hero__show-all-btn hero-btn-text">Browse all ({Cars.length}) cars</Link>
                    </div>
                    <div className="hero__advantages">
                        <div className="hero__advantages-item">
                            <img src="./images/home-hero/money-back-icon.svg" alt="" className="hero__advantages-icon" />
                            <p className="hero__advantages-description hero-advantages-text">7-day money-back promise.
                                Better than a test drive.</p>
                        </div>
                        <div className="hero__advantages-item">
                            <img src="./images/home-hero/warranty-icon.svg" alt="" className="hero__advantages-icon" />
                            <p className="hero__advantages-description hero-advantages-text">3 month warranty.
                                Relax, your car is covered.</p>
                        </div>
                        <div className="hero__advantages-item">
                            <img src="./images/home-hero/checklist-icon.svg" alt="" className="hero__advantages-icon" />
                            <p className="hero__advantages-description hero-advantages-text">Carma Checklist certified.
                                Examined by experts.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="by-size">
                <div className="by-size__container container">
                    <h2 className="by-size__title home-section-title-font">Looking for a specific size?</h2>
                    <UniqueBodyTabs />
                </div>
            </section>

            <section className="by-price">
                <div className="by-price__container container">
                    <h2 className="by-price__title home-section-title-font">Looking for a perfect match for your budget?</h2>
                    <UniquePriceTabs />
                </div>
            </section>

            <section className="advantages">
                <div className="advantages__container container">
                    <Advantages />
                </div>
            </section>

            <section className="new-cars">
                <div className="new-cars__container container">
                    <NewCars />
                </div>
            </section>

            <section className="partners">
                <div className="partners__container container">
                    <h2 className="partners__title advantages-title-font">Our trusted partners</h2>
                    <div className="partners__icons-wrap">
                        <img src="./images/partners/partner-1.png" alt="" className="partners__icon" />
                        <img src="./images/partners/partner-2.png" alt="" className="partners__icon" />
                        <img src="./images/partners/partner-3.png" alt="" className="partners__icon" />
                        <img src="./images/partners/partner-4.png" alt="" className="partners__icon" />
                        <img src="./images/partners/partner-5.png" alt="" className="partners__icon" />
                    </div>
                </div>
            </section>

            <section className="car-finance">
                <div className="car-finance__container container">

                    <div className="car-finance__main-content">
                        <div className="car-finance__information">
                            <h2 className="car-finance__title car-finance-title">Our expert team
                                makes car finance easier</h2>
                            <p className="car-finance__description car-finance-descrition">Finance your car through Carma’s carefully
                                selected panel of financiers. Every
                                application is assigned a Carma finance
                                consultant, who will help you throughout the
                                whole process. Plus, you can contact us any
                                time if you have a question or need help –
                                even before you’ve submitted your
                                application.</p>
                            <Link to="/car-finance" className="car-finance__page-link home-car-finance-link-font">Find out more</Link>
                        </div>
                        <img src="./images/home-car-finance/main-img.jpg" alt="" className="car-finance__img" />
                    </div>

                    <div className="car-finance__benefits">
                        <div className="car-finance__benefits-item">
                            <img src="./images/home-car-finance/benefit-1.svg" alt="" className="car-finance__benefits-item-img" />
                            <div className="car-finance__benefits-item-description">
                                <h3 className="car-finance__benefits-item-title">Competitive rates</h3>
                                <p className="car-finance__benefits-item-text">Competitive rates across a carefully
                                    selected panel of financiers offering flexible
                                    repayment options. No hassle, no haggle.</p>
                            </div>
                        </div>
                        <div className="car-finance__benefits-item">
                            <img src="./images/home-car-finance/benefit-2.svg" alt="" className="car-finance__benefits-item-img" />
                            <div className="car-finance__benefits-item-description">
                                <h3 className="car-finance__benefits-item-title">Quote and sign, all online</h3>
                                <p className="car-finance__benefits-item-text">Obtain a personalised quote for your
                                    selected car. Sign your finance paperwork
                                    from the convenience of your own home.</p>
                            </div>
                        </div>
                        <div className="car-finance__benefits-item">
                            <img src="./images/home-car-finance/benefit-3.svg" alt="" className="car-finance__benefits-item-img" />
                            <div className="car-finance__benefits-item-description">
                                <h3 className="car-finance__benefits-item-title">Get on the road faster</h3>
                                <p className="car-finance__benefits-item-text">Submit your application in approximately 20
                                    minutes. Decisions typically happen the
                                    same or next business day.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="next-car">
                <div className="next-car__container container">
                    <img src="./images/home-next-car/cars.png" alt="" className="next-car__img" />
                    <div className="next-car__main-info">
                        <h2 className="next-car__title">Which one's your next car?</h2>
                        <Link to="/find-your-car" className="next-car__btn-show-all show-all-btn-font">View all ({Cars.length}) cars</Link>
                    </div>
                </div>
            </section>
        </>
    )
}