# RideSplit

A digital driver's log for people who share a car. Track mileage, split fuel costs fairly, and say goodbye to manual calculations.

## About

RideSplit automates the tedious process of tracking who drives how much and splitting fuel costs proportionally. Inspired by real-life shared car usage where you manually log mileage in a notebook and calculate costs via WhatsApp messages.

## MVP Features

- **Driver Selection** - Choose your name from a dropdown
- **Mileage Logging** - Record odometer reading after each drive
- **Automatic Calculation** - App calculates distance driven automatically
- **Fuel Cost Split** - Enter fuel details, get instant cost breakdown per driver
- **Data Persistence** - All data saved to database, accessible from any device
- **PWA Support** - Install on mobile, works offline

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Database (Supabase)
- PWA (next-pwa)

## Work Packets

### **Packet 1: Project Setup & Foundation**
- Initialize Next.js 16 with App Router and TypeScript
- Configure Tailwind CSS
- Set up database connection
- Create basic project structure and layout
- Configure PWA basics (next-pwa)
- Deploy initial version

### **Packet 2: Driver Management**
- Create `drivers` table
- API route: GET /api/drivers
- Seed with initial family member names
- (Optional: POST /api/drivers for adding drivers via UI)

### **Packet 3: Mileage Logging Feature**
- Create `trips` table (id, driver_name, mileage, distance, timestamp, is_active)
- API routes: POST /api/trips, GET /api/trips
- UI: Driver dropdown + mileage input form
- UI: Display recent trips list with calculated distances
- Validation: mileage must be >= previous

### **Packet 4: Fuel Cost Split Feature**
- Create `fuel_purchases` table
- API route: POST /api/fuel-purchases (create purchase + calculate splits)
- API route: POST /api/reset (mark trips inactive, reset state)
- UI: Fuel purchase form (price/liter, liters)
- UI: Cost breakdown summary (who owes what)
- UI: Confirmation dialog + reset functionality

### **Packet 5: PWA Enhancement**
- Create app manifest.json and icons
- Configure service worker caching strategies
- Add install prompt
- Test offline mode
- Optimize for mobile

### **Packet 6: Polish & Nice-to-Haves**
- Improve form validation and error messages
- Add loading states and empty states
- Cross-browser and mobile testing
- Documentation and README updates
