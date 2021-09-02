import { Amplificateur } from "./Amplificateur";

export class LecteurDvd {

    // amp: Amplificateur;

    // constructor(amp: Amplificateur) {
    //     this.amp = amp;
    // }

    marche() {
        return "Lecteur dvd marché";
    }

    arret() {
        return "Lecteur dvd arrêté";
    }

    ejecter() {
        return "Lecteur dvd ejecté";
    }

    pause() {
        return "Lecteur dvd pause";
    }

    jouer(chaine: string) {
        return chaine;
    }

    setAudioSurround() {
        return "Lecteur dvd audio surround";
    }

    setAudioStereo() {
        return "Lecteur dvd audio stereo";
    }

    stop() {
        return "Lecteur dvd stop";
    }

}