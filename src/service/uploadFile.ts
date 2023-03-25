import axios from "axios";

const BaseUrl = "http://localhost:3001";

const uploadFile = async (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    const headers = {
        headers: {
          "Content-Type": "multipart/form-data",
        }
    }
    const response = await axios.post(BaseUrl + "/file", formData, headers);
    if(response.data){
        return response.data;
    }
    return {};
}

export default uploadFile;