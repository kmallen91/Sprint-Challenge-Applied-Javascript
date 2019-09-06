// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(res => {
        console.log(res.data);
        res.data.topics.forEach(e =>{
            let newTab = createTab(e)
            tabs.appendChild(newTab);
            
        })
    })
    .catch(error=>{
        document.querySelector('.tabs').textContent = 'ERROR';
        console.log(error);
    })

function createTab(object){

    const tab = document.createElement('div');
    tab.classList.add('tab');

    tab.textContent = object;

    return tab;
    
}

const tabs = document.querySelector('.tabs');