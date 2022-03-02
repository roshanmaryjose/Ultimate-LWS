import { createElement } from 'lwc';
import Title from 'c/title';
import getFiles from '@salesforce/apex/Returnfiles.getFiles';

const mockGetRecord = require("./data/getFile.json");

jest.mock(
    '@salesforce/apex/Returnfiles.getFiles',
    () => {
 const {
            createApexTestWireAdapter
        } = require('@salesforce/sfdx-lwc-jest');
        return {
            default: createApexTestWireAdapter(jest.fn())
        };
    },
    { virtual: true }
);

describe('c-title', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    async function flushPromises() {
        return Promise.resolve();
    }


    it('Display list of files', async() => {
        const element = createElement('c-title', {
            is: Title
        });
        
        element.fields='Title,Description'
        document.body.appendChild(element);
        getFiles.emit(mockGetRecord)
        await flushPromises();

        const content = element.shadowRoot.querySelectorAll('dd.title');
        for (let index = 0; index < content.length; index++) {
            expect(content[index].textContent).toBe(`${mockGetRecord[index].Title}`);
            
          }
        const content2 = element.shadowRoot.querySelectorAll('dd.desc');
          for (let index = 0; index < content2.length; index++) {
              expect(content2[index].textContent).toBe(`${mockGetRecord[index].Description}`);
              
            }
                              
        
        expect(content.length).toBe(mockGetRecord.length);
    });
});