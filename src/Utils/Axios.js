import axios from "axios";

const BASE_URL = 'https://techramindra.com/mohit/appservice/process'

export const getDataFromServer = async () => {

    axios.get('/user?ID=12345')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}


export const getDataFromServerWithGivenParams = async ({ data, end_point }) => {

    let url = `${BASE_URL}/${end_point}`

    axios.get('/user?ID=12345')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });

}


export const postFormDataToServer = async ({ data, key, end_point, call_back }) => {

    var form_data = new FormData();

    form_data.append("control", end_point);
    for (var key in data) {
        form_data.append(key, data[key]);
    }
    
    console.log('form data', form_data);

    await axios({
        method: "post",
        url: BASE_URL,
        data: form_data?._parts,
        headers: { 
            "content-type": "application/json",
        // "Keep-Alive":"timeout=5, max=1000",
        // "Connection":"Keep-Alive"
        },
    })
        .then(function (response) {

            console.log('api respone', response.data)
            console.log('api respone', response.response)

            call_back({
                status: 'success',
                response,
                key
            })
        })
        .catch(function (error) {
            
            console.log('catch error=', error)

            call_back({
                status: 'error',
                error,
                key
            })
        });
}

export const postDataToServer = async ({ data, end_point, call_back }) => {

    let url = `${BASE_URL}/${end_point}`

    await axios.post(url, {
        control: end_point,
        ...data
    })
        .then(function (response) {

            call_back({
                status: 'success',

            })
        })
        .catch(function (error) {

            call_back({
                status: 'error',

            })
        });
}