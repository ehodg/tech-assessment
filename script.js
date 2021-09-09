const cashBack = document.getElementById('cash-back');

const cashBackValue = (percentage) => {
  for(let i=0; i<percentage.length; i++){
    cashBack.innerHTML = `${percentage[i].value} "% cash back`
  }
}

const randomNumber = (stores) => {
  let randNum = []
  for(let i=0; i<6; i++) {
    randNum.push(Math.floor(Math.random() * stores))
  }
  return randNum;
}

let percentCashBack = randomNumber(6);
console.log(percentCashBack);


function openPage(pageName, element) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("cards");
  for(i=0; i<tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for(i=0; i<tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "flex";
  element.style.backgroundColor = "grey"
}

// const tabs = document.querySelectorAll('[data-tab-value]')
// const tabInfos = document.querySelectorAll('[data-tab-info')

// console.log(tabs)
// console.log(tabInfos)
// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.tabValue);
//     tabInfos.forEach(tabInfo => {
//       tabInfo.classList.remove('active')
//     })
//     target.classList.add('active');
//     console.log(target);
//   })
// })