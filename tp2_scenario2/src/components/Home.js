
function Home() {
    return (
            <div>
                <div className='container'>
                    <div className="hero-container">
                    <img src={require('./../images/hero.jpg')} alt="Produits"/>
                        <div className="hero-txt">
                            <h1>Comparez nos prix imbattables!</h1>
                        </div>
                    </div>
                </div>
                <div className="statement">
                    <div className="container">
                        <div className="statement-container">
                            <div className="statement-block">
                                <div className="statement-title">
                                    <h2>Gamme exhaustive de produits</h2>
                                </div>
                                <div className="statement-subtitle">
                                    <h3>Notre plateforme est spécialement conçue pour comprendre vos besoins.</h3>
                                </div>
                            </div>
                            <div className="statement-block">
                                <div className="statement-title">
                                    <h2>Soyez en confiance</h2>
                                </div>
                                <div className="statement-subtitle">
                                    <h3>Les produits offerts sont choisis soigneusement et garantis par la
                                    protection PayPal. </h3>
                                </div>
                            </div>
                            <div className="statement-block">
                                <div className="statement-title">
                                    <h2>Plus de 30 ans en affaires</h2>
                                </div>
                                <div className="statement-subtitle">
                                    <h3>Distribution Maisonneuve est un pionnier du e-commerce au Québec.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}

export default Home;
