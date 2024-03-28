import Banner from "./Main/Banner.jsx";
import Books from "./Main/Books.jsx";
import {Helmet} from "react-helmet-async";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Book Vibe</title>
            </Helmet>
            <Banner/>
            <Books/>
        </>
    );
};

export default Home;
