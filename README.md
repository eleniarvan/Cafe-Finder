Thessaloniki Cafe Finder
An interactive, real-time web application to discover and explore cafes in Thessaloniki using live geographic data.

Project Overview
This project demonstrates the integration of third-party APIs and mapping libraries with Vanilla JavaScript to create a dynamic user experience. Unlike static applications, this tool fetches live data directly from the OpenStreetMap database.

Key Technical Features:
Real-time Data Fetching: Utilizes the Overpass API (OpenStreetMap) to retrieve up-to-date information about cafes in specific coordinates of Thessaloniki.

Interactive Mapping: Integrated Leaflet.js to handle map rendering, custom markers, and dynamic zoom/view transitions.

Asynchronous Logic: Implemented JavaScript Fetch API and Promises to handle data retrieval without blocking the UI.

Dynamic Search & Filtering: Features a live search engine that filters both the sidebar list and the map markers simultaneously.

Responsive GIS UI: A clean, sidebar-based layout designed with CSS Flexbox for seamless navigation.

Technologies Used
HTML5: Semantic structure.

CSS3: Custom layouts and UI design (Flexbox).

Vanilla JavaScript: Core logic, API communication, and DOM manipulation.

Leaflet.js: Open-source JavaScript library for mobile-friendly interactive maps.

Overpass API: Data mining tool for OpenStreetMap.

How to Run
Simply open index.html in any modern web browser. The application will automatically fetch the latest data from the API and render the map.
