import { Locator, Page } from "@playwright/test";

export class AddSupplier{
    //declare variables for supplier
    page:Page
    ClickSupplier:Locator
    ClickAddbutton:Locator
    Snum:Locator
    SName:Locator
    SAddress:Locator
    SCity:Locator
    Scountry:Locator
    Scontactperson:Locator
    Sphonenum:Locator
    Semail:Locator
    Smobilenum:Locator
    Snotes:Locator
    ClickAdd:Locator
    ClickConfirmOk:Locator
    ClickAlertOk:Locator
    Searchpanel:Locator
    Searchtextbox:Locator
    Searchbutton:Locator
    Suppliertable:Locator
    constructor(page:Page){
        this.page=page
        this.ClickSupplier=page.locator('#mi_a_suppliers')
        this.ClickAddbutton=page.locator('div.btn-group.ewButtonGroup').nth(1)
        this.Snum=page.locator('#x_Supplier_Number')
        this.SName=page.locator('#x_Supplier_Name')
        this.SAddress=page.locator('#x_Address')
        this.SCity=page.locator('#x_City')
        this.Scountry=page.locator('#x_Country')
        this.Scontactperson=page.locator('#x_Contact_Person')
        this.Sphonenum=page.locator('#x_Phone_Number')
        this.Semail=page.locator('#x__Email')
        this.Smobilenum=page.locator('#x_Mobile_Number')
        this.Snotes=page.locator('#x_Notes')
        this.ClickAdd=page.locator('#btnAction')
        this.ClickConfirmOk=page.getByRole('button', { name: 'OK!' })
        this.ClickAlertOk=page.locator('.ajs-button.btn.btn-primary')
        this.Searchpanel=page.locator('.glyphicon.glyphicon-search.ewIcon')
        this.Searchtextbox=page.locator('#psearch')
        this.Searchbutton=page.locator('#btnsubmit')
        this.Suppliertable=page.locator('#tbl_a_supplierslist tbody tr:nth-child(1) td:nth-child(6) div span span')

        this.Searchpanel =  page.locator('.glyphicon.glyphicon-search.ewIcon')
        this.Searchtextbox =  page.locator('#psearch')
        this.Searchbutton =  page.locator('#btnsubmit')
        this.Suppliertable =  page.locator('.table.ewTable tbody tr:nth-child(1) td:nth-child(6) div span span')

        }
        //write method for add supplier details
        async AddSupplierDetails(sname:string,saddress:string,scity:string,scountry:string,scontactperson:string,sphonenum:string,semail:string,smobilenum:string,snotes:string){
        await this.ClickSupplier.waitFor()
        await this.ClickSupplier.click()
        await this.ClickAddbutton.waitFor()
        await this.ClickAddbutton.click()
        await this.Snum.waitFor()
        const Exp_num=await this.Snum.inputValue()
        await this.SName.fill(sname)
        await this.SAddress.fill(saddress)
        await this.SCity.fill(scity)
        await this.Scountry.fill(scountry)
        await this.Scontactperson.fill(scontactperson)
        await this.Sphonenum.fill(String(sphonenum))
        await this.Semail.fill(semail)
        await this.Smobilenum.fill(String(smobilenum))
        await this.Snotes.fill(snotes)
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
        const Act_num=await this.Suppliertable.innerText()
        if((Act_num).match(Exp_num))
        {
            console.log(`The supplier number Found in the table ${Act_num}  ${Exp_num}`)
        }
        else
             {
            console.log(`The supplier number Not Found in the table ${Act_num}  ${Exp_num}`)
        }


    }


}