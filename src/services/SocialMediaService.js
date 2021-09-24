import axios from "axios";

export default class SocialMediaService{
    getSocialMediaByCvId(id){
        return axios.get(`http://localhost:8080/api/socialmedias/getSocialMediaByCvId?cvId=${id}`)
    }

    async addSocialMedia(sacialMedia){
        return await axios({
            method:"POST",
            url: `http://localhost:8080/api/socialmedias/addSocialMedia`,
            data: socialMedia,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    async updateSocialMedia(socialMedia) {
        return await axios({
            method: "PUT",
            url: `http://localhost:8080/api/socialmedias/updateSocialMedia`,
            data: socialMedia,
            headers: {"Content-Type": "application/json;charset-UTF-8"}
        }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        });
    }

}