import { LecteurCd } from './LecteurCd';
import { LecteurDvd } from './LecteurDvd';
import { Tuner } from './Tuner';

export class Amplificateur {

    tuner: Tuner;
    cd: LecteurCd;
    dvd: LecteurDvd;

    constructor(tuner: Tuner, cd: LecteurCd, dvd: LecteurDvd ) {
        this.tuner = tuner;
        this.cd = cd;
        this.dvd = dvd;
    }

    marche() {
        console.log("Amplificateur marché");
    }
    
    arret() {
        console.log("Amplificateur arrté");
    }

    setCd(cd: LecteurCd) {
        this.cd = cd;
    }

    setDvd(dvd: LecteurDvd) {
        this.dvd = dvd;
    }

    setSonStereo(){
        console.log("Mets son stereo");
    }

    setSonAround() {
        console.log("Mets son around");
    }

    setTuner(tuner: Tuner) {
        this.tuner = tuner;
    }

    setVolume(nombre: number) {
        console.log(nombre);
    }

}