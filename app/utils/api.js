const url = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const makeAuthRequestToCMS = async (apiEndpoint) => {
    return fetch(`${url}/api${apiEndpoint}`, {
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`
        }
    });
};