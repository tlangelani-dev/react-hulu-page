import '../sass/style.scss';
import Header from './Header';
import SubHeader from './SubHeader';
import Categories from './Categories';
import StreamLive from './StreamLive';
import LiveSports from './LiveSports';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <SubHeader />
            <Categories />
            <StreamLive />
            <LiveSports />
        </div>
    )
}

export default App
