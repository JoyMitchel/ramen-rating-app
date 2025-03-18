const ramens = [
    { id: 1, name: "Gyukotsu", restaurant: "Ichiran", image: "images/gyukotsu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Kojiro", restaurant: "Menya", image: "images/kojiro.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Naruto", restaurant: "Ramen-ya", image: "images/naruto.jpg", rating: 3, comment: "Good, but a bit salty." },
    { id: 4, name: "Nirvana", restaurant:"Meko", image:"images/nirvana.jpg", rating: 5, comment: "Amazing!" },
    { id: 5, name: "Shoyu", restaurant:"Branch", image: "images/shoyu.jpg", rating: 3, comment:"Good!" }
  ];
  
  function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
  
    ramens.forEach(ramen => {
      const ramenImg = document.createElement("img");
      ramenImg.src = ramen.image;
      ramenImg.alt = ramen.name;
      ramenImg.dataset.id = ramen.id;
      ramenMenu.appendChild(ramenImg);
    });
  }
  
  function handleClick(event) {
    const ramenId = event.target.dataset.id;
    const selectedRamen = ramens.find(ramen => ramen.id == ramenId);
  
    if (selectedRamen) {
      document.getElementById("ramen-name").textContent = `Name: ${selectedRamen.name}`;
      document.getElementById("ramen-restaurant").textContent = `Restaurant: ${selectedRamen.restaurant}`;
      document.getElementById("ramen-rating").textContent = `Rating: ${selectedRamen.rating}`;
      document.getElementById("ramen-comment").textContent = `Comment: ${selectedRamen.comment}`;
    }
  }

  function displayRamens(params) {
    const ramenMenu = document.getElementById ("ramen-menu");

    ramens.forEach (ramen =>{
      const ramenImg = document. createElement("img");
      ramenImg.src = ramen.image;
      ramenImg.alt = ramen.name;
      ramenImg.dataset.id = ramen.id;


      ramenMenu.appendChild(ramenImg);
    })
  }

  function handleClick(event) {
    const ramenId = event.target.dataset.id;
    const selectedRamen = ramens.find(ramen => ramen.id == ramenId);
    if (selectedRamen) {
      document.getElementById("ramen-name").textContent = `Name: ${selectedRamen}`;
      document.getElementById("ramen-restaurant").textContent = `Restaurant: ${selectedRamen}`;
      document.getElementById("ramen-rating").textContent
    }
  }


