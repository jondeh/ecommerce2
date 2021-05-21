const axios = require('axios');
const { IconBase } = require('react-icons/lib');
const weatherAPI = 'S67qF8CdXNHi67iONiRqnMxalvtcazW3'
const openWeatherAPI = '83ed53333ea8e6bf676ebd1e6e55c50f'

module.exports = {
    getOpenWeather: async (req, res) => {
        const { lat, lng } = req.params
        try {
            // let openWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${openWeatherAPI}`).then(res => res.data)

            let openWeather = await axios.get(`http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${openWeatherAPI}`).then(res => res.data)

            // let weatherIcon = await getIcon(openWeather)
    
            res.status(200).send(openWeather)

        } catch (err) {
            console.error(err)
        }
    },
    getDayWeather: async (req, res) => {
        const {lat, lng} = req.params;
        try {
            let locationKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${weatherAPI}&q=${lat}%2C${lng}&language=en-us&details=true&toplevel=false`).then(res => res.data)

            console.log("locationKey: ", locationKey.Key)

            // let dayWeather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey.Key}?apikey=3GXFWGAXRaSyeblTCG0PlqDhGTruCUaW`).then(res => res.data)

            let dayWeather = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey.Key}?apikey=${weatherAPI}`).then(res => res.data)

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