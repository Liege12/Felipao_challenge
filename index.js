let herois = [
  { name: "Batman", xp: 1050 },
  { name: "Superman", xp: 3500 },
  { name: "Flash", xp: 6000 },
  { name: "Aquaman", xp: 7500 },
  { name: "Mulher-Maravilha", xp: 8500 },
  { name: "Lanterna Verde", xp: 9500 },
  { name: "Cyborg", xp: 11000 },
];

for (let i = 0; i < herois.length; i++) {
  let nivel = "";
  let xp = herois[i].xp;
  let name = herois[i].name;

  if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(
    "O heroi de nome " +
      name +
      " tem " +
      xp +
      " XP e esta no nivel de " +
      nivel,
  );
}
