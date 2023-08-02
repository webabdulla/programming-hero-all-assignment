// let allData = [];

// const showAllData = () => {
//   const url = `https://openapi.programming-hero.com/api/ai/tools`;

//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       allData = data.data.tools;
//     //  allData.sort((a, b) => new Date(b.published_in) - new Date(a.published_in)); // sort by date
//       showSingleData(allData.slice(0, 6)); // slice 6 cards
//     });
// };

// const showSingleData = (data) => {
//   const cardContainer = document.getElementById("card-body");
//   cardContainer.innerHTML='';

//   data.forEach((singleData) => {
//     const { features, image, name, published_in,description } = singleData;
//     const card = document.createElement("div");
//     card.classList.add("col");
//     card.innerHTML = `
//       <div class="card h-100 p-3">
//         <img src="${image}" class="card-img-top h-100 rounded" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">Features</h5>
//           <p class="card-text">1.${features[0]}</p>
//           <p class="card-text">2.${features[1]}</p>
//           <p class="card-text">3.${features[2]}</p>
//           <hr>
//           <div class="d-flex justify-content-between">
//             <div>
//               <h4 class="fw-900">${name}</h4>
//               <div class="d-flex gap-3">
//                 <p><i class="fa fa-calendar" aria-hidden="true"></i></p>
//                 <p>${published_in}</p>
//               </div>
//             </div>
//             <div>
//               <i onclick="showDetails(${singleData.id})" class="fa fa-arrow-right border rounded-circle p-2 hover-effect"  data-bs-toggle="modal" data-bs-target="#exampleModal" aria-hidden="true"></i>
//             </div>
//           </div>
//         </div>
//       </div>
//     `;
//     cardContainer.appendChild(card);
//   });

  
// };

// showAllData();

// const showAllButton = document.getElementById("show-all");
// showAllButton.addEventListener("click", () => {
//   showSingleData(allData); // show all items when button is clicked
// });

// const loadersButton = document.getElementById("loaders-btn");
// loadersButton.addEventListener("click", () => {
//   loadersSection.classList.remove("d-none"); // display the loader
//   const cardSection = document.getElementById("card-body");
//   cardSection.classList.add("d-none"); // hide the card section
//   setTimeout(() => {
//     showSingleData(allData); // show all items when data is loaded
//     loadersSection.classList.add("d-none"); // hide the loader
//     cardSection.classList.remove("d-none"); // show the card section
//   }, 2000); 
// });

// // sort by date
// // const sortByDateButton = document.getElementById("sort-by-date");
// // sortByDateButton.addEventListener("click", () => {
// //   allData.sort((a, b) => new Date(a.$(published_in)) - new Date(b.published_in)); // sort by date
// //   showSingleData(allData.slice(0, 6)); // slice 6 cards
// // });

// const showDetails = (id) => {
//     const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         const { features, image, name, published_in, description } = data.data.tool;
//         const modalBody = document.getElementById("modal-body");
//         modalBody.innerHTML = `
//           <div class="row">
//             <div class="col-md-5">
//               <img src="${image}" class="img-fluid rounded" alt="">
//             </div>
//             <div class="col-md-7">
//               <h4>${name}</h4>
//               <div class="d-flex gap-3">
//                 <p><i class="fa fa-calendar" aria-hidden="true"></i></p>
//                 <p>${published_in}</p>
//               </div>
//               <p>${description}</p>
//               <ul>
//                 <li>${features[0]}</li>
//                 <li>${features[1]}</li>
//                 <li>${features[2]}</li>
//               </ul>
//             </div>
//           </div>
//         `;
//       })
//       .catch((error) => console.error(error));
//   };
  
// ignore koris uporer gula nicher gula valo kore dekh..baler modal khankir pola modal kajkorse na

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

const showSingleData = (data) => {
  const cardContainer = document.getElementById("card-body");
  cardContainer.innerHTML='';

  data.forEach((singleData) => {
    const { features, image, name, published_in } = singleData;
    const card = document.createElement("div");
    card.classList.add("col");
    card.innerHTML = `
      <div class="card h-100 p-3">
        <img src="${image}" class="card-img-top rounded" alt="...">
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
              <i onclick="showDetails(${singleData})" class="fa fa-arrow-right border rounded-circle p-2 hover-effect" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    cardContainer.appendChild(card);
  });

  
};

showAllData();

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
  }, 1000); // simulate 2 seconds delay to show the spinner
});

const showDetails = id =>{
  const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  console.log(url)
}
