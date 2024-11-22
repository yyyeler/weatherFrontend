export interface Response
{
  tempmax: number;
  tempmin: number;
  temp: number;
  icon: string; 
  conditions: string;
}

export class BaseData
{
  address: string = "";
  latitude : number = 0;
  longitude: number = 0;
  queryCost: number = 0;
  resolvedAddress: string  = "";
  timezone: string  = "";
  tzoffset: number = 0;
  days : Response[] = [];
}

export interface Request
{
  type: string;
  location: string;
  date: string;
}


export interface Options {
  value: string;
  label: string;
}


export const types :  Options[] = [
    { value:"Celsius", label:"Celsius" },
    { value:"Fahrenheit", label:"Fahrenheit" }
];

export const cities :  Options[] = [
    { value: "London, UK", label: "London, UK" },
    { value: "Manchester, UK", label: "Manchester, UK" },
    { value: "Birmingham, UK", label: "Birmingham, UK" },
    { value: "Edinburgh, UK", label: "Edinburgh, UK" },
    { value: "New York, USA", label: "New York, USA" },
    { value: "Los Angeles, USA", label: "Los Angeles, USA" },
    { value: "Chicago, USA", label: "Chicago, USA" },
    { value: "San Francisco, USA", label: "San Francisco, USA" },
    { value: "Paris, France", label: "Paris, France" },
    { value: "Marseille, France", label: "Marseille, France" },
    { value: "Lyon, France", label: "Lyon, France" },
    { value: "Nice, France", label: "Nice, France" },
    { value: "Tokyo, Japan", label: "Tokyo, Japan" },
    { value: "Osaka, Japan", label: "Osaka, Japan" },
    { value: "Kyoto, Japan", label: "Kyoto, Japan" },
    { value: "Nagoya, Japan", label: "Nagoya, Japan" },
    { value: "Berlin, Germany", label: "Berlin, Germany" },
    { value: "Munich, Germany", label: "Munich, Germany" },
    { value: "Frankfurt, Germany", label: "Frankfurt, Germany" },
    { value: "Hamburg, Germany", label: "Hamburg, Germany" },
    { value: "Sydney, Australia", label: "Sydney, Australia" },
    { value: "Melbourne, Australia", label: "Melbourne, Australia" },
    { value: "Brisbane, Australia", label: "Brisbane, Australia" },
    { value: "Perth, Australia", label: "Perth, Australia" },
    { value: "Toronto, Canada", label: "Toronto, Canada" },
    { value: "Vancouver, Canada", label: "Vancouver, Canada" },
    { value: "Montreal, Canada", label: "Montreal, Canada" },
    { value: "Calgary, Canada", label: "Calgary, Canada" },
    { value: "Dubai, UAE", label: "Dubai, UAE" },
    { value: "Abu Dhabi, UAE", label: "Abu Dhabi, UAE" },
    { value: "Sharjah, UAE", label: "Sharjah, UAE" },
    { value: "Moscow, Russia", label: "Moscow, Russia" },
    { value: "Saint Petersburg, Russia", label: "Saint Petersburg, Russia" },
    { value: "Novosibirsk, Russia", label: "Novosibirsk, Russia" },
    { value: "Beijing, China", label: "Beijing, China" },
    { value: "Shanghai, China", label: "Shanghai, China" },
    { value: "Guangzhou, China", label: "Guangzhou, China" },
    { value: "Shenzhen, China", label: "Shenzhen, China" },
    { value: "São Paulo, Brazil", label: "São Paulo, Brazil" },
    { value: "Rio de Janeiro, Brazil", label: "Rio de Janeiro, Brazil" },
    { value: "Brasilia, Brazil", label: "Brasilia, Brazil" },
    { value: "Salvador, Brazil", label: "Salvador, Brazil" },
    { value: "Mumbai, India", label: "Mumbai, India" },
    { value: "Delhi, India", label: "Delhi, India" },
    { value: "Bangalore, India", label: "Bangalore, India" },
    { value: "Kolkata, India", label: "Kolkata, India" },
    { value: "Mexico City, Mexico", label: "Mexico City, Mexico" },
    { value: "Guadalajara, Mexico", label: "Guadalajara, Mexico" },
    { value: "Monterrey, Mexico", label: "Monterrey, Mexico" },
    { value: "Cancun, Mexico", label: "Cancun, Mexico" },
    { value: "Cape Town, South Africa", label: "Cape Town, South Africa" },
    { value: "Johannesburg, South Africa", label: "Johannesburg, South Africa" },
    { value: "Durban, South Africa", label: "Durban, South Africa" },
    { value: "Pretoria, South Africa", label: "Pretoria, South Africa" },
    { value: "Seoul, South Korea", label: "Seoul, South Korea" },
    { value: "Busan, South Korea", label: "Busan, South Korea" },
    { value: "Incheon, South Korea", label: "Incheon, South Korea" },
    { value: "Daegu, South Korea", label: "Daegu, South Korea" },
    { value: "Istanbul, Turkey", label: "Istanbul, Turkey" },
    { value: "Ankara, Turkey", label: "Ankara, Turkey" },
    { value: "Izmir, Turkey", label: "Izmir, Turkey" },
    { value: "Antalya, Turkey", label: "Antalya, Turkey" },
    { value: "Bangkok, Thailand", label: "Bangkok, Thailand" },
    { value: "Phuket, Thailand", label: "Phuket, Thailand" },
    { value: "Chiang Mai, Thailand", label: "Chiang Mai, Thailand" },
    { value: "Buenos Aires, Argentina", label: "Buenos Aires, Argentina" },
    { value: "Cordoba, Argentina", label: "Cordoba, Argentina" },
    { value: "Rosario, Argentina", label: "Rosario, Argentina" },
    { value: "Mendoza, Argentina", label: "Mendoza, Argentina" },
    { value: "Cairo, Egypt", label: "Cairo, Egypt" },
    { value: "Alexandria, Egypt", label: "Alexandria, Egypt" },
    { value: "Giza, Egypt", label: "Giza, Egypt" },
    { value: "Lagos, Nigeria", label: "Lagos, Nigeria" },
    { value: "Abuja, Nigeria", label: "Abuja, Nigeria" },
    { value: "Kano, Nigeria", label: "Kano, Nigeria" },
    { value: "Nairobi, Kenya", label: "Nairobi, Kenya" },
    { value: "Mombasa, Kenya", label: "Mombasa, Kenya" },
    { value: "Casablanca, Morocco", label: "Casablanca, Morocco" },
    { value: "Marrakech, Morocco", label: "Marrakech, Morocco" },
    { value: "Rabat, Morocco", label: "Rabat, Morocco" },
    { value: "Addis Ababa, Ethiopia", label: "Addis Ababa, Ethiopia" },
    { value: "Accra, Ghana", label: "Accra, Ghana" },
    { value: "Dakar, Senegal", label: "Dakar, Senegal" },
    { value: "Kigali, Rwanda", label: "Kigali, Rwanda" },
    { value: "Tunis, Tunisia", label: "Tunis, Tunisia" }
  ];
  