class ElementUtils{

    async getElementByAccessibilityId(elm: string){
        return await $(`~${elm}`);
    }

    async getElementByClassChain(elm: string){
        return await $(`-ios class chain:${elm}`);
    }

    async getElementByPredicate(elm: string){
        return await $(`-ios predicate string:${elm}`);
    }

    async getValueOf(elm: string, locator?: string){
        if(locator === 'predicate'){
            return await (await this.getElementByPredicate(elm)).getText();
        }else if(locator === 'class'){
            return await (await this.getElementByClassChain(elm)).getText();
        }else{
            return await (await this.getElementByAccessibilityId(elm)).getText();
        }
    }
}

export default new ElementUtils();