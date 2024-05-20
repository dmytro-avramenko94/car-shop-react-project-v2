export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <h1 className="footer__title">Need support? We're here to help.</h1>
                <p className="footer__working-time">Mon-Fri: 8AM-8PM AEDT, Sat-Sun: 9AM-6PM AEDT</p>
                <div className="footer__contacts">
                    <div className="footer__contact-item">
                        <img src="./images/footer/icon-1.svg" alt="" className="footer__contact-item-img" />
                        <div className="footer__contact-item-info">
                            <h3 className="footer__contact-item-title">Email</h3>
                            <p className="footer__contact-item-data">example@carma.com.au</p>
                        </div>
                    </div>
                    <div className="footer__contact-item">
                        <img src="./images/footer/icon-2.svg" alt="" className="footer__contact-item-img" />
                        <div className="footer__contact-item-info">
                            <h3 className="footer__contact-item-title">Call us</h3>
                            <p className="footer__contact-item-data">+12 345 678 901</p>
                        </div>
                    </div>
                    <div className="footer__contact-item">
                        <img src="./images/footer/icon-3.svg" alt="" className="footer__contact-item-img" />
                        <div className="footer__contact-item-info">
                            <h3 className="footer__contact-item-title">Text</h3>
                            <p className="footer__contact-item-data">0437 871 436</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}