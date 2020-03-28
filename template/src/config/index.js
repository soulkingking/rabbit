const BASE_URL={
    prod:'',
    dev:'http://192.168.88.241:7400/mock/17'
}

function baseURL(env){
    return BASE_URL[env];
}

export {
    baseURL
}