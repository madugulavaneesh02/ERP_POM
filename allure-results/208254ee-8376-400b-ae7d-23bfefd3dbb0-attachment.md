# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingle.spec.ts >> ERP Management Modules >> Validate supplier
- Location: tests\ERPSingle.spec.ts:17:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#psearch')
    - locator resolved to <input value="" type="text" id="psearch" name="psearch" class="form-control" placeholder="Search"/>
    - fill("Supplier-00000000963")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    17 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

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
  47 |         
  48 |         }
  49 |         //write method for add supplier details
  50 |         async AddSupplierDetails(sname:string,saddress:string,scity:string,scountry:string,scontactperson:string,sphonenum:string,semail:string,smobilenum:string,snotes:string){
  51 |         await this.ClickSupplier.waitFor()
  52 |         await this.ClickSupplier.click()
  53 |         await this.ClickAddbutton.waitFor()
  54 |         await this.ClickAddbutton.click()
  55 |         await this.Snum.waitFor()
  56 |         const Exp_num=await this.Snum.inputValue()
  57 |         await this.SName.fill(sname)
  58 |         await this.SAddress.fill(saddress)
  59 |         await this.SCity.fill(scity)
  60 |         await this.Scountry.fill(scountry)
  61 |         await this.Scontactperson.fill(scontactperson)
  62 |         await this.Sphonenum.fill(sphonenum)
  63 |         await this.Semail.fill(semail)
  64 |         await this.Smobilenum.fill(smobilenum)
  65 |         await this.Snotes.fill(snotes)
  66 |         await this.ClickAdd.click()
  67 |         await this.ClickConfirmOk.waitFor()
  68 |         await this.ClickConfirmOk.click()
  69 |         await this.ClickAlertOk.waitFor()
  70 |         await this.ClickAlertOk.click()
  71 |         await this.Searchpanel.waitFor()
  72 |         if(!this.Searchpanel.isVisible())
  73 |         {
  74 |             await this.Searchpanel.click()
  75 |         }
  76 |         //await this.Searchtextbox.clear()
> 77 |         await this.Searchtextbox.fill(Exp_num)
     |                                  ^ Error: locator.fill: Target page, context or browser has been closed
  78 |         await this.Searchbutton.click()
  79 |         const Act_num=await this.Suppliertable.innerText()
  80 |         if((await Act_num).match(Exp_num))
  81 |         {
  82 |             console.log(`The supplier number Found in the table ${Act_num}  ${Exp_num}`)
  83 |         }
  84 |         else
  85 |              {
  86 |             console.log(`The supplier number Not Found in the table ${Act_num}  ${Exp_num}`)
  87 |         }
  88 | 
  89 | 
  90 |     }
  91 | 
  92 | 
  93 | }
```