require("dotenv").config({ path: "../../"});
const { ATTOM_DATA, ACCU_API, OPEN_WEATHER_API } = process.env;

console.log(ATTOM_DATA, ACCU_API, OPEN_WEATHER_API)


const axios = require('axios');
// const ACCU_API = 'JQ3tLpCYP9VNGAJfTGnzJFjZIpc1lKdf'
// const OPEN_WEATHER_API = '83ed53333ea8e6bf676ebd1e6Je55c50f'

module.exports = {
    getPropertyData: async (req, res) => {
        const { streetAddress, region } = req.body

        let headers = {
            'apikey': ATTOM_DATA,
            'accept': 'application/json'
        }

        let url = `https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/basicprofile?address1=${streetAddress}&address2=${region}`;

        try {
            const propData = await axios.get(url, {headers}).then(res => {
                return res.data.property.map((e,i) => {
                    return {
                      sizeData: e.building.size,
                      summaryData: e.building.summary,
                      constructionData: e.building.construction,
                      lotData: e.lot,
                      interiorData: e.building.interior,
                      parkingData: e.building.parking,
                    };
                  });
            })

            return res.status(200).send(propData)
        } catch (err) {
            console.error(err)
        }
        
    },
    getMosquitoData: async (req, res) => {
        console.log("DING1")
        const {lat, lng} = req.params;
        console.log("DING2")
        try {
            let locationKey = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ACCU_API}&q=${lat}%2C${lng}&language=en-us&details=true&toplevel=false`).then(res => res.data)

            console.log(locationKey)

                      

            let mosquitoData = await axios.get(`https://dataservice.accuweather.com//indices/v1/daily/5day/${locationKey.Key}/17?apikey=${ACCU_API}&language=en-us&details=false`).then(res => res.data)

            console.log({ mosquitoData })

            return res.status(200).send(mosquitoData)
        } catch (err) {
            console.error(err)
            // throw error
        }
    },
    getOpenWeather: async (req, res) => {
        const { lat, lng } = req.params
        try {
            // let openWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${OPEN_WEATHER_API}`).then(res => res.data)

            let openWeather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${OPEN_WEATHER_API}`).then(res => res.data)

            // let weatherIcon = await getIcon(openWeather)
    
            res.status(200).send(openWeather)

        } catch (err) {
            console.error(err)
        }
    },
    getDayWeather: async (req, res) => {
        const {lat, lng} = req.params;
        try {
            let locationKey = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${ACCU_API}&q=${lat}%2C${lng}&language=en-us&details=true&toplevel=false`).then(res => res.data)

            console.log("locationKey: ", locationKey.Key)

            // let dayWeather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey.Key}?apikey=3GXFWGAXRaSyeblTCG0PlqDhGTruCUaW`).then(res => res.data)

            let dayWeather = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey.Key}?apikey=${ACCU_API}`).then(res => res.data)

            return res.status(200).send(dayWeather)
        } catch (err) {
            console.error(err)
            // throw error
        }
    }
}

const getIcon = async (openWeather) => {
    try {
        const myIcon = openWeather.weather[0].icon
        console.log({ myIcon })
        // let icon = await axios.get(`http://openweathermap.org/img/wn/${openWeather.weather[0].icon}@2x.png`).then(res => res.data)

        // res.status(200).send(icon)
    } catch (err) {
        console.error(err)
    }
    return 
}
// const getLocationKey = () => {
//     return 
// }