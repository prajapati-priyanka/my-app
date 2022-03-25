import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const Footer = ()=>{
    return (
        <footer class="footer-content">
            <h4 class="lg-text text-center">Made With ❤️ By Priyanka Prajapati</h4>
            <p class="text-center md-text">You can connect with me on:</p>
            <div class="footer-links header-links x-lg-text">
                <ul>
                    <li><a href="https://github.com/prajapati-priyanka"> <BsLinkedin /></a></li>
                    <li> <a href="https://www.linkedin.com/in/priyanka-prajapati-853098146/"> <BsGithub /> </a></li>
                </ul>
            </div>
        </footer>
    )
}


export {Footer};
