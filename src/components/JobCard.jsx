function JobCard({job , deleteJob}) {
    return (
        <div className={`job-card status-${job.status}`}>
            <h3>{job.company}</h3>
            <p>{job.position}</p>
            <p>{job.date}</p>
            <p>{job.status}</p>
            <button onClick={()=>deleteJob(job.id)}>Delete</button>
        </div>
    );
}

export default JobCard;