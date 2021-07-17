const Header = ({setShowModal}) => {
    return (
        <header className='header'>
            <nav>
                <ul>
                    <li><button onClick={() => setShowModal(true)} className='btn-login'>Log In</button></li>
                </ul>
            </nav>
            <div className='header-content'>
                <h4>Try up to one month free</h4>
                <img className='logo' src="/img/logo.png" alt="Hulu" />
                <div className='legal-text created-by'>created by <strong>Tlangelani Mboweni</strong> for demo purposes</div>
                <div className='header-one'>Watch thousands of TV shows and movies.</div>
                <div className='header-two'>HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.</div>
                <button className='btn btn-cta'>Start Your Free Trial</button>
                <div className='legal-text'>Free trial for new & eligible returning subscribers only.</div>
            </div>
        </header>
    )
}

export default Header
