import Content from "../../components/content";
import CardList from "../../components/home-copomnents/cards-list";
import HeroSection from "../../components/home-copomnents/hero-section";
import { content1 } from "./data";

const HomePage = () => {

    return (
        <>
            <HeroSection />
            <CardList />
            <Content {...content1} />
        </>
    )
};

export default HomePage;