
//Component Imports
import "./styles/hamburger.css";

function Hamburger({ open }: { open: boolean }) {
    return (
        <div className={`hamburger-icon ${open ? "open" : ""}`}>
            <span />
            <span />
            <span />
        </div>
    );
}

export default Hamburger;
