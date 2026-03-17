# Thessaloniki Cafe Finder

An interactive web application for discovering and exploring cafes in Thessaloniki using geographic data from OpenStreetMap.

## Project Overview

This project demonstrates the integration of third-party APIs and mapping libraries using Vanilla JavaScript to create a dynamic and interactive user experience.

The application fetches data from the OpenStreetMap database via the Overpass API and visualizes it on a map interface.

## Key Technical Features

* **API Data Fetching:**
  Retrieves cafe data from OpenStreetMap using the Overpass API based on geographic coordinates of Thessaloniki.

* **Interactive Mapping:**
  Uses Leaflet.js to render a map with markers and popups for each cafe location.

* **Asynchronous Logic:**
  Implements the JavaScript Fetch API and Promises to handle data retrieval and processing.

* **Dynamic Search & Filtering:**
  Provides live filtering of cafes by name, updating both the sidebar list and displayed results.

* **User Interaction:**
  Enables navigation to selected cafes by clicking on list items, updating the map view and opening popups.

* **Responsive Layout:**
  Sidebar-based interface built with CSS Flexbox for structured navigation between the list and the map.

## Technologies Used

* **HTML5** – Application structure
* **CSS3 (Flexbox)** – Layout and styling
* **Vanilla JavaScript** – Core logic and DOM manipulation
* **Leaflet.js** – Interactive maps
* **Overpass API** – OpenStreetMap data retrieval

## How to Run

Simply open `index.html` in any modern web browser.
The application will fetch data from the Overpass API and display cafes on the map.

## Notes

This project focuses on:

* Working with external APIs
* Handling asynchronous JavaScript
* Building interactive map-based user interfaces

It was developed as part of my learning process in web development.
