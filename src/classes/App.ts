import { MachineAPopcorn } from './MachineAPopcorn';
import { Projecteur } from './Projecteur';
import { Lumieres } from './Lumieres';
import { LecteurDvd } from './LecteurDvd';
import { LecteurCd } from './LecteurCd';
import { Ecran } from './Ecran';
import { Tuner } from './Tuner';
import { Amplificateur } from './Amplificateur';
import { FacadeHomeCinema } from '../facades/FacadeHomeCinema';

export class App {

    arretFilm() {

        // Instanciation de composant

        const tuner: Tuner = new Tuner();
        const cd: LecteurCd = new LecteurCd();
        const dvd: LecteurDvd = new LecteurDvd()
        const amp: Amplificateur = new Amplificateur(tuner, cd, dvd);
        const ecran = new Ecran();
        const lumiere = new Lumieres;
        const projecteur = new Projecteur();
        const machineAPopcorn = new MachineAPopcorn();

        const homeCinema: FacadeHomeCinema = new FacadeHomeCinema(amp, tuner, dvd, cd, projecteur, ecran, lumiere, machineAPopcorn);

        // homeCinema.regarderFilm("Hôtel du nord");
        return homeCinema.arreterFilm();


    }

    voirFilm() {

        const tuner: Tuner = new Tuner();
        const cd: LecteurCd = new LecteurCd();
        const dvd: LecteurDvd = new LecteurDvd()
        const amp: Amplificateur = new Amplificateur(tuner, cd, dvd);
        const ecran = new Ecran();
        const lumiere = new Lumieres;
        const projecteur = new Projecteur();
        const machineAPopcorn = new MachineAPopcorn();

        const homeCinema: FacadeHomeCinema = new FacadeHomeCinema(amp, tuner, dvd, cd, projecteur, ecran, lumiere, machineAPopcorn);

        // return homeCinema.cd.jouer()
        // return homeCinema.arreterFilm();
        return homeCinema.regarderFilm("Hôtel du nord");

    }

}

// const app = new App();
// app.main();