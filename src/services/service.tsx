
export default class Service {
    _apiBase =  'http://localhost:3001';
   
    async getResourse(url: string) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Cloud not fetch ${url}` + `, received ${res.status}`);
        }
        return await res.json();
    }

     getPersonals() {
        return  this.getResourse(`/personals/`);
    }

     getContacts() {
        return  this.getResourse(`/contacts/`);
    }
}

