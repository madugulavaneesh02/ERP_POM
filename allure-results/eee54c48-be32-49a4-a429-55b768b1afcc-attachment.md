# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultipleDataUsingExcel.spec.ts >> ERP Modules >> Customer details of Ranga
- Location: tests\MultipleDataUsingExcel.spec.ts:55:10

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test"
  2  | 
  3  | export class AddCustomer{
  4  |     //declare variables for supplier
  5  |         page:Page
  6  |         ClickCustomer:Locator
  7  |         ClickAddbutton:Locator
  8  |         Cnum:Locator
  9  |         CName:Locator
  10 |         CAddress:Locator
  11 |         CCity:Locator
  12 |         Ccountry:Locator
  13 |         Ccontactperson:Locator
  14 |         Cphonenum:Locator
  15 |         Cemail:Locator
  16 |         Cmobilenum:Locator
  17 |         Cnotes:Locator
  18 |         ClickAdd:Locator
  19 |         ClickConfirmOk:Locator
  20 |         ClickAlertOk:Locator
  21 |         Searchpanel:Locator
  22 |         Searchtextbox:Locator
  23 |         Searchbutton:Locator
  24 |         Customertable:Locator
  25 |         constructor(page:Page)
  26 |         {
  27 |         this.page=page
  28 |         this.ClickCustomer=page.locator('#mi_a_customers')
  29 |         this.ClickAddbutton=page.locator('div.btn-group.ewButtonGroup').nth(1)
  30 |         this.Cnum=page.locator('#x_Customer_Number')
  31 |         this.CName=page.locator('#x_Customer_Name')
  32 |         this.CAddress=page.locator('#x_Address')
  33 |         this.CCity=page.locator('#x_City')
  34 |         this.Ccountry=page.locator('#x_Country')
  35 |         this.Ccontactperson=page.locator('#x_Contact_Person')
  36 |         this.Cphonenum=page.locator('#x_Phone_Number')
  37 |         this.Cemail=page.locator('#x__Email')
  38 |         this.Cmobilenum=page.locator('#x_Mobile_Number')
  39 |         this.Cnotes=page.locator('#x_Notes')
  40 |         this.ClickAdd=page.locator('#btnAction')
  41 |         this.ClickConfirmOk=page.getByRole('button', { name: 'OK!' })
  42 |         this.ClickAlertOk=page.locator('button.ajs-button.btn.btn-primary')
  43 |         this.Searchpanel=page.locator('.btn.btn-default.ewSearchToggle')
  44 |         this.Searchtextbox=page.locator('#psearch')
  45 |         this.Searchbutton=page.locator('#btnsubmit')
  46 |         this.Customertable=page.locator('#tbl_a_customerslist tbody tr:nth-child(1) td:nth-child(5) div span span')
  47 |     }
  48 |     //Write a method to add a customer
  49 |     async AddCustomerDetails(cname:string,caddress:string,ccity:string,ccountry:string,ccontactperson:string,cphonenum:string,cemail:string,cmobilenum:string,cnotes:string){
  50 |         await this.ClickCustomer.waitFor()
  51 |         await this.ClickCustomer.click()
  52 |         await this.ClickAddbutton.waitFor()
  53 |         await this.ClickAddbutton.click()
  54 |         await this.Cnum.waitFor()
  55 |         const Exp_num=await this.Cnum.inputValue()
  56 |         await this.CName.fill(cname)
  57 |         await this.CAddress.fill(caddress)
  58 |         await this.CCity.fill(ccity)
  59 |         await this.Ccountry.fill(ccountry)
  60 |         await this.Ccontactperson.fill(ccontactperson)
> 61 |         await this.Cphonenum.fill(cphonenum)
     |                              ^ Error: locator.fill: value: expected string, got undefined
  62 |         await this.Cemail.fill(cemail)
  63 |         await this.Cmobilenum.fill(cmobilenum)
  64 |         await this.Cnotes.fill(cnotes)
  65 |         await this.ClickAdd.click()
  66 |         await this.ClickConfirmOk.waitFor()
  67 |         await this.ClickConfirmOk.click()
  68 |         await this.ClickAlertOk.waitFor()
  69 |         await this.ClickAlertOk.click()
  70 |         await this.Searchpanel.waitFor()
  71 |         if(!await this.Searchtextbox.isVisible())
  72 |         await this.Searchpanel.click()
  73 |         await this.Searchtextbox.clear()
  74 |         await this.Searchtextbox.fill(Exp_num)
  75 |         await this.Searchbutton.click()
  76 |         const Act_num= await this.Customertable.innerText()
  77 |         if((await Act_num).match(Exp_num))
  78 |         {
  79 |             console.log(`The Customer number is Found in the table ${Act_num}  ${Exp_num}`)
  80 |         }
  81 |         else
  82 |              {
  83 |             console.log(`The Customer number is Not Found in the table ${Act_num}  ${Exp_num}`)
  84 |         }
  85 | }}
```