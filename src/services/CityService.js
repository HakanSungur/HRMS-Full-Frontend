import axios from "axios";

export default class CityService{

    getCities(){
       return axios.get(`http://localhost:3000/api/cities/getcities`) 
        
    }
        
    
}
