import { Amplificateur } from './Amplificateur';

export class LecteurCd {

    marche() {
        console.log("LEcteur")
        return "Lecteur cd marché";
    }

    arret() {
        return "Lecteur cd arrêté";
    }

    ejecter() {
        return "Lecteur cd ejecté";
    }

    pause() {
        return "Lecteur cd pause";
    }

    jouer() {
        return "Lecteur cd joué";
    }

    stop() {
        return "Lecteur cd stop";
    }


}