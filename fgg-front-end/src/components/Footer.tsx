import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaDiscord, FaYoutube } from 'react-icons/fa';
import './Footer.css';

interface FooterProps {
    clientLogo: string;
    yourLogo: string;
}

export const Footer: React.FC<FooterProps> = ({ clientLogo, yourLogo }) => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="logo-section">
                    <img src={yourLogo} alt="Moonwake" className="logo1"/>
                    <img src={clientLogo} alt="Frog God Games" className="logo" data-testid="frog-god-games"/>
                </div>

                <div className="links-section">
                    <a href={"https://www.froggodgames.com/"} target="_blank" rel="noopener noreferrer">Frog God Games</a>
                </div>

                <div className="social-section">
                    <a href="https://www.facebook.com/frog.god.games/" target="_blank" rel="noopener noreferrer" data-testid="facebook"><FaFacebook /></a>
                    <a href="https://www.instagram.com/froggodgames/" target="_blank" rel="noopener noreferrer" data-testid="instagram"><FaInstagram /></a>
                    <a href="https://twitter.com/FrogGodGames" target="_blank" rel="noopener noreferrer" data-testid="twitter"><FaTwitter /></a>
                    <a href="https://discord.com/invite/froggodgames" target="_blank" rel="noopener noreferrer" data-testid="discord"><FaDiscord /></a>
                    <a href="https://www.youtube.com/channel/UCybT0_3FM4iVfqE8b8-eFLg" target="_blank" rel="noopener noreferrer" data-testid="youtube"><FaYoutube /></a>
                </div>
            </div>
        </footer>
    );
};
