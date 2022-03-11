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

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
    switch (action.type) {
        case 'AUTH':
            return {
                personals: state.personals,
                auth: true,
                loading: true,
                error: false
            };
        case 'RE-AUTH':
             return {
                personals: state.personals,
                auth: false,
                loading: true,
                error: false
            };
        case 'PERSONALS_LOADED':
            return {
                personals: action.payload,
                auth: true,
                loading: false,
                error: false
            };
        case 'PERSONALS_REQUSTED':
            return {
                personals: state.personals,
                auth: true,
                loading: true,
                error: false
            };
        case 'PERSONALS_ERROR':
            return {
                personals: state.personals,
                auth: true,
                loading: true,
                error: true
            };
        default: 
            return state;
    }
}

export default reducer;