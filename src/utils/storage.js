if(typeof(Storage) === 'undefined') {
    throw new Error('Storage undefined');
}

export {localStorage, sessionStorage};