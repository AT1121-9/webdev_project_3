
"use strict";

// Questions button
document.addEventListener("DOMContentLoaded", function () {
  const questionsButton = document.getElementById("questions-button");

  if (questionsButton) {
    questionsButton.addEventListener("click", function () {
      alert("If you have questions, contact me at:\nYOUR_EMAIL_HERE");
    });
  }

  // Load Google Maps only on the map page
  if (document.getElementById("map")) {
    const mapScript = document.createElement("script");

    mapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBM1-F-BpX660SBK3-Vw9f7AEvTAIH8R&callback=initMap&loading=async";

    mapScript.async = true;
    mapScript.defer = true;

    document.head.appendChild(mapScript);
  }
});

// Google Maps initialization
window.initMap = function () {
  const mapElement = document.getElementById("map");

  if (!mapElement) {
    return;
  }

  // Create the map
  const map = new google.maps.Map(mapElement, {
    center: { lat: 41.8781, lng: -87.6298 },
    zoom: 10,
    mapTypeId: "roadmap"
  });

  // Add a marker
  const marker = new google.maps.Marker({
    position: { lat: 41.8781, lng: -87.6298 },
    map: map,
    title: "Chicago"
  });

  // Add an information window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h2>Chicago, Illinois</h2><p>Explore the city using this interactive map.</p>"
  });

  marker.addListener("click", function () {
    infoWindow.open(map, marker);
  });

  // Roadmap button
  const roadmapButton = document.getElementById("roadmap-button");

  if (roadmapButton) {
    roadmapButton.addEventListener("click", function () {
      map.setMapTypeId("roadmap");
    });
  }

  // Satellite button
  const satelliteButton = document.getElementById("satellite-button");

  if (satelliteButton) {
    satelliteButton.addEventListener("click", function () {
      map.setMapTypeId("satellite");
    });
  }

  // Terrain button
  const terrainButton = document.getElementById("terrain-button");

  if (terrainButton) {
    terrainButton.addEventListener("click", function () {
      map.setMapTypeId("terrain");
    });
  };
};
