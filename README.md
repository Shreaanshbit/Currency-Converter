# Currency Converter Web App

https://currencyconverterbyshreaansh.netlify.app/
A modern, elegant web application for converting currencies in real-time with a beautiful dark theme interface.

## Features

- 🔄 **Real-time Exchange Rates** - Fetches live exchange rates from the ExchangeRate API
- 🌍 **160+ Currencies** - Support for all major world currencies
- 🚩 **Country Flags** - Visual flag indicators for each currency
- 🎨 **Modern UI** - Sleek dark theme with smooth animations and responsive design
- ⚡ **Instant Conversion** - Quick and responsive conversion calculations
- 📱 **Mobile Friendly** - Fully responsive layout for all device sizes
- 🔀 **Quick Swap** - Easy button to swap between source and target currencies

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with animations, gradients, and flexbox
- **JavaScript (Vanilla)** - DOM manipulation and API integration
- **Font Awesome 7** - Icons for UI elements
- **Google Fonts** - Custom typography (Syne & DM Sans)
- **ExchangeRate API** - Real-time currency exchange rates

## How to Use

1. **Enter Amount** - Input the amount you want to convert in the "Enter amount" field (default is 100)
2. **Select Source Currency** - Choose the currency you're converting from in the "From" dropdown
3. **Select Target Currency** - Choose the currency you're converting to in the "To" dropdown
4. **Click "Get Exchange Rate"** - The app will fetch the latest exchange rate and display the converted amount
5. **Swap Currencies** - Click the swap icon (↔) to quickly exchange source and target currencies

## File Structure

```
├── index.html       # Main HTML structure
├── style.css        # Styling and animations
├── app.js           # Main application logic and event handlers
├── codes.js         # Currency to country code mapping for flags
└── README.md        # This file
```

## Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. No installation or dependencies required - it works directly in the browser!

## Features Breakdown

### Currency Selection
- 160+ currency codes available
- Automatic flag display for each currency
- Pre-selected defaults (USD to INR)

### Exchange Rate Conversion
- Fetches real-time rates from ExchangeRate API
- Error handling for invalid inputs
- Displays formatted results with 2 decimal places

### Responsive Design
- Works seamlessly on desktop, tablet, and mobile
- Optimized layout for smaller screens
- Touch-friendly buttons and dropdowns

## API Details

This app uses the **ExchangeRate API** service:
- **Endpoint:** `https://api.exchangerate-api.com/v4/latest/{currency}`
- **Rate Limit:** Free tier available
- **Response Time:** Real-time exchange rates

## Input Validation

The app includes validation for:
- Empty amount fields (defaults to 1)
- Negative amounts (prompts user)
- Invalid currency combinations
- API fetch errors

## Customization

You can easily customize:
- **Default currencies** - Change USD/INR in the JavaScript code
- **Color theme** - Modify CSS variables in `:root`
- **Fonts** - Update Google Fonts imports
- **API source** - Switch to a different exchange rate API if needed




