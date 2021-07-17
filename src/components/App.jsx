import Header from './Header';
import SubHeader from './SubHeader';
import Categories from './Categories';
import '../sass/style.scss';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <SubHeader />
            <Categories />
        </div>
    )
}

export default App
