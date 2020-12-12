import React from 'react';
import { Row } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import {
    FaInstagram, FaFacebook, FaLinkedin, FaTwitter,
} from 'react-icons/fa';

import './footer.styles.css';

const Footer = () => (
    <Row className="footer-div">
        <div className="icons-div">
            <a
                href="https://www.instagram.com/csivitu/"
                aria-label="Instagram"
                rel="noreferrer"
                target="_blank"
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-instagram',
                        size: '3rem',
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
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-facebook',
                        size: '3rem',
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
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-twitter',
                        size: '3rem',
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
            >
                <IconContext.Provider
                    value={{
                        color: 'white',
                        className: 'csi-linkedin',
                        size: '3rem',
                    }}
                >
                    <div>
                        <FaLinkedin />
                    </div>
                </IconContext.Provider>
            </a>
        </div>
    </Row>
);

export default Footer;
