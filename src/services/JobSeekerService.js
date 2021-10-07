import axios from "axios";

export default class JobSeekerService{
    getJobSeekers(){
        return axios.get(`http://localhost:8080/api/jobseekers/getJobSeekers`)
    }

    getJobSeekerById(id){
        return axios.get(`http://localhost:8080/api/jobseekers/getJobseekerById?jobSeekerId=${id}`)
    }

    async addJobSeeker(jobSeeker) {
        return await axios({
                method: "POST",
                url: `http://localhost:8080/api/jobseekers/addJobseeker`,
                data: jobSeeker,
                headers: {"Content-Type": "application/json;charset-UTF-8"}
        }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })

    }

    deleteJobSeekerById(id){
        return axios.delete(`http://localhost:8080/api/jobseekers/deleteJobSeekerById?jobSeekerId=${id}`)
    }
}