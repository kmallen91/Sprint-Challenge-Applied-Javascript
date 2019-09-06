// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function header(object) {

    const header = document.createElement('div');
    const date = document.createElement('span');
    const headTitle = document.createElement('h1');
    const temp = document.createElement('span');

    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    header.appendChild(date);
    header.appendChild(headTitle);
    header.appendChild(temp);

    date.textContent = 'MARCH 28, 2019';
    headTitle.textContent = 'Lambda Times';
    temp.textContent = '98°';

    return header;
}

const headerContainer = document.querySelector('.header-container');

headerContainer.append(header());