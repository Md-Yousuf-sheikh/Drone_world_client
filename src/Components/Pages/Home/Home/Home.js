import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Header from '../../../Shared/Header/Header/Header';
import Banner from '../Banner/Banner';
import FeaturedCollection from '../FeaturdCollection/FeaturedCollection/FeaturedCollection';
import FeaturedServices from '../FeaturedServices/FeaturedServices/FeaturedServices';
import MostVersatile from '../MostVersatile/MostVersatile';
import OurClientsLove from '../OurClientsLove/OurClientsLove';
import ProductBrand from '../ProductBrand/ProductBrand';
import RecentPosts from '../RecentPosts/RecentPosts/RecentPosts';

const Home = () => {

    return (
        <div className='overflow-hidden'>
            <Header />
            <Banner />
            <ProductBrand />
            <MostVersatile />
            <OurClientsLove />
            <FeaturedCollection />
            <FeaturedServices />
            <RecentPosts />
            <Footer />
        </div>
    );
};

export default Home;