"use client"
import React from 'react';
import { toast } from 'react-toastify';

const ContactFormV3 = () => {

    const handleMessage = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Thanks For Your Message!")
    }

    return (
        <>
            <form onSubmit={handleMessage}>
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="text" name="name" placeholder="Nombre" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="text" name="name" placeholder="Apellido" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="number" name="phone" className='no-arrows' placeholder="Teléfono/Celular" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="form-box">
                            <input type="email" name="email" placeholder="Correo-E" autoComplete='off' required />
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-box">
                            <textarea name="massage" id="massage" cols="30" rows="10" placeholder="Mensaje" autoComplete='off' required/>
                        </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                        <div className="form-box-button inner">
                            <button type="Submit">Enviar solicitud</button>
                        </div>
                    </div>
                </div>
            </form>
            <div id="status"/>
        </>
    );
};

export default ContactFormV3;