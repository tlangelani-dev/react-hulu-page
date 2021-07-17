import '../sass/style.scss';
import Header from './Header';
import SubHeader from './SubHeader';
import Categories from './Categories';
import StreamLive from './StreamLive';
import LiveSports from './LiveSports';
import Footer from './Footer';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <SubHeader />
            <Categories />
            <StreamLive />
            <LiveSports />
            <Footer />
        </div>
    )
}

export default App
