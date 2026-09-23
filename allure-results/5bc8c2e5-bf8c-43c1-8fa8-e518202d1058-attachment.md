# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultipleDataUsingExcel.spec.ts >> ERP Modules >> Supplier details of David
- Location: tests\MultipleDataUsingExcel.spec.ts:37:9

# Error details

```
Error: locator.fill: value: expected string, got undefined
```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AddSupplier{
  4  |     //declare variables for supplier
  5  |     page:Page
  6  |     ClickSupplier:Locator
  7  |     ClickAddbutton:Locator
  8  |     Snum:Locator
  9  |     SName:Locator
  10 |     SAddress:Locator
  11 |     SCity:Locator
  12 |     Scountry:Locator
  13 |     Scontactperson:Locator
  14 |     Sphonenum:Locator
  15 |     Semail:Locator
  16 |     Smobilenum:Locator
  17 |     Snotes:Locator
  18 |     ClickAdd:Locator
  19 |     ClickConfirmOk:Locator
  20 |     ClickAlertOk:Locator
  21 |     Searchpanel:Locator
  22 |     Searchtextbox:Locator
  23 |     Searchbutton:Locator
  24 |     Suppliertable:Locator
  25 |     constructor(page:Page){
  26 |         this.page=page
  27 |         this.ClickSupplier=page.locator('#mi_a_suppliers')
  28 |         this.ClickAddbutton=page.locator('div.btn-group.ewButtonGroup').nth(1)
  29 |         this.Snum=page.locator('#x_Supplier_Number')
  30 |         this.SName=page.locator('#x_Supplier_Name')
  31 |         this.SAddress=page.locator('#x_Address')
  32 |         this.SCity=page.locator('#x_City')
  33 |         this.Scountry=page.locator('#x_Country')
  34 |         this.Scontactperson=page.locator('#x_Contact_Person')
  35 |         this.Sphonenum=page.locator('#x_Phone_Number')
  36 |         this.Semail=page.locator('#x__Email')
  37 |         this.Smobilenum=page.locator('#x_Mobile_Number')
  38 |         this.Snotes=page.locator('#x_Notes')
  39 |         this.ClickAdd=page.locator('#btnAction')
  40 |         this.ClickConfirmOk=page.getByRole('button', { name: 'OK!' })
  41 |         this.ClickAlertOk=page.locator('.ajs-button.btn.btn-primary')
  42 |         this.Searchpanel=page.locator('.glyphicon.glyphicon-search.ewIcon')
  43 |         this.Searchtextbox=page.locator('#psearch')
  44 |         this.Searchbutton=page.locator('#btnsubmit')
  45 |         this.Suppliertable=page.locator('#tbl_a_supplierslist tbody tr:nth-child(1) td:nth-child(6) div span span')
  46 | 
  47 |         this.Searchpanel =  page.locator('.glyphicon.glyphicon-search.ewIcon')
  48 |         this.Searchtextbox =  page.locator('#psearch')
  49 |         this.Searchbutton =  page.locator('#btnsubmit')
  50 |         this.Suppliertable =  page.locator('.table.ewTable tbody tr:nth-child(1) td:nth-child(6) div span span')
  51 | 
  52 |         }
  53 |         //write method for add supplier details
  54 |         async AddSupplierDetails(sname:string,saddress:string,scity:string,scountry:string,scontactperson:string,sphonenum:string,semail:string,smobilenum:string,snotes:string){
  55 |         await this.ClickSupplier.waitFor()
  56 |         await this.ClickSupplier.click()
  57 |         await this.ClickAddbutton.waitFor()
  58 |         await this.ClickAddbutton.click()
  59 |         await this.Snum.waitFor()
  60 |         const Exp_num=await this.Snum.inputValue()
  61 |         await this.SName.fill(sname)
  62 |         await this.SAddress.fill(saddress)
  63 |         await this.SCity.fill(scity)
  64 |         await this.Scountry.fill(scountry)
  65 |         await this.Scontactperson.fill(scontactperson)
> 66 |         await this.Sphonenum.fill(sphonenum)
     |                              ^ Error: locator.fill: value: expected string, got undefined
  67 |         await this.Semail.fill(semail)
  68 |         await this.Smobilenum.fill(smobilenum)
  69 |         await this.Snotes.fill(snotes)
  70 |         await this.ClickAdd.click()
  71 |         await this.ClickConfirmOk.waitFor()
  72 |         await this.ClickConfirmOk.click()
  73 |         await this.ClickAlertOk.waitFor()
  74 |         await this.ClickAlertOk.click()
  75 |         await this.Searchpanel.waitFor()
  76 |         if(!await this.Searchtextbox.isVisible())
  77 |         await this.Searchpanel.click()
  78 |         await this.Searchtextbox.clear()
  79 |         await this.Searchtextbox.fill(Exp_num)
  80 |         await this.Searchbutton.click()
  81 |         const Act_num=await this.Suppliertable.innerText()
  82 |         if((Act_num).match(Exp_num))
  83 |         {
  84 |             console.log(`The supplier number Found in the table ${Act_num}  ${Exp_num}`)
  85 |         }
  86 |         else
  87 |              {
  88 |             console.log(`The supplier number Not Found in the table ${Act_num}  ${Exp_num}`)
  89 |         }
  90 | 
  91 | 
  92 |     }
  93 | 
  94 | 
  95 | }
```