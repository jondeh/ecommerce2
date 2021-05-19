const axios = require('axios');
const weatherAPI = '3GXFWGAXRaSyeblTCG0PlqDhGTruCUaW'
module.exports = {
    getDayWeather: async (req, res) => {
        const {lat, lng} = req.params;
        try {
            let locationKey = await axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${weatherAPI}&q=${lat}%2C${lng}&language=en-us&details=true&toplevel=false`).then(res => res.data)

            console.log("locationKey: ", locationKey.Key)

            // let dayWeather = await axios.get(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey.Key}?apikey=3GXFWGAXRaSyeblTCG0PlqDhGTruCUaW`).then(res => res.data)

            let dayWeather = await axios.get(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey.Key}?apikey=3GXFWGAXRaSyeblTCG0PlqDhGTruCUaW`).then(res => res.data)

            return res.status(200).send(dayWeather)
        } catch (err) {
            console.error(err)
            // throw error
        }
    }
}

// const getLocationKey = () => {
//     return 
// }