const axios = require('axios');
const accuAPI = 'JQ3tLpCYP9VNGAJfTGnzJFjZIpc1lKdf'
const openWeatherAPI = '83ed53333ea8e6bf676ebd1e6e55c50f'

module.exports = {
    getMosquitoData: async (req, res) => {
        console.log("DING1")
        const {lat, lng} = req.params;
        console.log("DING2")
        try {
            let locationKey = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuAPI}&q=${lat}%2C${lng}&language=en-us&details=true&toplevel=false`).then(res => res.data)

            console.log(locationKey)

            let mosquitoData = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey.Key}?apikey=${accuAPI}`).then(res => res.data)

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
            // let openWeather = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=imperial&appid=${openWeatherAPI}`).then(res => res.data)

            let openWeather = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&units=imperial&appid=${openWeatherAPI}`).then(res => res.data)

            // let weatherIcon = await getIcon(openWeather)
    
            res.status(200).send(openWeather)

        } catch (err) {
            console.error(err)
        }
    },
    getDayWeather: async (req, res) => {
        const {lat, lng} = req.params;
        try {
            let locationKey = await axios.get(`https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuAPI}&q=${lat}%2C${lng}&language=en-us&details=true&toplevel=false`).then(res => res.data)

            console.log("locationKey: ", locationKey.Key)

            // let dayWeather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey.Key}?apikey=3GXFWGAXRaSyeblTCG0PlqDhGTruCUaW`).then(res => res.data)

            let dayWeather = await axios.get(`https://dataservice.accuweather.com/currentconditions/v1/${locationKey.Key}?apikey=${accuAPI}`).then(res => res.data)

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