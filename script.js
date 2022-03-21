/*
1. definire un array di oggetti che rappresentano i membri del team
2. Ogni membro: Nome, Ruolo e Foto
3. stampare dinamicamente una card per ogni membro del team

BONUS:
Utilizzare gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team: cliccando sul pulsante "add" viene creato un *nuovo oggetto*, il quale viene *inserito nell'array iniziale* e viene stampata una nuova card con tutte le informazioni inserite dall'utente.
*Consigli del giorno:*
Ragioniamo come sempre a step.
Scriviamo prima la logica in italiano e poi traduciamo in codice.
console.log() è nostro amico.
Quando un pezzo di codice funziona, chiediamoci se possiamo scomporlo in funzioni più piccole.*/

console.log('JS ok');

// Creo object contenente i dipendenti con lle loro info
const cardMemberTeam = [
    {
        image: 'img/wayne-barnett-founder-ceo.jpg',
        name: 'Wayne Barnett',
        role: 'Founder & CEO'
    },

    {
        image: 'img/angela-caroll-chief-editor.jpg',
        name: 'Angela Caroll',
        role: 'Chief editor'
    },

    {
        image: 'img/walter-gordon-office-manager.jpg',
        name: 'Walter Gordon',
        role: 'Office Manager'
    },

    {
        image: 'img/angela-lopez-social-media-manager.jpg',
        name: 'Angela Lopez',
        role: 'Social Media Manager'
    },

    {
        image: 'img/scott-estrada-developer.jpg',
        name: 'Scott Estrada',
        role: 'Developer'
    },

    {
        image: 'img/barbara-ramos-graphic-designer.jpg',
        name: 'Barbara Ramos',
        role: 'Graphic Designer'
    },

];

//recupero da html team-container
const teamCard = document.getElementsByClassName('team-card');
const teamContainer = document.getElementsByClassName('team-container');
    
// creo funzione che crea un div per ogni card del dipendente
/**
 * Create a new div element and return it
 * @returns A div element
 */
/*function cardMemberCreator(){
    const member = document.createElement('div');
    return member;
}*/

// creo funzione che mi inserisce una card per ogni dipendente
function cardMemberCreator(){
    for(let i=0; i<cardMemberTeam; i++){
        const member = cardMemberTeam[i];
        return member;
    }

}
