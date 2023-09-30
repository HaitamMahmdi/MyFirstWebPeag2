let sectionsNames = [
  `How can I Help`,
  `Call Us`,
  `Youer a Cuont`,
  `Ouer Ofurs`,
  `Send a Mesag`,
  `Statings`,
  `See Whte is New`,
  `Exsit`,
];
let icons = [
  "fa-solid fa-circle-info",
  "fa-solid fa-phone",
  "fa-solid fa-user",
  "fa-solid fa-coins",
  "fa-solid fa-envelope",
  "fa-solid fa-gear",
  "fa-regular fa-newspaper",
  "fa-solid fa-circle-xmark",
];
let barSid = document.querySelector(`#sid_ber`);
barSid.addEventListener(`click`, function () {
  if (barSid.hasAttribute(`yes`) === false) {
    barSid.setAttribute(`yes`, ``);
    let barSidTable = document.createElement(`div`);
    barSidTable.setAttribute(`calss`, `barSidTable`);
    let barSidSctonsul = document.createElement(`ul`);
    let iExsit = document.createElement(`li`);
    iExsit.style.cssText = `padding: 20px;
    cursor: pointer;
    font-size: 25px;
    display: flex;
        align-items: center;    `;
    for (let i = 0; i < 7; i++) {
      let barSidSctonsil = document.createElement(`li`);
      let iconsForBars = document.createElement(`i`);
      iconsForBars.setAttribute(`class`, `${icons[i]}`);
      let barSidSctonsilLinks = document.createElement(`a`);
      barSidSctonsilLinks.setAttribute(
        `href`,
        `http://127.0.0.1:5500/Html.html`
      );
      barSidSctonsilLinks.textContent = `${sectionsNames[i]}`;
      barSidSctonsil.appendChild(iconsForBars);
      barSidSctonsil.appendChild(barSidSctonsilLinks);
      barSidSctonsul.appendChild(barSidSctonsil);
      iconsForBars.style.cssText = `margin-right: 10px;
    color: #b620e1;`;
      iconsForBars.setAttribute(`class`, `${icons[i]}`);
      barSidSctonsil.style.cssText = `    padding: 20px;
      cursor: pointer;
    font-size: 25px;
    border-bottom: 0.5px solid purple;
    display: flex;
}`;
      barSidSctonsil.onmouseenter = () => {
        barSidSctonsil.style.cssText = `    padding: 20px;
        cursor: pointer;
    font-size: 25px;
    border-bottom: 0.5px solid purple;
    display: flex;
    background-color: #842ca154;
    padding-left: 50px;
    transition: 0.3s;`;
      };
      barSidSctonsil.onmouseleave = () => {
        barSidSctonsil.style.cssText = `    padding: 20px;
        cursor: pointer;
    font-size: 25px;
    border-bottom: 0.5px solid purple;
    display: flex;
     transition: 0.3s;`;
      };
    }
    let a = document.createElement(`a`);
    a.textContent = sectionsNames[7];
    let o = document.createElement(`i`);
    o.setAttribute(`class`, `${icons[7]}`);
    o.style.cssText = `    margin: 0 10px 0px 0px;
    font-size: 25px;color: #b620e1;`;
    iExsit.appendChild(o);
    iExsit.appendChild(a);
    barSidSctonsul.appendChild(iExsit);
    barSidTable.appendChild(barSidSctonsul);
    document.querySelector(`header`).appendChild(barSidTable);
    barSidTable.style.cssText = `        position: absolute;
    z-index: 50;
    top: 100%;
    background: white;
    right: 0;
    transition: 0.3s;
    max-width: 100%;
    min-width: 35%;
    opacity: 0%;`;

    if (window.screen.width <= 768) {
      barSidTable.style.setProperty(`width`, `100%`);
    }

    setTimeout(() => {
      barSidTable.style.setProperty(`opacity`, `100%`);
    }, 0.3);
    iExsit.addEventListener(`click`, function () {
      barSidTable.style.setProperty(`opacity`, `0%`);
      barSid.removeAttribute(`yes`);
      setTimeout(() => {
        barSidTable.remove();
      }, 1000);
    });
  }
});

let howWeAerContant = document.querySelector(
  `main div.continer div.how-we-are`
);
/*
howWeAerContant.remove();
let howWeAerContiner = document.querySelector(`main div.continer `);
let whyUs = document.querySelector(`#whyUs`);
window.onscroll = () => {
  if (scrollY >= 300 && howWeAerContiner.hasAttribute("true") === false) {
    howWeAerContiner.setAttribute(`true`, ``);
    howWeAerContiner.prepend(howWeAerContant);
    howWeAerContant.style.cssText = `opacity:100%;transition: 0.3s;position: relative;
    top: 0px;`;
    howWeAerContant.children[0].style.cssText = `transform: translateY(20px) ;opacity:0% ;transition: 0.3s`;
    setTimeout(() => {
      howWeAerContant.children[0].style.cssText = `transform: translateY(0px); opacity:100% ;transition: 0.3s`;
    }, 500);
    let introdchon = document.querySelector(`#introdchon`);
    for (let i = 0; i < introdchon.children.length; i++) {
      introdchon.children[
        i
      ].style.cssText = `transform: translateY(20px) ;opacity:0% ;transition: 0.3s`;
    }
    setTimeout(() => {
      introdchon.children[0].style.cssText = `transform: translateY(0px) ;opacity:100% ;transition: 0.3s`;
    }, 900);
    setTimeout(() => {
      introdchon.children[1].style.cssText = `transform: translateY(0px) ;opacity:100% ;transition: 0.3s`;
    }, 700);
  }
};
*/
let explinengImg = document.querySelectorAll(`.apirsAnimhon`);
let infodiv = document.querySelectorAll(`.info`);

for (let i = 0; i < document.querySelectorAll(`.whyUsStyle`).length; i++) {
  document
    .querySelectorAll(`.whyUsStyle`)
    .item(i)
    .addEventListener(`mouseover`, function () {
      explinengImg[i].style.cssText = `  animation-play-state: running;
`;
      infodiv[i].style.cssText = `  animation-play-state: running`;
    });
}
/*


document.querySelector(`.cstmaors`).addEventListener(`mouseover`, () => {
  for (let i = 0; i < document.querySelectorAll(`.user`).length; i++) {
    document
      .querySelectorAll(`div.user`)
      .item(
        i
      ).style.cssText = `animation-play-state: running; animation-delay: ${i};`;
  }
});
*/
