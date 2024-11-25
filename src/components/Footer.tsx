
//Image Imports
import faceBook from '../assets/icons/facebook.svg'
import gitHub from '../assets/icons/github.svg'
import instaGram from '../assets/icons/instagram.svg'
import linkedIn from '../assets/icons/linkedin.svg'

// Image declarations
const fbImage = faceBook
const igImage = instaGram;
const ghImage = gitHub;
const linkedInImage = linkedIn;


// Links as variables
const fb = "https://www.facebook.com/nichholcomb/"
const ig = "https://www.instagram.com/nicklewithapickle/"
const gh = "https://github.com/T4nGe4nT"
const li = "www.linkedin.com/in/nich-holcomb-53b986318"


import "./styles/footer.css"


function Footer() {
    return (
        <>
            <div className="footer-container">
                <a href={fb} target="_blank" rel="noopener noreferrer"><img src={fbImage} alt="Facebook Icon"/></a>
                <a href={ig} target="_blank" rel="noopener noreferrer"><img src={igImage} alt="Instagram Icon"/></a>
                <a href={gh} target="_blank" rel="noopener noreferrer"><img src={ghImage} alt="Git Hub Icon"/></a>
                <a href={li} target="_blank" rel="noopener noreferrer"><img src={linkedInImage} alt="Linked In Image"/></a>
            </div>
        </>
    )
}

export default Footer;