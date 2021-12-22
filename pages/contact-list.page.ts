import MobileActions from "../support/utils/mobileActions";
class ContactList{

    async selectContactFromList(firstName: string, lastName: string){
       await MobileActions.clickOn(`${firstName} ${lastName}`); 
    }
}
export default new ContactList();