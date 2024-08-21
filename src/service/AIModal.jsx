import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,

  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placename, Place Details, Place Image url, Geo Coordinates, ticket Pricing,rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.\n",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
  "hotelOptions": [
    {
      "hotelName": "The D Las Vegas",
      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",
      "price": "$50-$100 per night",
      "hotelImageUrl": "https://www.theD.com/media/images/hotel/exterior-day.jpg",
      "geoCoordinates": "36.1699, -115.1423",
      "rating": 4.0,
      "description": "A retro-themed casino hotel located in the heart of Fremont Street Experience, offering affordable rates and a lively atmosphere."
    },
    {
      "hotelName": "Golden Nugget Las Vegas",
      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",
      "price": "$70-$150 per night",
      "hotelImageUrl": "https://www.goldennugget.com/las-vegas/media/images/hotel-exterior.jpg",
      "geoCoordinates": "36.1694, -115.1420",
      "rating": 4.5,
      "description": "A classic casino hotel known for its luxurious amenities, including a shark tank and a variety of restaurants and bars."
    },
    {
      "hotelName": "Circus Circus Hotel & Casino",
      "hotelAddress": "2880 S Las Vegas Blvd, Las Vegas, NV 89109",
      "price": "$40-$80 per night",
      "hotelImageUrl": "https://www.circuscircus.com/media/images/hotel/exterior.jpg",
      "geoCoordinates": "36.1030, -115.1732",
      "rating": 3.5,
      "description": "A family-friendly hotel with a carnival theme, offering affordable rates, a variety of entertainment options, and a midway with rides."
    },
    {
      "hotelName": "The Strat Hotel, Casino & Skypod",
      "hotelAddress": "2000 S Las Vegas Blvd, Las Vegas, NV 89104",
      "price": "$60-$120 per night",
      "hotelImageUrl": "https://www.thestrat.com/media/images/hotel/exterior.jpg",
      "geoCoordinates": "36.1128, -115.1700",
      "rating": 4.0,
      "description": "A towering hotel offering stunning views of the Strip, affordable rates, and a variety of entertainment options, including an observation deck and a thrill ride."
    }
  ],
  "itinerary": [
    {
      "day": "Day 1",
      "plan": [
        {
          "time": "9:00 AM - 12:00 PM",
          "placeName": "Fremont Street Experience",
          "placeDetails": "A pedestrian mall featuring a canopy of lights, live entertainment, and various street performers. Enjoy the free shows and the vibrant atmosphere.",
          "placeImageUrl": "https://www.vegasexperience.com/wp-content/uploads/2022/04/Fremont-Street-Experience-Las-Vegas-1024x683.jpg",
          "geoCoordinates": "36.1699, -115.1423",
          "ticketPricing": "Free",
          "rating": 4.5,
          "timeToTravel": "0 mins "
        },
        {
          "time": "1:00 PM - 4:00 PM",
          "placeName": "Neon Museum",
          "placeDetails": "A museum showcasing a collection of historic neon signs from Las Vegas. Learn about the city's history and take memorable pictures.",
          "placeImageUrl": "https://www.neonmuseum.org/sites/default/files/styles/hero/public/2018-08/DSC09860.jpg?itok=m6Z7zR4V",
          "geoCoordinates": "36.1769, -115.1339",
          "ticketPricing": "$20-$25",
          "rating": 4.0,
          "timeToTravel": "10-15 mins"
        },
        {
          "time": "6:00 PM - 9:00 PM",
          "placeName": "The LINQ Promenade",
          "placeDetails": "An outdoor shopping, dining, and entertainment complex featuring a High Roller observation wheel, restaurants, and bars. Enjoy a romantic stroll and try the local cuisine.",
          "placeImageUrl": "https://www.caesars.com/content/dam/caesars/linq/linq-promenade-night.jpg",
          "geoCoordinates": "36.1204, -115.1735",
          "ticketPricing": "Free",
          "rating": 4.0,
          "timeToTravel": "30-40 mins "
        }
      ]
    },
    {
      "day": "Day 2",
      "plan": [
        {
          "time": "10:00 AM - 1:00 PM",
          "placeName": "Bellagio Conservatory & Botanical Garden",
          "placeDetails": "A stunning botanical garden with elaborate floral displays that change seasonally. It's free to enter and a beautiful place to relax.",
          "placeImageUrl": "https://media.cntraveler.com/photos/59c934f89752285f567352df/4:3/w_1600,h_1200,c_limit/bellagio-conservatory.jpg",
          "geoCoordinates": "36.1175, -115.1747",
          "ticketPricing": "Free",
          "rating": 4.5,
          "timeToTravel": "10-15 mins"
        },
        {
          "time": "2:00 PM - 5:00 PM",
          "placeName": "The Strip (Free Shows)",
          "placeDetails": "Walk along the Strip and catch some of the free shows offered by various casinos. Explore the different themed resorts and enjoy the vibrant atmosphere.",
          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/large_image/public/2022-05/las-vegas-strip-night-skyline.jpg?itok=uK5o-p7p",
          "geoCoordinates": "36.1147, -115.1731",
          "ticketPricing": "Free",
          "rating": 5.0,
          "timeToTravel": "5-10 mins "
        },
        {
          "time": "7:00 PM - 10:00 PM",
          "placeName": "Red Rock Canyon National Conservation Area",
          "placeDetails": "Take a short drive from the Strip to enjoy stunning red rock formations and scenic views. Hike or drive through the scenic loop.",
          "placeImageUrl": "https://www.nps.gov/redr/planyourvisit/images/RedRockCanyon_DSC_0255.jpg",
          "geoCoordinates": "36.1628, -115.3603",
          "ticketPricing": "$15 per vehicle",
          "rating": 4.5,
          "timeToTravel": "30-40 mins "
        }
      ]
    },
    {
      "day": "Day 3",
      "plan": [
        {
          "time": "11:00 AM - 2:00 PM",
          "placeName": "Hoover Dam",
          "placeDetails": "Take a day trip to Hoover Dam, a historic engineering marvel. Take a tour, walk across the dam, and admire the panoramic views.",
          "placeImageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Hoover_Dam_from_Nevada_side.jpg/1280px-Hoover_Dam_from_Nevada_side.jpg",
          "geoCoordinates": "36.0041, -114.9675",
          "ticketPricing": "$30-$40",
          "rating": 4.0,
          "timeToTravel": "1 hour 15 mins - 1 hour 30 mins (driving)"
        },
        {
          "time": "3:00 PM - 6:00 PM",
          "placeName": "Downtown Container Park",
          "placeDetails": "A unique shopping and entertainment complex housed in repurposed shipping containers. Browse the shops, try the local food, and enjoy the vibrant atmosphere.",
          "placeImageUrl": "https://www.containerpark.com/images/container-park-header.jpg",
          "geoCoordinates": "36.1698, -115.1423",
          "ticketPricing": "Free",
          "rating": 4.0,
          "timeToTravel": "30-40 mins "
        },
        {
          "time": "7:00 PM - 10:00 PM",
          "placeName": "Las Vegas Strip (Dinner & Drinks)",
          "placeDetails": "Enjoy a final night on the Strip, indulging in a delicious dinner at a budget-friendly restaurant and enjoying a few drinks at a lively bar.",
          "placeImageUrl": "https://www.visitlasvegas.com/sites/default/files/styles/large_image/public/2022-05/las-vegas-strip-night-skyline.jpg?itok=uK5o-p7p",
          "geoCoordinates": "36.1147, -115.1731",
          "ticketPricing": "Varies",
          "rating": 5.0,
          "timeToTravel": "10-15 mins "
        }
      ]
    }
  ]
}`,
        },
      ],
    },
  ],
});
