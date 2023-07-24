const teams = [];

function enterTeams() {
  while (teams.length < 8) {
    const teamName = prompt(`Digite o nome do Time ${teams.length + 1}`);
    if (teamName && teamName.trim() !== "") {
      teams.push(teamName.trim());
    } else {
      alert("Digite um nome válido para o time!");
    }
  }

  // Depois de obter os 8 times, atualize os grupos e exiba-os na página
  updateGroups();
}

function updateGroups() {
  const groupATeams = document.getElementById("groupATeams");
  const groupBTeams = document.getElementById("groupBTeams");
  groupATeams.innerHTML = "";
  groupBTeams.innerHTML = "";

  for (let i = 0; i < teams.length; i++) {
    const li = document.createElement("li");
    li.textContent = teams[i];
    if (i < 4) {
      groupATeams.appendChild(li);
    } else {
      groupBTeams.appendChild(li);
    }
  }
}

function drawOitavas() {
  const knockoutTeams = document.getElementById("knockoutTeams");
  knockoutTeams.innerHTML = "";

  // Simulando o sorteio das oitavas
  const shuffledTeams = shuffleArray([...teams]);
  for (let i = 0; i < shuffledTeams.length; i += 2) {
    const li = document.createElement("li");
    li.textContent = `${shuffledTeams[i]} vs ${shuffledTeams[i + 1]}`;
    knockoutTeams.appendChild(li);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Chame a função enterTeams() para começar a inserir os nomes dos times quando a página carregar
enterTeams();
