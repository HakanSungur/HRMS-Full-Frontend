import axios from "axios";

export default class JobPositionService{

    getJobPositions(){
        return axios.get(`http://localhost:8080/api/jobpositions/getpositions`)
    }

    addJobPosition(jobPosition){
        return axios({
            method:"POST",
            url: `http://localhost:8080/api/jobpositions/addposition`,
            data:jobPosition,
            headers: "content-type: application/json",
        }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }
}