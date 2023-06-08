
// Tabellone per la tombola
const tabellone = document.createElement('table');
tabellone.setAttribute('border', '1');

// Righe e Colonne
let numeroCella = 1;
for (let i = 0; i < 10; i++) {
  const riga = document.createElement('tr');

  for (let j = 0; j < 9; j++) {
    const colonna = document.createElement('td');
    colonna.textContent = numeroCella;
    riga.appendChild(colonna);
    numeroCella++;
  }

  tabellone.appendChild(riga);
}

// Inserimento Tabellone nella Pagina
const contenitoreTabellone = document.getElementById('contenitore-tabellone'); // Sostituisci con l'ID del tuo contenitore
contenitoreTabellone.appendChild(tabellone);

// Bottone
const bottoneEstrai = document.createElement('button');
bottoneEstrai.textContent = 'Estrai Numero';
bottoneEstrai.addEventListener('click', estraiNumeroCasuale);

// Array per memorizzare i numeri estratti
const numeriEstratti = [];
// Variabile booleana per tenere traccia dello stato di estrazione di ogni numero
const numeriEstrattiStato = [];

// Funzione Estrazione Numeri
function estraiNumeroCasuale() {
    if (numeriEstratti.length === 90) {
      alert('Sono stati estratti tutti i numeri possibili.');
      return;
    }

  let numeroCasuale;
  do {
    numeroCasuale = Math.floor(Math.random() * 90) + 1;
  } while (numeriEstrattiStato[numeroCasuale - 1]);

  console.log('Numero estratto:', numeroCasuale);

  numeriEstratti.push(numeroCasuale);
  numeriEstrattiStato[numeroCasuale - 1] = true;

  // Evidenziatore Cella Estratta
  const celleTabellone = document.querySelectorAll('td');
  celleTabellone.forEach((cella) => {
    const numeroCella = parseInt(cella.textContent);
    if (numeriEstrattiStato[numeroCella - 1]) {
      cella.classList.add('evidenziata');
    }
  });
  // Ragionamento NUmeri SMorfia
  const scrittaNumero = document.getElementById("scritta-numero");
  scrittaNumero.textContent = scritteNumeri[numeroCasuale - 1];
  const smorfia = document.querySelector('p');
 const contalert = smorfia.textContent;
alert(contalert);

}


// Aggiunta del bottone alla pagina
const contenitoreBottone = document.getElementById('contenitore-bottone'); // Sostituisci con l'ID del tuo contenitore
contenitoreBottone.appendChild(bottoneEstrai);


// Creazione del tabellone piccolo
const tabellonePiccolo = document.createElement('table');
tabellonePiccolo.setAttribute('border', '1');

// Righe e Colonne
const numeriTabellonePiccolo = generaNumeriCasuali(18, 1, 90);
let numeroCellaPiccolo = 0;
for (let i = 0; i < 3; i++) {
  const rigaPiccola = document.createElement('tr');

  for (let j = 0; j < 6; j++) {
    const colonnaPiccola = document.createElement('td');
    colonnaPiccola.textContent = numeriTabellonePiccolo[numeroCellaPiccolo];
    rigaPiccola.appendChild(colonnaPiccola);
    numeroCellaPiccolo++;
  }

  tabellonePiccolo.appendChild(rigaPiccola);
}

// Aggiunta del tabellone piccolo alla pagina
const contenitoreTabellonePiccolo = document.getElementById('contenitore-tabellone-piccolo'); // Sostituisci con l'ID del tuo contenitore
contenitoreTabellonePiccolo.appendChild(tabellonePiccolo);

// Funzione per generare numeri casuali nella cartella
function generaNumeriCasuali(quantiNumeri, min, max) {
  const numeriCasuali = [];
  while (numeriCasuali.length < quantiNumeri) {
    const numeroCasuale = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!numeriCasuali.includes(numeroCasuale)) {
      numeriCasuali.push(numeroCasuale);
    }
  }
  return numeriCasuali;
}
function altrecartelle() {
    let numeroCopieInput = document.getElementById('numeroCopie');
    let numeroCopie = parseInt(numeroCopieInput.value);
  
    let contenitoreCopieTabella = document.getElementById('contenitoreCopieTabella');
    contenitoreCopieTabella.innerHTML = '';
  
    for (let i = 0; i < numeroCopie; i++) {
      
      const tabellonePiccolo = document.createElement('table');
      tabellonePiccolo.setAttribute('border', '1');
  
      
      const numeriTabellonePiccolo = generaNumeriCasuali(18, 1, 90);
      let numeroCellaPiccolo = 0;
      for (let i = 0; i < 3; i++) {
        const rigaPiccola = document.createElement('tr');
  
        for (let j = 0; j < 6; j++) {
          const colonnaPiccola = document.createElement('td');
          colonnaPiccola.textContent = numeriTabellonePiccolo[numeroCellaPiccolo];
          rigaPiccola.appendChild(colonnaPiccola);
          numeroCellaPiccolo++;
        }
  
        tabellonePiccolo.appendChild(rigaPiccola);
      }
  
      
      contenitoreCopieTabella.appendChild(tabellonePiccolo);
    }
  }
  
