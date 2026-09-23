import { Locator, Page } from "@playwright/test"

export class AddCustomer{
    //declare variables for supplier
        page:Page
        ClickCustomer:Locator
        ClickAddbutton:Locator
        Cnum:Locator
        CName:Locator
        CAddress:Locator
        CCity:Locator
        Ccountry:Locator
        Ccontactperson:Locator
        Cphonenum:Locator
        Cemail:Locator
        Cmobilenum:Locator
        Cnotes:Locator
        ClickAdd:Locator
        ClickConfirmOk:Locator
        ClickAlertOk:Locator
        Searchpanel:Locator
        Searchtextbox:Locator
        Searchbutton:Locator
        Customertable:Locator
        constructor(page:Page)
        {
        this.page=page
        this.ClickCustomer=page.locator('#mi_a_customers')
        this.ClickAddbutton=page.locator('div.btn-group.ewButtonGroup').nth(1)
        this.Cnum=page.locator('#x_Customer_Number')
        this.CName=page.locator('#x_Customer_Name')
        this.CAddress=page.locator('#x_Address')
        this.CCity=page.locator('#x_City')
        this.Ccountry=page.locator('#x_Country')
        this.Ccontactperson=page.locator('#x_Contact_Person')
        this.Cphonenum=page.locator('#x_Phone_Number')
        this.Cemail=page.locator('#x__Email')
        this.Cmobilenum=page.locator('#x_Mobile_Number')
        this.Cnotes=page.locator('#x_Notes')
        this.ClickAdd=page.locator('#btnAction')
        this.ClickConfirmOk=page.getByRole('button', { name: 'OK!' })
        this.ClickAlertOk=page.locator('button.ajs-button.btn.btn-primary')
        this.Searchpanel=page.locator('.btn.btn-default.ewSearchToggle')
        this.Searchtextbox=page.locator('#psearch')
        this.Searchbutton=page.locator('#btnsubmit')
        this.Customertable=page.locator('#tbl_a_customerslist tbody tr:nth-child(1) td:nth-child(5) div span span')
    }
    //Write a method to add a customer
    async AddCustomerDetails(cname:string,caddress:string,ccity:string,ccountry:string,ccontactperson:string,cphonenum:string,cemail:string,cmobilenum:string,cnotes:string){
        await this.ClickCustomer.waitFor()
        await this.ClickCustomer.click()
        await this.ClickAddbutton.waitFor()
        await this.ClickAddbutton.click()
        await this.Cnum.waitFor()
        const Exp_num=await this.Cnum.inputValue()
        await this.CName.fill(cname)
        await this.CAddress.fill(caddress)
        await this.CCity.fill(ccity)
        await this.Ccountry.fill(ccountry)
        await this.Ccontactperson.fill(ccontactperson)
        await this.Cphonenum.fill(String(cphonenum))
        await this.Cemail.fill(cemail)
        await this.Cmobilenum.fill(String(cmobilenum))
        await this.Cnotes.fill(cnotes)
        await this.ClickAdd.click()
        await this.ClickConfirmOk.waitFor()
        await this.ClickConfirmOk.click()
        await this.ClickAlertOk.waitFor()
        await this.ClickAlertOk.click()
        await this.Searchpanel.waitFor()
        if(!await this.Searchtextbox.isVisible())
        await this.Searchpanel.click()
        await this.Searchtextbox.clear()
        await this.Searchtextbox.fill(Exp_num)
        await this.Searchbutton.click()
        const Act_num= await this.Customertable.innerText()
        if((await Act_num).match(Exp_num))
        {
            console.log(`The Customer number is Found in the table ${Act_num}  ${Exp_num}`)
        }
        else
             {
            console.log(`The Customer number is Not Found in the table ${Act_num}  ${Exp_num}`)
        }
}}