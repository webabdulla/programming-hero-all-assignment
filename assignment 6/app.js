const loadData =() =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayUser(data))
    }

   const displayUser = user =>{
    console.log(user.data.tools)

    const getCard = document.getElementById('card');
    const divContainer= document.createElement('div');
    divContainer.classList.add('cardBody');
    getCard.innerHTML=`
    <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card h-100">
                <img src=" ${user.data.tools[0].image}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class=" ">Card title</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
                <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
    `
    getCard.appendChild(divContainer);
   }
    loadData();