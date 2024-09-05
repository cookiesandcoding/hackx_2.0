import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "../../index.css";
/* global google*/

function FindDoctor() {
    const [map, setMap] = useState(null);
    const [directionsService, setDirectionsService] = useState(null);
    const [directionsRenderer, setDirectionsRenderer] = useState(null);

    // Define user location constant
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 }); // Default location (Jaipur)

    useEffect(() => {
        // Get user's location and store it in a constant
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const location = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setUserLocation(location); 
                    console.log(location); 
                    initMap(location);        
                },
                () => {
                    alert("Geolocation service failed. Defaulting to Jaipur.");
                    initMap(userLocation); 
                }
            );
        } else {
            alert("Your browser doesn't support geolocation.");
            initMap(userLocation); 
        }
    }, [null]);

    function initMap(location) {
       
        const mapInstance = new google.maps.Map(document.getElementById('map'), {
            center: location,
            zoom: 13,
        });
        setMap(mapInstance);

        // Initialize the directions service and renderer
        const directionsServiceInstance = new google.maps.DirectionsService();
        const directionsRendererInstance = new google.maps.DirectionsRenderer({
            map: mapInstance,
            panel: document.getElementById('directions'),
        });
        setDirectionsService(directionsServiceInstance);
        setDirectionsRenderer(directionsRendererInstance);

        // Initialize the search boxes
        const hospitalSearchBox = new google.maps.places.SearchBox(document.getElementById('hospitalSearchBox'));
        const doctorSearchBox = new google.maps.places.SearchBox(document.getElementById('doctorSearchBox'));

        // Add listener for hospital search
        hospitalSearchBox.addListener('places_changed', () => {
            const places = hospitalSearchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            calculateDistances(location, places);
        });

        // Add listener for doctor search
        doctorSearchBox.addListener('places_changed', () => {
            const places = doctorSearchBox.getPlaces();
            if (places.length === 0) {
                return;
            }
            calculateDistances(location, places);
        });
    }

    function calculateDistances(origin, results) {
        const service = new google.maps.DistanceMatrixService();
        const distanceRequests = results.map((place) => ({
            origins: [origin],
            destinations: [place.geometry.location],
            travelMode: 'DRIVING',
        }));

        const distancePromises = distanceRequests.map((request, index) => {
            return new Promise((resolve, reject) => {
                service.getDistanceMatrix(request, (response, status) => {
                    if (status === 'OK') {
                        const result = response.rows[0].elements[0];
                        resolve({
                            place: results[index],
                            distance: result.distance.text,
                            duration: result.duration.text,
                        });
                    } else {
                        reject(status);
                    }
                });
            });
        });

        Promise.all(distancePromises)
            .then((distances) => {
                distances.sort((a, b) => {
                    const distanceA = parseFloat(a.distance.replace(' km', ''));
                    const distanceB = parseFloat(b.distance.replace(' km', ''));
                    return distanceA - distanceB;
                });
                displayResults(origin, distances.map((d) => ({
                    ...d.place,
                    distance: d.distance,
                    duration: d.duration,
                })));
            })
            .catch((error) => {
                console.error('Error calculating distances:', error);
            });
    }

    function displayResults(origin, results, type = 'hospital') {
        const resultsDiv = document.getElementById('results');
        resultsDiv.innerHTML = ''; // Clear previous results

        if (results.length > 0) {
            results.forEach(function (place, index) {
                if (index < 5) { // Display top 5 results
                    const placeDiv = document.createElement('div');
                    placeDiv.classList.add(type + '-info');
                    placeDiv.innerHTML = `<h3>${place.name}</h3><p>${place.vicinity}</p><p class="distance-info">Distance: ${place.distance}, Duration: ${place.duration}</p>`;
                    resultsDiv.appendChild(placeDiv);

                    placeDiv.addEventListener('click', function () {
                        if (!directionsService || !directionsRenderer) {
                            console.error("Directions service or renderer not initialized");
                            return;
                        }
                        const request = {
                            origin: origin,
                            destination: place.geometry.location,
                            travelMode: 'DRIVING',
                        };
                        directionsService.route(request, function (result, status) {
                            if (status === 'OK') {
                                directionsRenderer.setDirections(result);
                            } else {
                                console.error('Directions request failed due to ' + status);
                            }
                        });
                    });
                }
            });
        } else {
            resultsDiv.innerHTML = '<p>No ' + type + 's found.</p>';
        }
    }

    return (
        <div>
            <Header />
            <br />
            <div>
                <div id="searchContainer">
                    <input id="hospitalSearchBox" type="text" placeholder="Search for hospitals" />
                    <input id="doctorSearchBox" type="text" placeholder="Search for doctors" />
                </div>
                <div id="map"></div>
                <div id="info">
                    <h2>Nearby Hospitals</h2>
                    <div id="results"></div>
                </div>
                <div id="directionsPanel">
                    <h3>Directions</h3>
                    <div id="directions" className="directions-info"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FindDoctor;
