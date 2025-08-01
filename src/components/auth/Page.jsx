import Header from "../Header";
import ProcessPage from "./ProcessPage";
import '../../styles/authPage.css';


function Page({header, process}) {
    
    return (
        <>
            <Header header={header} process={process}/>
            <ProcessPage process={process} />
        </>
    )
}

export default Page;