
const map = L.map("map").setView([40.6401, 22.9444], 14);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/">OSM</a> contributors'
}).addTo(map);


fetch("https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(node[amenity=cafe](40.55,22.85,40.70,23.00);way[amenity=cafe](40.55,22.85,40.70,23.00);relation[amenity=cafe](40.55,22.85,40.70,23.00););out center;")
  .then(res => res.json())
  .then(data => {
    const cafes = data.elements.map(el => ({
      name: el.tags.name || "Άγνωστο Καφέ",
      coords: [el.lat || el.center.lat, el.lon || el.center.lon]
    }));

    loadCafes(cafes);
    enableSearch(cafes);
  });


function loadCafes(cafes) {
  const cafeList = document.getElementById("cafe-list");
  cafeList.innerHTML = "";

  cafes.forEach(cafe => {
    const marker = L.marker(cafe.coords).addTo(map)
      .bindPopup(`<b>${cafe.name}</b>`);

    const li = document.createElement("li");
    li.textContent = cafe.name;
    li.style.cursor = "pointer";
    li.onclick = () => {
      map.setView(cafe.coords, 17);
      marker.openPopup();
    };
    cafeList.appendChild(li);
  });
}

function enableSearch(cafes) {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = cafes.filter(cafe => cafe.name.toLowerCase().includes(query));
    loadCafes(filtered); 
  });
}

function enableSearch(cafes) {
  const searchInput = document.getElementById("search");

  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = cafes.filter(cafe => cafe.name.toLowerCase().includes(query));
    loadCafes(filtered); 
  });
}
