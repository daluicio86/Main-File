import React from 'react';
import AboutV1 from '@/src/components/about/AboutV1';
import BannerV1 from '@/src/components/banner/BannerV1';
import BlogV1 from '@/src/components/blog/BlogV1';
import BrandV1 from '@/src/components/brand/BrandV1';
import FooterV1 from '@/src/components/footer/FooterV1';
import HeaderV1 from '@/src/components/header/HeaderV1';
import ProjectV1 from '@/src/components/project/ProjectV1';
import TestimonialV1 from '@/src/components/testimonial/TestimonialV1';
import CursosDiplomados from '@/src/components/contact/CursosDiplomados';
import InterestingCourse from '@/src/components/course/InterestingCourse';
import PartnerV1 from '@/src/components/patner/PartnerV1';
import ContactContentV1 from '@/src/components/contact/ContactContentV1';

export const metadata = {
    title: "Cursos y Diplomados en Ecuador Educación Continua Constructorespositivos"
}

const Home = () => {
    return (
        <>
            <HeaderV1 />
            <BannerV1 />
           {/* <FeatureV1 />*/}
            <AboutV1 />
            <CursosDiplomados />
            <InterestingCourse />
            <PartnerV1 />
            <ContactContentV1 />
            <BlogV1 />
            <BrandV1 />
            <FooterV1 />
        </>
    );
};

export default Home;