import { Footer, Navbar } from '../components';
import ContactForm from '../sections/Contact';

const Contact = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <div className="relative mt-[150px]">
      <ContactForm />
      <div className="gradient-03 z-0" />
    </div>
    <Footer />
  </div>
);

export default Contact;
