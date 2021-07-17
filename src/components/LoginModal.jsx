const LoginModal = ({showModal, setShowModal}) => {
    return (
        <div className={showModal === true ? 'login-modal show' : 'login-modal'}>
            <div className='modal-box'>
                <div className='modal-body'>
                    <h3>Log In</h3>
                    <form>
                        <div className='form-control'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' />
                        </div>
                        <div className='form-control'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' id='password' />
                        </div>
                        <p><a href='/'>Forgot your email or password</a></p>
                        <button className='btn btn-dark'>Log In</button>
                    </form>
                </div>
                <div className='modal-footer'>
                    <p>Don't have an account? <a href='/'>Start your free trial</a></p>
                </div>
                <img className='close' src='/img/close.svg' alt='close' onClick={() => setShowModal(false)} />
            </div>
        </div>
    )
}

export default LoginModal
