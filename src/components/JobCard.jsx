function JobCard({job , deleteJob}) {
    return (
        <div className={`job-card status-${job.status}`}>
            <h3>{job.company}</h3>
            <p>{job.position}</p>
            <p>{job.date}</p>
            <p>{job.status}</p>
            <button onClick={()=>deleteJob(job.id)}>Delete</button>
            <select
                value={job.status}
                onChange={(e) => updateJob(job.id, e.target.value)}
            >
                <option value="applied">Applied</option>
                <option value="interview">Interview</option>
                <option value="rejected">Rejected</option>
                <option value="offer">Offer</option>
            </select>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
        </div>
    );
}

export default JobCard;