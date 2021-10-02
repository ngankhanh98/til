import fetch from 'node-fetch';

/**
 * Let's say we have an endpoint: GET /campaigns?page_size=4&page=1
 * response.body: { data: {... page_size: 4, page: 1, total: 35} }                 
 *                               -
 * @param {string} url 
 * @param {number} page 
 * @param {function} callback the function need excuting when recursion reach its limit point.
 */
var recursiveFetch = async (url, page, callback) => {

    const response = await fetch(url + page);
    const json = await response.json();

    callback(json.data)    

    if (page * json.data.page_size < json.data.total) 
        recursiveFetch(url, page + 1, callback)
}


recursiveFetch('{{host}}/api/v1/campaigns?lang=vi&page_size=1&page=', 1, (res)=>console.log(`res`, res))
