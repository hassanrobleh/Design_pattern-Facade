import { App } from './../src/classes/App';

describe('Pattern Façade test', () => {
    
    it("should be return C'est la fin du film ...", () => {
        const app = new App()
        expect(app.arretFilm()).toBe("C'est la fin du film ...");
    });

    it("should be return Vous allez voir un bon film ...", () => {
        const app = new App()
        expect(app.voirFilm()).toBe("Vous allez voir un bon film ...");
    });
})
