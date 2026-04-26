import JobCard from './JobCard';

function JobList({jobs , deleteJob}) {
    return(
        <div>
            <h2>Job Applications</h2>
            <div className="board">
            {jobs.map(job => (
                <JobCard key={job.id} job={job} deleteJob={deleteJob}/>
            ))}
            </div>
        </div>
    )
}

export default JobList;