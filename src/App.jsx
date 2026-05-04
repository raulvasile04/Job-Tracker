import Header from './components/Header'
import JobForm from './components/JobForm'
import {useState, useEffect} from "react";
import JobList from './components/JobList'
import StatsPanel from './components/StatsPanel';

function App(){
    const[jobs, setJobs] = useState(() =>{
        const saved = localStorage.getItem('jobs');
        return saved ? JSON.parse(saved) : [];
        });

    useEffect(()=>{
        localStorage.setItem('jobs', JSON.stringify(jobs));
    },[jobs]);

    function addJob(newJob){
        setJobs([...jobs, newJob]);
    }

    function deleteJob(id){
        setJobs(jobs.filter(job => job.id !== id));
    }

    function updateJob(id, newStatus) {
        setJobs(jobs.map(job =>
            job.id === id ? { ...job, status: newStatus } : job
        ));
    }

  return (
      <div>
        <Header />
          <JobForm onAddJob={addJob}/>
          <StatsPanel jobs={jobs}/>
          <JobList jobs={jobs} deleteJob={deleteJob} updateJob={updateJob}/>
      </div>
  )
}

export default App;