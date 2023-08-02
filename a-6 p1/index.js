let allData = [];

const showAllData = () => {
  const url = `https://openapi.programming-hero.com/api/ai/tools`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allData = data.data.tools;
      showSingleData(allData.slice(0, 6)); // slice 6 cards
    });
};

2

const showSingleData = (data) => {
  const cardContainer = document.getElementById("card-body");
  cardContainer.innerHTML='';

  data.forEach((singleData) => {
    const { features, image, name, published_in } = singleData;
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
      <div class="card h-100 p-3">
        <img src="${image}" class="card-img-top h-100 rounded" alt="...">
        <div class="card-body">
          <h5 class="card-title">Features</h5>
          <p class="card-text">1.${features[0]}</p>
          <p class="card-text">2.${features[1]}</p>
          <p class="card-text">3.${features[2]}</p>
          <hr>
          <div class="d-flex justify-content-between">
            <div>
              <h4 class="fw-900">${name}</h4>
              <div class="d-flex gap-3">
                <p><i class="fa fa-calendar" aria-hidden="true"></i></p>
                <p>${published_in}</p>
              </div>
            </div>
            <div>
            <i onclick="showDetails('${singleData.id}')" class="fa fa-arrow-right border rounded-circle p-2 hover-effect" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });


  
};

showAllData();

3


const showAllButton = document.getElementById("show-all");
showAllButton.addEventListener("click", () => {
  showSingleData(allData); // show all items when button is clicked
});

const showAllButton1 = document.getElementById("show-all");
const loadersSection = document.getElementById("loaders");
showAllButton.addEventListener("click", () => {
  loadersSection.classList.remove("d-none"); // show the spinner
  const cardSection = document.getElementById("card-body");
  cardSection.classList.add("d-none"); // hide the card section
  setTimeout(() => {
    showSingleData(allData); // show all items when data is loaded
    loadersSection.classList.add("d-none"); // hide the spinner
    cardSection.classList.remove("d-none"); // show the card section
  }, 1000); // simulate 1 seconds delay to show the spinner
});


4


const showDetails = (id)
 =>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
  fetch(url)
  .then(res => res.json())
  .then(data => showModal(data.data))
}
    const showModal = singleData =>{
      console.log(singleData);
      const modalBody = document.getElementById("modal-body");
      const {logo,image_link, description, image, name, published_in, url } = singleData;
       modalBody.innerHTML = `
       <div class="card h-100 p-3 col">
          <img src="${image_link?image_link[0]:image_link[1]}" class="card-img-top  rounded" alt="...">
          <div class="card-body">
            <h5 class="card-title">Features</h5>
            <p class="card-text"></p>
            <p class="card-text"></p>
            <p class="card-text"></p>
            <hr>
          </div>
        </div>   
        <div class="card h-100 p-3 col">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
       `;
       const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
       modal.show();
    } 
	
	5