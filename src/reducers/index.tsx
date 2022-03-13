const initialState = {
    personals: [],
    id: '',
    name: '',
    contacts: [],
    filtresContacts: [],
    auth: 'false',
    loading: true,
    error: false,
    term: ''
}

type ACTIONTYPE =
  | { type: 'AUTH';  }
  | { type: 'RE-AUTH'; }
  | { type: 'PERSONALS_LOADED'; payload: Array<string> }
  | { type: 'PERSONALS_REQUSTED';}
  | { type: 'PERSONALS_ERROR'; }
  | { type: 'SET_ID'; payload: Array<string> }
  | { type: 'SET_NAME'; payload: Array<string> }
  | { type: 'CONTACTS_LOADED'; payload: Array<string>}
  | { type: 'SET_TERM'; payload: string}
  | { type: 'SET_FILTRED_CONTACTS'; payload: Array<string>}


const reducer = (state = initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'AUTH':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: true,
                loading: state.loading,
                error: state.error,
                term: state.term
            };
        case 'RE-AUTH':
             return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: false,
                loading: state.loading,
                error: state.error,
                term: state.term
            };
        case 'PERSONALS_LOADED':
            return {
                personals: action.payload,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: state.auth,
                loading: false,
                error: state.error,
                term: state.term
            };
        case 'PERSONALS_REQUSTED':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: state.auth,
                loading: state.loading,
                error: state.error,
                term: state.term
            };
        case 'PERSONALS_ERROR':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: state.auth,
                loading: state.loading,
                error: true,
                term: state.term
            };
        case 'SET_ID':
            return {
                personals: state.personals,
                id: action.payload,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: state.auth,
                loading: state.loading,
                error: state.error,
                term: state.term
            };
        case 'SET_NAME':
            return {
                personals: state.personals,
                id: state.id,
                name:  action.payload,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: state.auth,
                loading: state.loading,
                 error: state.error,
                 term: state.term
            };
        case 'CONTACTS_LOADED':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: action.payload,
                filtresContacts: state.filtresContacts,
                auth: state.auth,
                loading: false,
                error: state.error,
                term: state.term
            };
        case 'SET_TERM':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: state.filtresContacts,
                auth: state.auth,
                loading: false,
                error: state.error,
                term: action.payload
            };
        case 'SET_FILTRED_CONTACTS':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                filtresContacts: action.payload,
                auth: state.auth,
                loading: state.loading,
                error: state.error,
                term: state.term
            };
        default: 
            return state;
    }
}

export default reducer;