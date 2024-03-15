//Using express as our server here
import express from "express";
const app = express();

//Jobs is a dictionary(empty) and the key willbe the job ID here and the value eill br the progress
const jobs = {};

//Updating the time of progress everytime the user submits a job.
app.post("/submit", (req, res) => {
  const jobId = `job:${Date.now()}`;
  jobs[jobId] = 0;
  updateJob(jobId, 0);
  res.end("\n\n" + jobId + "\n\n");
});

app.get("/checkstatus", (req, res) => {
  console.log(jobs[req.query.jobId]);
  res.end("\n\nJobStatus: " + jobs[req.query.jobId] + "%\n\n");
});

app.listen(8080, () => console.log("listening on 8080"));

function updateJob(jobId, prg) {
  jobs[jobId] = prg;
  console.log(`update ${jobId} to ${prg}`);
  if (prg == 100) return;
  this.setTimeout(() => updateJob(jobId, prg + 10), 3000);
}
