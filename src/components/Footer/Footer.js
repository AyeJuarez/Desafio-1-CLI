import React, { Component } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./Footer.scss";

class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="social">
                    <a
                        className="social-github"
                        href="https://github.com/AyeJuarez"
                        target="blank"
                    >
                        <GitHubIcon
                            color="secondary"
                            fontSize="large"
                            className="social-icons"
                        />
                    </a>
                    <a
                        className="social-linkedin"
                        href="https://www.linkedin.com/feed/"
                        target="blank"
                    >
                        <LinkedInIcon
                            color="secondary"
                            fontSize="large"
                            className="social-icons"
                        />
                    </a>
                </div>

                <div className="copyright">
                    © 2022 Copyright Ayelen Juarez - CoderHouse
                </div>
            </footer>
        );
    }
}

export default Footer;
