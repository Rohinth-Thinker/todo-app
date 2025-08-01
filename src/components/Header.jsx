import { useNavigate } from "react-router-dom";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { IoMdArrowRoundBack } from "react-icons/io";


function Header({header, switchPage, setSwitchPage, process = 'HOME'}) {

    const navigate = useNavigate();

    function displayIcon(process, switchPage, setSwitchPage, navigate) {

        if (process === 'HOME') {
            if (switchPage) {
                return {
                    img : <RiLogoutCircleRLine className="header-icon"/>,
                    onClick : () => {navigate('/signup')}
                }
            } 
                    
            return {
                img : <IoMdArrowRoundBack className="header-icon" />,
                onClick : () => setSwitchPage(true),
            }
    
        }
        return false;
    }

    function displayButton(process, switchPage, setSwitchPage, navigate) {
        
        const result = displayIcon(process, switchPage, setSwitchPage, navigate);
        if (result) {
            return <button onClick={result.onClick} className="header-icon-button pt">{result.img}</button>
        }
        return '';
    }

    return (
        <>
            <div className="header-container">
                <h3 className="header-text">{header}</h3>

                <div className="header-icon-container">
                    {displayButton(process, switchPage, setSwitchPage, navigate)}
                </div>
            </div>
        </>
    )
}


export default Header;