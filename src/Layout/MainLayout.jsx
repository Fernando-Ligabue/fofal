// MainLayout.jsx
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen relative">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="flex-grow">
                <main className="mx-auto">
                    {children}
                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
