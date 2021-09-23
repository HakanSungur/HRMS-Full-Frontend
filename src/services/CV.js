import axios from "axios";


export default class CVService{

   findCvByJobSeekerId(jobSekeerId){
       return axios.get('http://localhost:8080/api/cvs/getCvWithJobSeekerId?jobseekerId=${jobSeekerId}');
   }

   async addCv(cv){

    return await axios({
        method:"POST",
        
    })
   }
}