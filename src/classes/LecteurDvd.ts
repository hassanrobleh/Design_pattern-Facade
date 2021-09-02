import { Amplificateur } from "./Amplificateur";

export class LecteurDvd {

    // amp: Amplificateur;

    // constructor(amp: Amplificateur) {
    //     this.amp = amp;
    // }

    marche() {
        console.log("Lecteur dvd marché");
    }

    arret() {
        console.log("Lecteur dvd arrêté");
    }

    ejecter() {
        console.log("Lecteur dvd ejecté");
    }

    pause() {
        console.log("Lecteur dvd pause");
    }

    jouer(chaine: string) {
        console.log(chaine);
    }

    setAudioSurround() {
        console.log("Lecteur dvd audio surround");
    }

    setAudioStereo() {
        console.log("Lecteur dvd audio stereo");
    }

    stop() {
        console.log("Lecteur dvd stop");
    }



}