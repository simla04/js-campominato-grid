// seleziono il tag select 
let difficoltà = document.getElementById('difficoltà');

const griglia = document.getElementById('griglia');
// console.log( griglia );


//creiamo una funzione per creare un div quadrato dentro la griglia
function creazioneQuadrato(){
    const div = document.createElement('div');
    div.classList.add('quadrato');
    return div;
}

// console.log( creazioneQuadrato() );



// inserimento il quadrato creato dalla funzione nella griglia
// griglia.append( creazioneQuadrato() );



//64 quadrati
for( let i = 0; i < 64; i++ ){ 
    let elementoCorrente = creazioneQuadrato();
    console.log(elementoCorrente);
    

    var count = 1;
    elementoCorrente.addEventListener('click', function(){
        console.log(this)
        
        this.classList.toggle('active');
    count++;

    })
    
    griglia.append( elementoCorrente );
}