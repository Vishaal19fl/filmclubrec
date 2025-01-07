import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import ContactForm from '../sections/Contact';
import OurTeam from '../sections/Team';

const Home = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div>
      <Hero />
    </div>
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <OurTeam />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <div className="relative">
      <ContactForm />
    </div>
    <Footer />
  </div>
);

export default Home;
