import { LightningElement,track } from 'lwc';

export default class Parent extends LightningElement {
    @track selected='';
    
    handletypeselection(eve){

    this.selected=eve.detail;

    }



}