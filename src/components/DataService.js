const API_URL = process.env.REACT_APP_API_URL;
class DataService {

    async getData(url) {
        return await fetch(API_URL + url);
    }

    async postAnswers(data, url) {
        console.log(JSON.stringify(data));
        return await fetch(API_URL + url,
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'Content-type': 'application/json' }
        })
    }
}

export default new DataService();