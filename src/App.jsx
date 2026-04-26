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

  return (
      <div>
        <Header />
          <JobForm onAddJob={addJob}/>
          <StatsPanel jobs={jobs}/>
          <JobList jobs={jobs} deleteJob={deleteJob}/>
      </div>
  )
}

export default App;