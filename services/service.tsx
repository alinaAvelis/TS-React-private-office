
const axios = require('axios');

export default class Service {
    _apiBase =  'http://localhost:3001';
   
    async getResourse(url: string) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Cloud not fetch ${url}` + `, received ${res.status}`);
        }
        return await res.json();
    }

    async putData(url: string, arr: Array<object>) {
        axios.put(`${this._apiBase}${url}`, {
            contacts: arr
        })
    }
    
     getPersonals() {
        return  this.getResourse(`/personals/`);
    }

     getContacts() {
        return  this.getResourse(`/contacts/`);
    }

    putContacts(urlOptions: string, newContacts: Array<object>) {
        return  this.putData(`/contacts/${urlOptions}`, newContacts);
    }
}


