import '../sass/style.scss';
import Header from './Header';
import SubHeader from './SubHeader';
import Categories from './Categories';
import StreamLive from './StreamLive';
import LiveSports from './LiveSports';
import Footer from './Footer';
import LoginModal from './LoginModal';
import { useState } from 'react';

const App = () => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className='app'>
            <Header setShowModal={setShowModal} />
            <SubHeader />
            <Categories />
            <StreamLive />
            <LiveSports />
            <Footer />
            <LoginModal showModal={showModal} setShowModal={setShowModal} />
        </div>
    )
}

export default App
