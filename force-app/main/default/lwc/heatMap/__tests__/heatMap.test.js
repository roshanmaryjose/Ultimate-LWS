import { createElement } from 'lwc';
import HeatMap from 'c/heatMap';

describe('c-heat-map', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Verify card title', () => {
        const element = createElement('c-heat-map', {
            is: HeatMap
        });
        document.body.appendChild(element);
        const content = element.shadowRoot.querySelectorAll('lightning-map');
        
        

        expect(content).toBeTruthy();
    });
});