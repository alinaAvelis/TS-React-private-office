const initialState = {
    personals: [],
    auth: false,
    loading: true,
    error: false
}

type ACTIONTYPE =
  | { type: 'AUTH';  }
  | { type: 'RE-AUTH'; }
  | { type: 'PERSONALS_LOADED'; payload: Array<string> }
  | { type: 'PERSONALS_REQUSTED';}
  | { type: 'PERSONALS_ERROR'; };

const reducer = (state = initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'AUTH':
            return {
                personals: state.personals,
                auth: true,
                loading: state.loading,
                error: state.error
            };
        case 'RE-AUTH':
             return {
                personals: state.personals,
                auth: false,
                loading: state.loading,
                error: state.error
            };
        case 'PERSONALS_LOADED':
            return {
                personals: action.payload,
                auth: state.auth,
                loading: false,
                error: state.error
            };
        case 'PERSONALS_REQUSTED':
            return {
                personals: state.personals,
                auth: state.auth,
                loading: state.loading,
                error: state.error
            };
        case 'PERSONALS_ERROR':
            return {
                personals: state.personals,
                auth: state.auth,
                loading: state.loading,
                error: true
            };
        default: 
            return state;
    }
}

export default reducer;