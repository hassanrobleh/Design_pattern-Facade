import { Projecteur } from '../classes/Projecteur';
import { LecteurDvd } from '../classes/LecteurDvd';
import { LecteurCd } from '../classes/LecteurCd';
import { Tuner } from '../classes/Tuner';
import { Amplificateur } from '../classes/Amplificateur';
import { Ecran } from '../classes/Ecran';
import { Lumieres } from '../classes/Lumieres';
import { MachineAPopcorn } from '../classes/MachineAPopcorn';

export class FacadeHomeCinema {

    amp: Amplificateur;
    tuner: Tuner;
    dvd: LecteurDvd;
    cd: LecteurCd;
    projecteur: Projecteur;
    lumiere: Lumieres;
    ecran: Ecran;
    machineAPopcorn: MachineAPopcorn;

    constructor(amp: Amplificateur, tuner: Tuner, dvd: LecteurDvd, cd: LecteurCd, projecteur: Projecteur,  ecran: Ecran, lumieres: Lumieres, machineAPopCorn: MachineAPopcorn) {
        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projecteur = projecteur;
        this.ecran = ecran;
        this.lumiere = lumieres;
        this.machineAPopcorn = machineAPopCorn;
    }

    regarderFilm(film: string) {
        console.log("Vous allez voir un bon film ...");

        this.machineAPopcorn.marche();
        this.machineAPopcorn.eclater();
        this.lumiere.attenuer(10);
        this.ecran.baisser();
        this.projecteur.modeGrandEcran();
        this.amp.marche();
        this.amp.setDvd(this.dvd);
        this.amp.setSonAround();
        this.amp.setVolume(5);
        this.dvd.marche();
        this.dvd.jouer(film);
    }

    arreterFilm() {
        console.log("C'est la fin du film ...");

        this.machineAPopcorn.arret();
        this.lumiere.marche();
        this.ecran.monter();
        this.projecteur.arret();
        this.amp.arret();
        this.dvd.stop();
        this.dvd.ejecter();
        this.dvd.arret();
    }

}