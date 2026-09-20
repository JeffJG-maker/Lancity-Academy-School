import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Programs from "../components/Programs";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Header />

            <main>
                <Hero />
                <Features />
                <About />
                <Programs />
                <Stats />
                <Testimonials />
            </main>

            <Footer />
        </>
    );
}

export default Home;