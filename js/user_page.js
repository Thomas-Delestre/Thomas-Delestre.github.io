import { formatSize} from "./utils.js"


// export function show_user_info(data) {

//   // affichage des données récupérés
//   const data_container = document.createElement("div");
//   data_container.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
//   document.body.appendChild(data_container);

//   //header
//   const header_cont = document.createElement("div")
//   const title = document.createElement("h1")
//   title.textContent = `Welcome ${data.data.user[0].firstName} ${data.data.user[0].lastName}`;
//   header_cont.appendChild(title);
//   document.body.appendChild(header_cont)
//   //boutton log-out
//   const logout_button = document.createElement("button")
//   logout_button.textContent = "Log out"
//   document.body.appendChild(logout_button);
//   logout_button.addEventListener("click", () => {
//     localStorage.removeItem("user_login");
//     window.location.reload();
//   });

//   // SVG ----------

//   const current_date = new Date();
//   let min_date = new Date();
//   let start_xp = 0;
//   let total_xp = 0;
//   min_date.setMonth(min_date.getMonth() - 6);
//   const valid_tx = data.data.transaction.filter((tx) => {
//     const date = new Date(tx.created_at);
//     total_xp += tx.amount;
//     if (date < min_date) start_xp += tx.amount;
//     return date >= min_date
//   })

//   const axe_x = (current_date - min_date) / 100;
//   const axe_y = (total_xp - start_xp) / 100;

//   let current_xp = start_xp;

//   const pts = valid_tx.reduce((acc, tx) => {
//     const current_date = new Date(tx.created_at);
//     let x_loc = (current_date - min_date) / axe_x;
//     let y_loc = (current_xp - start_xp + tx.amount) / axe_y;
//     let x = Math.floor((450 / 100) * x_loc);
//     let y = Math.floor(210 - (210 / 100) * y_loc);
//     current_xp += tx.amount;

//     return `${acc}${x},${y} `;
//   }, "");

//   total_xp = formatSize(total_xp);

//   const section = document.createElement("section");
//   section.id = "profile-section";
//   section.classList.add("vh-100");
//   section.style.backgroundColor = "#508bfc";

//   const container = document.createElement("div");
//   container.classList.add("container", "py-5", "h-100");

//   const row = document.createElement("div");
//   row.classList.add(
//     "row",
//     "justify-content-center",
//     "align-items-center",
//     "h-100"
//   );


//   const col = document.createElement("div");
//   col.classList.add("col-md-8");

//   const card = document.createElement("div");
//   card.classList.add("card");

//   const card_header = document.createElement("div");
//   card_header.classList.add("card-header");
//   card_header.innerHTML = "<h3>Profil Utilisateur</h3>";

//   const card_body = document.createElement("div");
//   card_body.classList.add("card-body");

//   const label_first_name = document.createElement("div");
//   label_first_name.textContent = "Prénom :";
//   label_first_name.style.paddingRight = "10px";
//   const fs_span = document.createElement("span");
//   fs_span.id = "prénom"
//   fs_span.textContent = data.data.user[0].firstName;

//   const label_last_name = document.createElement("div");
//   label_last_name.textContent = "Nom :";
//   label_last_name.style.paddingRight = "10px";
//   const ls_span = document.createElement("span");
//   ls_span.id = "nom"
//   ls_span.textContent = data.data.user[0].lastName;

//   const label_pseudo = document.createElement("div");
//   label_pseudo.textContent = "Pseudo :";
//   label_pseudo.style.paddingRight = "10px";
//   const pseudo_span = document.createElement("span");
//   pseudo_span.id = "pseudo"
//   pseudo_span.textContent = data.data.user[0].login;

//   const profil_section = document.createElement("div");
//   profil_section.classList.add("profil-section");
//   profil_section.innerHTML = `
//   <h4>Informations complémentaires</h4>
//   <p>Level: ${data.data.user[0].events[0].level}</p>
//   <p>Total XP: ${total_xp}</p>
//   `

//   const graph_section = document.createElement("div");
//   graph_section.classList.add("graph-section")
//   graph_section.innerHTML = `
//   <h4>Graphiques</h4>
//   <div class="text-center">
//   ${generate_bar(data.data.user[0].totalUp, data.data.user[0].totalDown, data.data.user[0].auditRatio)}
//   </div>
//   <div>
//   <svg viewBox="0 0 450 210" preserveAspectRatio="none" style="border: 2px solid black;">
//       <polyline id="myLine" fill="none" stroke="#2681DC" stroke-width="2" points="${pt}"></polyline>
//   </svg>
// </div>
//   `;

//   document.body.appendChild(section);
//   section.appendChild(container);
//   section.appendChild(data_container);
//   container.appendChild(row);
//   row.appendChild(col);
//   col.appendChild(card);
//   card.appendChild(card_header);
//   card.appendChild(card_body);
//   card_body.appendChild(label_first_name);
//   card_body.appendChild(fs_span);
//   card_body.appendChild(document.createElement("br"));
//   card_body.appendChild(label_last_name);
//   card_body.appendChild(ls_span);
//   card_body.appendChild(document.createElement("br"));
//   card_body.appendChild(label_pseudo);
//   card_body.appendChild(pseudo_span);
//   card_body.appendChild(profil_section);
//   card_body.appendChild(graph_section);
// }

// function generate_bar(tt_up, tt_down, auditRatio) {
//   const total = tt_up + tt_down;
//   const up_percent = (tt_up / total) * 100;
//   const down_percent = (tt_down / total) * 100;

//   const svg = `
//       <div class="text-center">
//         <pre>${Math.round(auditRatio * 100) / 100}</pre>
//         <svg width="400" height="50" xmlns="http://www.w3.org/2000/svg">
//           <rect width="${up_percent}%" height="50" fill="#D9F7CD" />
//           <text x="5" y="30" fill="black">${formatSize(tt_up)}</text>
//           <text x="${up_percent + 5}%" y="30" fill="black">${tt_up}</text>
//           <rect x="${up_percent}%" width="${down_percent}%" height="50" fill="#FFC7C7" />
//           <text x="${up_percent + 5}%" y="30" fill="black">${formatSize(tt_down)}</text>
//         </svg>
//       </div>
//   `;

//   return svg;
// }


export function show_user_info(data) {
  const userInfoContainer = document.createElement("div");
  userInfoContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;

  const userData = data.data.user[0];
  console.log("🚀 ~ showUserInfo ~ userData:", userData);

  // Merci TheOldestBrother <3

  const currentDate = new Date();
  let minimumDate = new Date();
  let startXP = 0;
  minimumDate.setMonth(minimumDate.getMonth() - 6);
  let totalXP = 0;
  const validTx = data.data.transaction.filter((tx) => {
    const date = new Date(tx.createdAt);
    totalXP += tx.amount;
    if (date < minimumDate) startXP += tx.amount;
    return date >= minimumDate;
  });


  const stepHor = (currentDate - minimumDate) / 100;
  const stepVert = (totalXP - startXP) / 100;

  let currentXP = startXP;

  const points = validTx.reduce((accumulator, tx) => {
    const currentDate = new Date(tx.createdAt);
    let displacementX = (currentDate - minimumDate) / stepHor;
    let displacementY = (currentXP - startXP + tx.amount) / stepVert;
    let x = Math.floor((450 / 100) * displacementX);
    let y = Math.floor(210 - (210 / 100) * displacementY);
    currentXP += tx.amount;

    return `${accumulator}${x},${y} `;
  }, "");
  console.log("🚀 ~ points ~ points:", points);
  // Merci TheOldestBrother <3
  totalXP = formatSize(totalXP);

  const section = document.createElement("section");
  section.id = "profile-section";
  section.classList.add("vh-100");
  section.style.backgroundColor = "#508bfc";

  const container = document.createElement("div");
  container.classList.add("container", "py-5", "h-100");

  const row = document.createElement("div");
  row.classList.add(
    "row",
    "justify-content-center",
    "align-items-center",
    "h-100"
  );

  const col = document.createElement("div");
  col.classList.add("col-md-8");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  cardHeader.innerHTML = "<h3>Profil Utilisateur</h3>";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const nomLabel = document.createElement("label");
  nomLabel.textContent = "Nom:";
  nomLabel.style.paddingRight = "5px";
  const nomSpan = document.createElement("span");
  nomSpan.id = "nom";
  nomSpan.textContent = userData.lastName;

  const prenomLabel = document.createElement("label");
  prenomLabel.textContent = "Prénom:";
  prenomLabel.style.paddingRight = "5px";
  const prenomSpan = document.createElement("span");
  prenomSpan.id = "prenom";
  prenomSpan.textContent = userData.firstName;

  const pseudoLabel = document.createElement("label");
  pseudoLabel.textContent = "Pseudo:";
  pseudoLabel.style.paddingRight = "5px";
  const pseudoSpan = document.createElement("span");
  pseudoSpan.id = "pseudo";
  pseudoSpan.textContent = userData.login;

  const profileSection = document.createElement("div");
  profileSection.classList.add("profile-section");
  profileSection.innerHTML = `
  <h4>Informations complémentaires</h4>
  <p>Level: ${userData.events[0].level}</p>
  <p>Total XP: ${totalXP}</p>
`;

// RESTART HERE ! -----------------------------------------------------------------------------

  const graphSection = document.createElement("div");
  graphSection.classList.add("graph-section");
  graphSection.innerHTML = `
  <h4>Graphiques</h4>
  <div class="text-center">
  ${generateBar(userData.totalUp, userData.totalDown, userData.auditRatio)}
  </div>
    <div>
        <svg viewBox="0 0 450 210" preserveAspectRatio="none" style="border: 2px solid black;">
            <polyline id="myLine" fill="none" stroke="#2681DC" stroke-width="2" points="${points}"></polyline>
        </svg>
    </div>
`;

  const logoutButton = document.createElement("button");
  logoutButton.type = "button";
  logoutButton.classList.add("btn", "btn-primary");
  logoutButton.textContent = "Déconnexion";
  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("user_login");
    window.location.reload();
  });

  document.body.appendChild(section);
  section.appendChild(container);
  section.appendChild(userInfoContainer);
  container.appendChild(row);
  row.appendChild(col);
  col.appendChild(card);
  card.appendChild(cardHeader);
  card.appendChild(cardBody);
  cardBody.appendChild(nomLabel);
  cardBody.appendChild(nomSpan);
  cardBody.appendChild(document.createElement("br"));
  cardBody.appendChild(prenomLabel);
  cardBody.appendChild(prenomSpan);
  cardBody.appendChild(document.createElement("br"));
  cardBody.appendChild(pseudoLabel);
  cardBody.appendChild(pseudoSpan);
  cardBody.appendChild(profileSection);
  cardBody.appendChild(graphSection);
  cardBody.appendChild(logoutButton);
}


function generateBar(totalUp, totalDown, auditRatio) {
  const total = totalUp + totalDown;
  const upPercentage = (totalUp / total) * 100;
  const downPercentage = (totalDown / total) * 100;

  const svg = `
      <div class="text-center">
        <pre>${Math.round(auditRatio * 100) / 100}</pre>
        <svg width="400" height="50" xmlns="http://www.w3.org/2000/svg">
          <rect width="${upPercentage}%" height="50" fill="#D9F7CD" />
          <text x="5" y="30" fill="black">${formatSize(totalUp)}</text>
          <text x="${upPercentage + 5}%" y="30" fill="black">${totalUp}</text>
          <rect x="${upPercentage}%" width="${downPercentage}%" height="50" fill="#FFC7C7" />
          <text x="${upPercentage + 5}%" y="30" fill="black">${formatSize(totalDown)}</text>
        </svg>
      </div>
  `;

  return svg;
}