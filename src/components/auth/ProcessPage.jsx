import Form from "./Form";


function ProcessPage({process}) {

    return (
        <>
        <div className="main-container">
            <div className="sub-container">
                <div className="container-process-name"><span>{process}</span></div>

                <Form process={process}/>
            </div>
        </div>
        </>

    )
}

export default ProcessPage;