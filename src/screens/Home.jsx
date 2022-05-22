import Carousel from '../components/carousel/Carousel';
import Main from '../components/main/Main';

const Home = () => {
    return (
        <>
            <Carousel />
            <section className="sect">
                <Main />
            </section>
        </>
    );
};

export default Home;
