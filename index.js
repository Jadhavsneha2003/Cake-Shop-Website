let navbar = document.querySelector('.navbar');
document.querySelector('#menu-bar').onclick=() =>{
    navbar.classList.toggle('active');
}



let search = document.querySelector('.search');
document.querySelector('#search').onclick=() =>{
    search.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
  const reviews = [
    {
      text: "Great service and very responsive team!",
      name: "Hardy Devid",
      role: "UI / UX Designer",
      image: "images/Client1.jpg"
    },
    {
      text: "Absolutely delicious cakes! The chocolate truffle was rich and moist—best I've ever had!",
      name: "Lisa Raymond",
      role: "Frontend Developer",
      image: "images/Client2.jpg"
    },
    {
      text: "I'm not usually a fan of desserts, but their red velvet cake converted me! So fresh and perfectly balanced.",
      name: "Mark Peters",
      role: "Product Manager",
      image: "images/Client3.jpg"
    }
  ];

  document.addEventListener("DOMContentLoaded", function () {
  const reviews = document.querySelectorAll(".review-box p");
  reviews.forEach((p) => {
    p.style.fontSize = "50px";
  });
});




  const container = document.getElementById("review-container");

  if (!container) {
    console.error("Element with id 'review-container' not found.");
    return;
  }

  reviews.forEach((review) => {
    const reviewBox = document.createElement("div");
    reviewBox.className = "review-box";
    reviewBox.innerHTML = `
      <div class="client-review">
        <p>${review.text}</p>
      </div>
      <div class="client-info">
        <div class="img">
          <img src="${review.image}" alt="${review.name}">
        </div>
        <div class="clientDetailed">
          <h3>${review.name}</h3>
          <p>${review.role}</p>
        </div>
      </div>
    `;
    container.appendChild(reviewBox);
  });
});

