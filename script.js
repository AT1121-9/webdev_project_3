
"use strict";

// Questions button
document.addEventListener("DOMContentLoaded", function () {
  const questionsButton = document.getElementById("questions-button");

  if (questionsButton) {
    questionsButton.onclick = function () {
      alert("If you have questions, contact me at:\naiden.tong2009@gmail.com");
    };
  }
});

// Google Maps initialization
window.initMap = function () {
  const mapElement = document.getElementById("map");

  if (!mapElement) {
    return;
  }

  // Create the map centered on Illinois Institute of Technology
  const map = new google.maps.Map(mapElement, {
    center: { lat: 41.8316, lng: -87.6273 },
    zoom: 15,
    mapTypeId: "roadmap"
  });

  // Add a marker
  const marker = new google.maps.Marker({
    position: { lat: 41.8316, lng: -87.6273 },
    map: map,
    title: "Illinois Institute of Technology"
  });

  // Add an information window
  const infoWindow = new google.maps.InfoWindow({
    content: "<h2>Illinois Institute of Technology</h2><p>Located in Chicago, Illinois.</p>"
  });

  // Open the information window when the marker is clicked
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
  }
};
