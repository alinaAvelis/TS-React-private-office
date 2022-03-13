const initialState = {
    personals: [],
    id: '',
    name: '',
    contacts: [],
    auth: false,
    loading: true,
    error: false
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


const reducer = (state = initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'AUTH':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                auth: true,
                loading: state.loading,
                error: state.error
            };
        case 'RE-AUTH':
             return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                auth: false,
                loading: state.loading,
                error: state.error
            };
        case 'PERSONALS_LOADED':
            return {
                personals: action.payload,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                auth: state.auth,
                loading: false,
                error: state.error
            };
        case 'PERSONALS_REQUSTED':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                auth: state.auth,
                loading: state.loading,
                error: state.error
            };
        case 'PERSONALS_ERROR':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: state.contacts,
                auth: state.auth,
                loading: state.loading,
                error: true
            };
        case 'SET_ID':
            return {
                personals: state.personals,
                id: action.payload,
                name:  state.name,
                contacts: state.contacts,
                auth: state.auth,
                loading: state.loading,
                error: state.error
            };
        case 'SET_NAME':
            return {
                personals: state.personals,
                id: state.id,
                name:  action.payload,
                contacts: state.contacts,
                auth: state.auth,
                loading: state.loading,
                 error: state.error
            };
        case 'CONTACTS_LOADED':
            return {
                personals: state.personals,
                id: state.id,
                name:  state.name,
                contacts: action.payload,
                auth: state.auth,
                loading: false,
                error: state.error
            };
        default: 
            return state;
    }
}

export default reducer;