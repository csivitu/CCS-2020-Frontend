import React from 'react';
import { IconContext } from 'react-icons';
import {
    FaInstagram, FaFacebook, FaLinkedin, FaTwitter,
} from 'react-icons/fa';

import './footer.styles.css';

const Footer = () => (
    <div className="d-flex justify-content-center footer-div">
        <div className="icons-div d-flex mb-3 my-auto">
            <a
                href="https://www.instagram.com/csivitu/"
                aria-label="Instagram"
                rel="noreferrer"
                target="_blank"
                className="mx-3"
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-instagram',
                        size: '1.5rem',
                    }}
                >
                    <div>
                        <FaInstagram />
                    </div>
                </IconContext.Provider>
            </a>
            <a
                href="https://www.facebook.com/csivitu/"
                aria-label="Facebook"
                rel="noreferrer"
                target="_blank"
                className="mx-3"
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-facebook',
                        size: '1.5rem',
                    }}
                >
                    <div>
                        <FaFacebook />
                    </div>
                </IconContext.Provider>
            </a>
            <a
                href="https://twitter.com/csivitu"
                aria-label="Twitter"
                rel="noreferrer"
                target="_blank"
                className="mx-3"
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-twitter',
                        size: '1.5rem',
                    }}
                >
                    <div>
                        <FaTwitter />
                    </div>
                </IconContext.Provider>
            </a>
            <a
                href="https://www.linkedin.com/company/computer-society-of-india-vit-student-chapter/"
                aria-label="LinkedIn"
                rel="noreferrer"
                target="_blank"
                className="mx-3"
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-linkedin',
                        size: '1.5rem',
                    }}
                >
                    <div>
                        <FaLinkedin />
                    </div>
                </IconContext.Provider>
            </a>
        </div>
    </div>
);

export default Footer;
