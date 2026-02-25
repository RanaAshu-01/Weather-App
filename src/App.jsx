import { useEffect, useState } from "react"
import Navbar from "./componets/Navbar"
import Sky from "./assets/images/sky.png"

const App = () => {

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState("")


  const API_KEY = "341d0ce8f43f17aa1f3667c96e3a38c3"

  const getWeather = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      )

      const data = await response.json()

      if (data.cod !== 200) {
        setError(data.message || "City Not Found ❌")
        setWeather(null)
        return
      }

      setWeather(data)
      setError("")

    } catch (error) {
      setError("Something went wrong ⚠")
      setWeather(null)
    }

    setCity("")
  }



  useEffect(() => {
    getWeather("Delhi")
  }, [])



  const handleSubmit = (e) => {
    e.preventDefault()
    getWeather(city)
  }


  return <>
    <Navbar />

    <div className="min-h-screen flex items-center justify-center">

      <div className="bg-cover w-[95%] md:w-[80%] lg:w-[60%] 
           min-h-[86vh] rounded-2xl mt-5 p-4 "

        style={{ backgroundImage: "url( 'https://images.unsplash.com/photo-1579003593419-98f949b9398f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
      >


        {/* Top Bar Of Weather App */}
        <div>

          <h1 className="text-2xl font-bold m-3 text-center text-blue-300">
            🌤 Weather Search...
          </h1>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-3 flex flex-col md:flex-row justify-center gap-4"

        >

          <input
            type="text"
            className="border w-full md:w-[70%] text-white p-2 rounded"
            placeholder="Enter Your City...."
            onChange={(e) => { setCity(e.target.value) }}
            value={city}

          />

          <button
            className="border text-amber-50 bg-amber-500 px-3 rounded font-bold"
          >
            Search..
          </button>
        </form>

        {error && (
          <p className="text-red-500 text-center font-bold mt-4">
            {error}
          </p>
        )}

        {weather && weather.main && (
          <div className="flex flex-col md:flex-row items-center 
           justify-between px-4 md:px-12 mt-8 gap-6"
          >

            <div>
              <img
                className="h-[25vh]"
                src={Sky}
                alt=""
              />
            </div>

            <div className="space-y-3 text-white">
              <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left"> {weather.name}</h2>
              <p className="text-2xl md:text-3xl"> {weather.main.temp}°C</p>
              <p className="text-lg capitalize">
                {weather?.weather?.[0]?.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 text-sm"
>

                <div className="bg-white/20 p-3 rounded-xl">
                  💧 Humidity: {weather.main.humidity}%
                </div>

                <div className="bg-white/20 p-3 rounded-xl">
                  🌬 Wind: {weather.wind.speed} m/s
                </div>

                <div className="bg-white/20 p-3 rounded-xl">
                  🌡 Feels Like: {weather.main.feels_like}°C
                </div>

                <div className="bg-white/20 p-3 rounded-xl">
                  📊 Pressure: {weather.main.pressure} hPa
                </div>

              </div>
            </div>

          </div>
        )}




      </div>

    </div >

  </>
}

export default App
