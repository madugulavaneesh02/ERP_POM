import { Locator, Page } from "@playwright/test";

export class AdminLogout{
    page:Page
    ClickLogout:Locator
    constructor(page:Page)
    {
        this.page=page
        this.ClickLogout=page.locator('#mi_logout')
        
    }
    //write a method for logout
    async ERPLogout(){
       await this.ClickLogout.waitFor()
        await this.ClickLogout.click()
    
    }
}