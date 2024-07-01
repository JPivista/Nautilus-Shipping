import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
import Link from 'next/link';


const sitemap = () => {
    return (
        <div>
            <Header />
            <Container fluid className="thankyou">
<Container className="thanktext">
                    Thank you for your interest in Nautilus Shipping.<br/>
We will get in touch with you as soon as possible.

                                </Container>
            </Container>

            <Footer />
        </div>
    )
}

export default sitemap

