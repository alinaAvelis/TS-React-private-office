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

export {
    authorithation,
    reAuthorithation,
    personalsLoaded,
    personalsRequested,
    personalsError
};