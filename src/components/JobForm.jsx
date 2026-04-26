import {useState} from "react";

function JobForm({onAddJob}){
    const[companyName, setCompanyName] = useState("");
    const[position, setPosition] = useState("");
    const[date, setDate] = useState("");
    const[status, setStatus] = useState("applied");

    function handleSubmit(){
        if(companyName === "" || position === "" || position === ""){
            alert("Please enter valid companyName!");
            return;
        }
        const newJob = {
            id: Date.now(),
            company: companyName,
            position: position,
            date: date,
            status: status,
        };
        onAddJob(newJob);
        setCompanyName("");
        setPosition("");
        setDate("");
        setStatus("applied");
    }

    return(
        <div className="job-form">
            <input className="companyNameInput" type="text" placeholder="Name of the Company"
                   value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
            <input className="positionInput" type="text" placeholder="Position"
                   value={position} onChange={(e) => setPosition(e.target.value)}/>
            <input className="appliedDateInput" type="date" placeholder="Date of the AppliedDate"
                   value={date} onChange={(e) => setDate(e.target.value)}/>
            <select className="status"
                    value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
            </select>
            <button className="submitButton" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default  JobForm ;

