const authorithation = () => {
    return {
        type: 'AUTH'
    };
};

const reAuthorithation = () => {
    return {
        type: 'RE-AUTH'
    };
};

const personalsLoaded = (newData: Array<string>) => {
    return {
        type: 'PERSONALS_LOADED',
        payload: newData
    };
};


const personalsRequested = () => {
    return {
        type: 'PERSONALS_REQUSTED'
    };
};

const personalsError = () => {
    return {
        type: 'PERSONALS_ERROR'
    };
};

const setId = (idValue: string) => {
    return {
        type: 'SET_ID',
        payload: idValue
    };
};

const setName = (nameValue: string) => {
    return {
        type: 'SET_NAME',
        payload: nameValue
    };
};

const contactsLoaded = (newData: Array<string>) => {
    return {
        type: 'CONTACTS_LOADED',
        payload: newData
    };
};

export {
    authorithation,
    reAuthorithation,
    personalsLoaded,
    personalsRequested,
    personalsError,
    setId,
    setName,
    contactsLoaded
};