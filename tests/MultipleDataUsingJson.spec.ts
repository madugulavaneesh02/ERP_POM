import { AdminLogin } from "../page/AdminLogin";
import { AddSupplier } from "../page/AddSupplier";
import { AddCustomer } from "../page/AddCustomer";
import { AdminLogout } from "../page/AdminLogout";
import data from "../testdata/ERPData.json"
import test from "@playwright/test";
import { url } from "inspector";
//console.log(data)
let Login:AdminLogin
let Supplier:AddSupplier
let Customer:AddCustomer
let Logout:AdminLogout

test.beforeEach(async({page})=>{
    Login=new AdminLogin(page)
    await Login.ERPUrl(process.env.BASE_URL!)
    await Login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)

})
test.describe('Multiple validation using JSON',()=>{ 
    //Validating the suppliers 
    for (const sup of data.suppliers) {
        test(`Validating the Supplier details ${sup.City}`,async({page})=>{
            Supplier=new AddSupplier(page)
            await Supplier.AddSupplierDetails(
                sup.SupplierName,
                sup.Address,
                sup.City,
                sup.Country,
                sup.ContactPerson,
                sup.PhoneNumber,
                sup.Email,
                sup.MobileNumber,
                sup.Notes

            )
        })
        
    }
    //validating the customer details
    for (const cus of data.customers) {
        test(`Validating the Customer details ${cus.Address}`,async({page})=>{
            Customer=new AddCustomer(page)
            await Customer.AddCustomerDetails(
                cus.CustomerName,
                cus.Address,
                cus.City,
                cus.Country,
                cus.ContactPerson,
                cus.PhoneNumber,
                cus.Email,
                cus.MobileNumber,
                cus.Notes
            )
        })
        
    }
})
test.afterEach(async({page})=>{
    Logout=new AdminLogout(page)
   await Logout.ERPLogout()
   await page.close()
})