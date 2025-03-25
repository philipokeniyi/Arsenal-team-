const myTeam = document.getElementById("team");
const mySport = document.getElementById("sports");
const myYear = document.getElementById("year");
const myCoach = document.getElementById("head-coach");
const myTeamCard = document.getElementById("my-players-cards");
const theDropdown = document.getElementById("my-players");

const arsenalTeam = {
  team: "Arsenal",
  sport: "Football",
  year: "2023 / 24",
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Mikel Arteta",
    matches: 7,
  },
  players: [
    {
      name: "Aaron Ramsdale",
      position: "goalkeeper",
      number: 1,
      country: "England",
      image: {
        src: "./picture/AR.png",
        alt: "Aaron Ramsdale",
      },
      isCaptain: false,
    },
    {
      name: "David Raya",
      position: "goalkeeper",
      number: 22,
      country: "Spain",
      image: {
        src: "./picture/DR.png",
        alt: "David Raya",
      },
      isCaptain: false,
    },
    {
      name: "Ben White",
      position: "defender",
      number: 4,
      country: "England",
      image: {
        src: "./picture/bw.png",
        alt: "Ben White",
      },
      isCaptain: false,
    },
    {
      name: "Gabriel Magalhães",
      position: "defender",
      number: 6,
      country: "Brazil",
      image: {
        src: "./picture/gm.png",
        alt: "Gabriel Magalhães",
      },
      isCaptain: false,
    },
    {
      name: "William Saliba",
      position: "defender",
      number: 2,
      country: "France",
      image: {
        src: "./picture/ws.png",
        alt: "William Saliba",
      },
      isCaptain: false,
    },
    {
      name: "Jakub Kiwior",
      position: "defender",
      number: 15,
      country: "Poland",
      image: {
        src: "./picture/jk.png",
        alt: "Jakub Kiwior",
      },
      isCaptain: false,
    },
    {
      name: "Takehiro Tomiyasu",
      position: "defender",
      number: 18,
      country: "Japan",
      image: {
        src: "./picture/tt.png",
        alt: "Takehiro Tomiyasu",
      },
      isCaptain: false,
    },
    {
      name: "Jurriën Timber",
      position: "defender",
      number: 12,
      country: "Netherlands",
      image: {
        src: "./picture/jt.png",
        alt: "Jurriën Timber",
      },
      isCaptain: false,
    },
    {
      name: "Cédric Soares",
      position: "defender",
      number: 17,
      country: "Portugal",
      image: {
        src: "./picture/cs.png",
        alt: "Cédric Soares",
      },
      isCaptain: false,
    },
    {
      name: "Thomas Partey",
      position: "midfielder",
      number: 5,
      country: "Ghana",
      image: {
        src: "./picture/tp.png",
        alt: "Thomas Partey",
      },
      isCaptain: false,
    },
    {
      name: "Martin Ødegaard",
      position: "midfielder",
      number: 8,
      country: "Norway",
      image: {
        src: "./picture/mo.png",
        alt: "Martin Ødegaard",
      },
      isCaptain: true,
    },
    {
      name: "Emile Smith Rowe",
      position: "midfielder",
      number: 10,
      country: "England",
      image: {
        src: "./picture/sr.png",
        alt: "Emile Smith Rowe",
      },
      isCaptain: false,
    },
    {
      name: "Jorginho",
      position: "midfielder",
      number: 20,
      country: "Italy",
      image: {
        src: "./picture/j.png",
        alt: "Jorginho",
      },
      isCaptain: false,
    },
    {
      name: "Fábio Vieira",
      position: "midfielder",
      number: 21,
      country: "Portugal",
      image: {
        src: "./picture/fv.png",
        alt: "Fábio Vieira",
      },
      isCaptain: false,
    },
    {
      name: "Mohamed Elneny",
      position: "midfielder",
      number: 25,
      country: "Egypt",
      image: {
        src: "./picture/me.png",
        alt: "Mohamed Elneny",
      },
      isCaptain: false,
    },
    {
      name: "Kai Havertz",
      position: "midfielder",
      number: 29,
      country: "Germany",
      image: {
        src: "./picture/kh.png",
        alt: "Kai Havertz",
      },
      isCaptain: false,
    },
    {
      name: "Declan Rice",
      position: "midfielder",
      number: 41,
      country: "England",
      image: {
        src: "./picture/drice.png",
        alt: "Declan Rice",
      },
      isCaptain: false,
    },
    {
      name: "Bukayo Saka",
      position: "forward",
      number: 7,
      country: "England",
      image: {
        src: "./picture/bs.png",
        alt: "Bukayo Saka",
      },
      isCaptain: false,
    },
    {
      name: "Gabriel Jesus",
      position: "forward",
      number: 9,
      country: "Brazil",
      image: {
        src: "./picture/gj.png",
        alt: "Gabriel Jesus",
      },
      isCaptain: false,
    },
    {
      name: "Gabriel Martinelli",
      position: "forward",
      number: 11,
      country: "Brazil",
      image: {
        src: "./picture/gmart.png",
        alt: "Gabriel Martinelli",
      },
      isCaptain: false,
    },
    {
      name: "Eddie Nketiah",
      position: "forward",
      number: 14,
      country: "England",
      image: {
        src: "./picture/en.png",
        alt: "Eddie Nketiah",
      },
      isCaptain: false,
    },
    {
      name: "Leandro Trossard",
      position: "forward",
      number: 19,
      country: "Belgium",
      image: {
        src: "./picture/lt.png",
        alt: "Leandro Trossard",
      },
      isCaptain: false,
    },
    {
      name: "Reiss Nelson",
      position: "forward",
      number: 24,
      country: "England",
      image: {
        src: "./picture/rn.png",
        alt: "Reiss Nelson",
      },
      isCaptain: false,
    },
    {name: "Mikel Arteta",
    position: "coach",
    country: "Spain",
    image: {
        src: "./picture/ma.png",
        alt: "Mikel Arteta"
    }}
  ],
};

Object.freeze(arsenalTeam);
const { team, sport, year, players } = arsenalTeam;
const { coachName } = arsenalTeam.headCoach;

myTeam.textContent = team;
mySport.textContent = sport;
myCoach.textContent = coachName;
myYear.textContent = year;

const theSetPlayerCards = (arr = players) => {
  myTeamCard.innerHTML += arr
    .map(
      ({ name, position, country, image, number, isCaptain }) =>
        `
    <div class="player">
    <div class="img">
            <img src="${image.src}" alt="${image.alt}" />
          </div>
      <h2>${isCaptain ? "&copy" : ""} ${name} </h2>
      <p>Position: ${position}</p>
      <p>Number: ${number}</p>
      <p>Country: ${country}</p>
    </div>
    `
    )
    .join("");
};
theDropdown.addEventListener("change", (e) => {
  myTeamCard.innerHTML = "";

  switch (e.target.value) {
    case "forward":
      theSetPlayerCards(
        players.filter((player) => player.position === "forward")
      );
      break;

    case "midfielder":
      theSetPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      theSetPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      theSetPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
    case "coach":
      theSetPlayerCards(
        players.filter((player) => player.position === "coach")
      );
      break;
    default:
      theSetPlayerCards();
      break;
  }
});
