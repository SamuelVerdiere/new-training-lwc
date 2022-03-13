import { LightningElement, wire } from 'lwc';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';

export default class accountFinder extends LightningElement {
    AnnualRevenue = null;
    handleChange(event) {
        this.AnnualRevenue = event.detail.value;
    }
    reset() {
        this.AnnualRevenue = null;
    }
    @wire(queryAccountsByRevenue, { AnnualRevenue: '$AnnualRevenue' })
    accounts;
}