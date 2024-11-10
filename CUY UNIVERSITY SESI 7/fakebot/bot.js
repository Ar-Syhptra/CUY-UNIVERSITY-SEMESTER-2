const pertanyaan = document.getElementById("pertanyaan");
const jawaban = document.getElementById("jawaban");

let init = 0;

const botSay = (data) => {
  return [
    "halo, perkenalkan nama saya syahputra bot, siapa kamu??",
    `halo ${data?.nama}, berapa usia kamu?`,
    `ohh ${data?.usia}, kalo hobi kamu apa??`,
    `owhh keren bgt sama dong aku juga ${data?.hobi}, btw punya pacar gak?`,
    `owhhh ${data?.pacar}, okok`,
  ];
};
pertanyaan.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init == 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(jawabanUser) {
  console.log({ userData: userData });
  setTimeout(() => {
    pertanyaan.innerHTML = botSay(jawabanUser)[init];
  }, [1000]);
  userData.push(jawaban.value);
  jawaban.value = "";
}

function finishing() {
  pertanyaan.innerHTML = `Thank u ya ${userData[0]} udah main ke syahputra bot,
  nanti kita ${userData[2]} bareng yaa sama aku`;
  jawaban.value = "siap thanks juga";
}

function botEnd() {
  window.location.reload();
}
