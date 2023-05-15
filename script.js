//data of flight pricess 
const flights = [
  { date: '2023-06-01', origin: 'Delhi', destination: 'Jaipur', airline: 'Indigo', price: 5000},
  { date: '2023-06-01', origin: 'Delhi', destination: 'Mumbai', airline: 'Vistara', price: 5200},
  { date: '2023-06-01', origin: 'Delhi', destination: 'Jaipur', airline: 'Air Asia', price: 4500 },
  { date: '2023-06-02', origin: 'Mumbai', destination: 'Delhi', airline: 'Air India', price: 4800},
  { date: '2023-06-02', origin: 'Mumbai', destination: 'Jaipur', airline: 'Go Air', price: 4500 },
  { date: '2023-06-02', origin: 'Jaipur', destination: 'Delhi', airline: 'Spicejet', price: 5500 },
  { date: '2023-06-02', origin: 'Jaipur', destination: 'Mumbai', airline: 'Akasa Air', price: 4600 },
];

// input form,to cities and dates 
const originCity = 'Delhi';
const destinationCity = 'Jaipur';
const desiredDate = '2023-06-01';

console.log(`Flight prices from ${originCity} to ${destinationCity} on ${desiredDate}:`);
const matchingFlights = flights.filter(flight => flight.origin === originCity && flight.destination === destinationCity && flight.date === desiredDate);

if (matchingFlights.length > 0) {
  matchingFlights.forEach((flight, index) => {
    console.log(`${index + 1}. ${flight.airline} - Rs. ${flight.price}`);
  });
} else {
  console.log('No flights found for the specified origin, destination, and date.');
}
