const Header = () => {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><button className='btn-login'>Log In</button></li>
                </ul>
            </nav>
            <div className='header-content'>
                <h4>Try up to one month free</h4>
                <img className='logo' src="/img/logo.png" alt="Hulu" />
                <div className='header-one'>Watch thousands of TV shows and movies.</div>
                <div className='header-two'>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</div>
                <button className='btn btn-cta'>Start Your Free Trial</button>
                <div className='legal'>Free trial for new & eligible returning subscribers only.</div>
            </div>
        </header>
    )
}

export default Header