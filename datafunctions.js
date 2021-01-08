export function getValidQuery(search) {
    const regex = /\s+/ig;
    const validQuery = search.replace(regex, "+");
    return validQuery;
}


export async function getResponse(validSearch) {
    try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q="+validSearch);
        const data = await response.json();
        console.log("🚀 ~ file: datafunctions.js ~ line 16 ~ getResponse ~ data", data)
        return data;
    } catch (error) {
        return false;
    }
}