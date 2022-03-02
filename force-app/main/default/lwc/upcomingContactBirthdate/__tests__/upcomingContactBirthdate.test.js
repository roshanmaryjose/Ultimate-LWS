import { createElement } from 'lwc';
import UpcomingContactBirthdate from 'c/UpcomingContactBirthdate';
import birthdayToday from '@salesforce/apex/ReturnBirthdays.birthdayToday';
import birthdayComingup from '@salesforce/apex/ReturnBirthdays.birthdayComingup';


const mockGetRecord = require("./data/getRecord.json");
const mockupcomingbdays=require("./data/upcomingBirthday.json")
// Mock getrec0rd Apex wire adapter
jest.mock(
    '@salesforce/apex/ReturnBirthdays',
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
describe('c-upcoming-contact-birthday', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays name header', () => {
        // Create element
        const element = createElement('c-upcoming-contact-birthday', {
            is: UpcomingContactBirthdate
        });
        document.body.appendChild(element);

        // Verify displayed greeting
        const div = element.shadowRoot.querySelector('div.name');
        expect(div.textContent).toBe('Name');
    });

    async function flushPromises() {
        return Promise.resolve();
    }

    it("check wired data birthday today", async() => {
       
        const element = createElement('c-upcoming-contact-birthday', { is: UpcomingContactBirthdate 
        
        });
        document.body.appendChild(element);
      
        // Emit mock record into the wired field
        birthdayToday.emit(mockGetRecord);

        await flushPromises();
      
        // Resolve a promise to wait for a rerender of the new content.
        
          const content = element.shadowRoot.querySelectorAll('div.fullname');
        
          for (let index = 0; index < content.length; index++) {
            expect(content[index].textContent).toBe(`${mockGetRecord[index].Name} (Today)`);
            
          }
                 
          const content2=element.shadowRoot.querySelectorAll('div.fullname');
          expect(content2.length).toBe(mockGetRecord.length);
    });
    it("check wired data birthday coming up", async() => {
        
        const element = createElement('c-upcoming-contact-birthday', { is: UpcomingContactBirthdate 
        
        });
        document.body.appendChild(element);
      
        // Emit mock record into the wired field
        birthdayComingup.emit(mockupcomingbdays);

        await flushPromises();
      
        // Resolve a promise to wait for a rerender of the new content.
        
         
            const content3 = element.shadowRoot.querySelectorAll('div.upcoming-name');
        
          for (let i = 0; i < content3.length; i++) {
            expect(content3[i].textContent).toBe(`${ mockupcomingbdays[i].Name}`);
            
          }
          
          const content4=element.shadowRoot.querySelectorAll('div.upcoming-name');
          expect(content4.length).toBe(mockupcomingbdays.length);
    });
});