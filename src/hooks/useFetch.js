const baseUrl = process.env.REACT_APP_API_URL;

/**
 * custom hook para realizar las peticiones asincronas
 * @param {*} endpoint ruta del recurso
 * @param {*} data datos que se van a enviar en caso de que sea una peticion post
 * @param {*} method para realizar las peticiones con los demas verbos, por defecto recibe GET
 * @returns 
 */
export const usedFetch = async ( endpoint, data = {}, method = 'GET' ) =>{
    
    const url = `${baseUrl}/${endpoint}`;
    let loading = false;
    let error = false;

    if(method === 'GET'){

        try {
            loading = true;
            const response = await fetch(url);
            const { data } = await response.json();
            loading = false;

            return {
                data: data,
                loading: loading,
                error: error,
            };
            
        } catch (err) {

            return {
                data: [],
                loading: false,
                error: true,
            };

        }

    }else{

        return fetch(url, {
            method: method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

    }

}