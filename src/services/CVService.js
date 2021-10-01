import axios from "axios";


export default class CVService{

   findCvByJobSeekerId(jobSeekerId){
       return axios.get(`http://localhost:8080/api/cvs/getCvWithJobSeekerId?jobseekerId=${jobSeekerId}`);
   }

   async addCv(cv){

    return await axios({
        method:"POST",
        url: `http://localhost:8080/api/cvs/addCv`,
        data: cv,
        headers: {"Content-Type": "application/json;charset-UTF-8"}
    }).then((res)=> {
        return res.data.message
    }).catch((err)=> {
        return err.error.error
    });
   }

   async updateCv(cv){

    return await axios({
        method:"PUT",
        url:`http://localhost:8080/api/cvs/updateCv`,
        data: cv,
        headers: {"Content-Type": "application/json;charset-UTF-8"}
    }).catch((err)=> {
        return err.error.error
    });
   }

   addPicture(cvId, pictureFile){
       
    return axios({
        method:"POST",
        url: `http://localhost:8080/api/cvs/addPicture?cvId=${cvId}`,
        data: pictureFile,
        headers: "content-type: application/json",
    });

       
   }
}