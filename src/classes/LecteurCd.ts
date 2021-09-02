import { Amplificateur } from './Amplificateur';

export class LecteurCd {


    // amp: Amplificateur;

    // constructor(amp: Amplificateur) {
    //     this.amp = amp;
    // }

    marche() {
        console.log("Lecteur cd marché");
    }

    arret() {
        console.log("Lecteur cd arrêté");
    }

    ejecter() {
        console.log("Lecteur cd ejecté");
    }

    pause() {
        console.log("Lecteur cd pause");
    }

    jouer() {
        console.log("Lecteur cd joué");
    }

    stop() {
        console.log("Lecteur cd stop");
    }


}