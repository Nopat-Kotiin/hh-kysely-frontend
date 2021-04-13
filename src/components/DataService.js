const API_URL = "https://nopatkotiin-kysely-backend.herokuapp.com";

class DataService {

    async getData(url) {
        return await fetch(API_URL + url);
    }
}

export default new DataService();