İşte README dosyasının İngilizce olarak hazırlanması için bir örnek:

---

# Weather Web App Prototype

This is a prototype of a weather web app built using TypeScript and Next.js. It utilizes the OpenWeatherMap API to fetch weather data for a specific location and displays the 5-day weather forecast.

## Features

- Overview of the weather for the next 5 days
- Responsive layout for optimal viewing on different devices
- Display of important weather information
- Hard-coded location for prototype demonstration (Automatic search for the capital city of the country
  )

## Setup

1. Clone the repository:

```
git clone https://github.com/muzeyr/law-innovation.tech.git
```

2. Install dependencies:

```
cd weather-web-app
npm install
```

3. Run the development server:

```
npm run dev
```

4. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Testing

To run tests, use the following command:

```
npm run test
```

## API Token

To use the OpenWeatherMap API, you need to sign up for a free account and get your personal API token. Once you have your token, create a `.env.example` file in the root directory of the project and add the following line:

```
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_token_here
```

Replace `your_api_token_here` with your actual API token.

**Note:** Make sure not to commit your API token to version control.
