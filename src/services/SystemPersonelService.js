import axios from "axios";

export default class SystemPersonelService{
    getSystemPersonels(){
        return axios.get("http://localhost:8080/api/systempersonels/getSystemPersonels")
    }

    getSystemPersonelById(id){
        return axios.get(`http://localhost:8080/api/systempersonels/getSystemPersonelById?systemPersonelId=${id}`)
    }

    async addSystemPersonel(systemPersonel) {
        return await axios({
                method: "POST",
                url: `http://localhost:8080/api/systempersonels/addSystemPersonel`,
                data:systemPersonel,
                headers: {"Content-Type": "application/json;charset-UTF-8"}
        }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    async updateSystemPersonel(systemPersonel) {
        return await axios({
                method: "UPDATE",
                url: `http://localhost:8080/api/systempersonels/addSystemPersonel`,
                data: systemPersonel,
                headers: {"Content-Type": "application/json;charset-UTF-8"}
        }).then((res) => {
            return res.data.message
        }).catch((err) => {
            return err.error.error
        })
    }

    //devam edilecek buradan...
}