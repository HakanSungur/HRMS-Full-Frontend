import axios from "axios";

export default class EmployerUpdateService {

    getEmployerUpdateById(id){
        return axios.get(`http://localhost:8080/api/employersupdate/getEmployerUpdateById?employerId=${id}`)
    }

    async eddEmployerUpdate(employer){
        return await axios({
            method:"POST",
            url:`http://localhost:8080/api/employersupdate/addEmployerUpdate`,
            data: employer,
                               headers: {"Content-Type": "application/json;charset-UTF-8"}
                           }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    deleteEmployerUpdateById(id){
        return axios.delete(`http://localhost:8080/api/employersupdate/deleteEmployerUpdateById?employerId=${id}`);
    }
}