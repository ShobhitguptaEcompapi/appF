import axios from "axios";

export function searchKeyword(keyword) {
    return new Promise(async (resolve, reject) => {
      try{
        console.log("info is ", keyword)
      const response = await axios.get(`http://192.168.1.33:8080/api/v1/learningCentre/search?searchTerm=${keyword}&courseId=course1`,
        {
        withCredentials: true,
      }, 
    );
      if (response.status === 200) {
        if (typeof response.data === 'string') {
          data = JSON.parse(response.data);
        } else {
          data = response.data;
        }
        data = JSON.parse(data.data)
        // console.log(data); 
        // console.log(typeof data); 
        // console.log(Array.isArray(data)); 
        resolve({ data });
        
      } else {
        const error = JSON.parse(response.data);
        console.log(error);
        reject(error);
      }
      }catch (error) {
        console.log(error);
        reject({
          message: error.message,
          status: error.response?.status,
          data: error.response?.data,
        });
      }
    });
  }