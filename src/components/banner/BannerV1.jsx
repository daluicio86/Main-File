import Image from 'next/image';
import React from 'react';
import sliderThumb from '@/./public/assets/images/slider/slider-thumb.png'
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const BannerV1 = () => {
    return (
        <>
            <div className="slider-area d-flex align-items-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="slider-content animate__animated animate__slideInLeft">

                                <div className="slider-main-title">
                                    <h1 className='shadow-text'>Cursos y Diplomados</h1>
                                </div>
                                <div className="slider-sub-title">
                                    <h4 className='shadow-text'>Modalidad Virtual o Precencial</h4>
                                </div>
                                <div className="slider-sub-title">
                                    <h4 className='shadow-text'>Contamos con aliados estratégicos para el sector de capacitación y formación</h4>
                                </div>
                                <div className="eulding-btn">
                                    <Link href="#" onClick={handleSmoothScroll} className='mr-5'>Nuestros Cursos <i className="bi bi-arrow-up-right-circle-fill"/></Link>
                                    <Link href="#" onClick={handleSmoothScroll}> Ver Diplomados <i className="bi bi-arrow-up-right-circle-fill"/></Link>
                                </div>
                            </div>
                        </div>
                       {/* <div className="col-lg-6 col-md-6">
                            <div className="slider-thumb animate__animated animate__slideInRight">
                                <Image src={sliderThumb} alt="slider-thumb" />
                            </div>
                        </div>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV1;