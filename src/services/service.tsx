
export default class Service {
    _apiBase =  'http://localhost:3001';
   
    async getResourse(url: string) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error (`Cloud not fetch ${url}` + `, received ${res.status}`);
        }
        return await res.json();
    }

    async getPersonals() {
        return await this.getResourse(`/personals/`);
    }

    async getContacts(id: string) {
        return await this.getResourse(`/personals/${id}/contacts`);
    }
}

