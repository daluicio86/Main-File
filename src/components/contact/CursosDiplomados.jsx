"use client"
import React from 'react';
import ContactFormV2 from '../form/ContactFormV2';
import LocationMaps from '../utilities/LocationMaps';

const CursosDiplomados = () => {
    return (
        <>
            <div className="brand-area">
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-lg-2 col-md-6">
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box">
                                <div className="contact-icon">
                                    <i className="bi bi-journal-text text-white" />
                                </div>
                                <div className="contact-content">
                                    <h4 className='text-white'>Cursos</h4>
                                    <span><a href="/"  className='text-white'>Ver todos</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-single-box two">
                                <div className="contact-icon">
                                    <i className="bi bi-patch-check text-white"/>
                                </div>
                                <div className="contact-content">
                                    <h4 className='text-white'>Diplomados</h4>
                                    <span><a href="/" className='text-white'>Ver todos</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CursosDiplomados;