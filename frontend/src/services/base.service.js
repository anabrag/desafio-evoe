export default class APIService {

    API_BASE_URL =  process.env.NODE_ENV == 'production' ? window.location.origin : 'http://localhost:3005'

    construtor(){}
    
    async get(url){
        try{
            url = this.API_BASE_URL+url
            const response = await fetch(url)
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const json = await response.json();
    
            return json;
        }catch(e){
            console.error(e);
            return null;
        }
    }

    async put (url, data){
        try{
            url = this.API_BASE_URL+url
            const response = await fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const json = await response.json();
    
            return json;
        }catch(e){
            console.error(e);
            return null;
        }
    }
}