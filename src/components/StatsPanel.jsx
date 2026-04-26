function StatsPanel({jobs}){
    const total = jobs.length;
    const applied = jobs.filter(job => job.status === "applied").length;
    const interviews = jobs.filter(job => job.status === "interview").length;
    const rejected = jobs.filter(job => job.status === "rejected").length;
    const offers = jobs.filter(job => job.status === "offer").length;

    return(
        <div className="stats-panel">
            <div className = "stat">
                <h3>{total}</h3>
                <p>Total</p>
            </div>
            <div className = "stat">
                <h3>{applied}</h3>
                <p>Applied</p>
            </div>
            <div className = "stat">
                <h3>{interviews}</h3>
                <p>Interviews</p>
            </div>
            <div className = "stat">
                <h3>{rejected}</h3>
                <p>Rejected</p>
            </div>
            <div className = "stat">
                <h3>{offers}</h3>
                <p>Offers</p>
            </div>
        </div>
    );
}

export default StatsPanel;