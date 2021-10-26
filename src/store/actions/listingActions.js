export const FETCH_HOUSES = "FETCH_HOUSES"
export const CREATE_HOUSES = "CREATE_HOUSES"

export const fetchHouses = () => {
    return async dispatch => {

        // api call
        const results = await fetch('http://192.168.100.25:8000/api/houses')
        const resultsData = await results.json()
        // console.log(resultsData)

        dispatch({
            type: FETCH_HOUSES,
            payload: resultsData
        })
    }
}

export const createHome = ({ title, image, description, homeType, price, address, yearBuilt }) => {
    return async dispatch => {
        const results = fetch("http://192.168.100.25:8000/api/houses/create", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                image,
                homeType,
                price,
                address,
                description,
                yearBuilt
            })
        })

        const resultsData = results.JSON()
        console.log(resultsData)

        dispatch({
            type: CREATE_HOUSES,
            payload: resultsData
        })

    }
}