import { App } from './../src/classes/App';

describe('Pattern Façade test', () => {
    
    it("should be return true", () => {
        const app = new App()
        
        expect(app.main()).toBe("C'est la fin du film ...");
    })
})
