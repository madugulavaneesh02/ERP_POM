import { expect, Locator, Page } from "@playwright/test";

export class AdminLogin{
    //declare login page variables
    page:Page
    UserName:Locator
    Password:Locator
    Login:Locator
    //write constructor to inilization for the class variables
    constructor(page:Page)
    {
        this.page=page
        this.UserName=page.locator('#username').first()
        this.Password=page.locator('#password').first()
        this.Login=page.locator('#btnsubmit').first()
        
    }
    //method for lunch url
    async ERPUrl(url:string){
        await this.page.goto(url)
    }
    //method for login
    async ERPLogin(username:string,password:any){
        await this.UserName.waitFor({state:'visible'})
        await this.UserName.clear()
        await this.UserName.fill(username)
        await this.Password.waitFor()
        await this.Password.clear()
        await this.Password.fill(password)
        await this.Login.click()
        await expect(this.page).toHaveURL(/dashboard.php/)


    }
   

}