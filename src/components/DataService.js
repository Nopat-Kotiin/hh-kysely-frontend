const API_URL = "http://localhost:8080";

class DataService {

    async getData(url) {
        return await fetch(API_URL + url);
    }
}

export default new DataService();