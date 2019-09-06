// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.



function createCard(object){

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const cardImg = document.createElement('img');
    const by = document.createElement('span');

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');
    
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(cardImg);
    author.appendChild(by);

    headline.textContent = `${object.headline}`;
    author.textContent = `By ${object.authorName}`;
    cardImg.src = `${object.authorPhoto}`;

    return card;
}

const cards = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then (res =>{
    console.log(res.data.articles);
    let articles = Object.entries(res.data.articles);
    console.log(articles);
    let javascript = articles[0][1],
         bootstrap = articles[1][1],
         technology = articles[2][1],
         jquery = articles[3][1],
         node = articles[4][1];
    console.log(javascript);
    javascript.forEach(e=>{
        let newCard = createCard(e)
        cards.appendChild(newCard);
    })
    bootstrap.forEach(e=>{
        let newCard = createCard(e)
        cards.appendChild(newCard);
    })
    technology.forEach(e=>{
        let newCard = createCard(e)
        cards.appendChild(newCard);
    })
    jquery.forEach(e=>{
        let newCard = createCard(e)
        cards.appendChild(newCard);
    })
    node.forEach(e=>{
        let newCard = createCard(e)
        cards.appendChild(newCard);
    })
      
        
    })

.catch(error =>{
    document.querySelector('.cards-container').textContent = 'ERROR';
    console.log(error);
})