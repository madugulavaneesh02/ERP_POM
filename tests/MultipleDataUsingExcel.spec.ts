
import { ExcelUtility } from "../utils/ExcelUtility";
import { AddCustomer } from "../page/AddCustomer";
import { AddSupplier } from "../page/AddSupplier";
import { AdminLogin } from "../page/AdminLogin";
import { AdminLogout } from "../page/AdminLogout";
import test from "@playwright/test";
import path from "path";

let Login:AdminLogin
let Logout:AdminLogout
let supplier:AddSupplier
let customer:AddCustomer
//store sheets data
let supdata:any
let cusdata:any
//read path of excel file
let filepath=path.join(__dirname,'../testdata/ERP_ExcelData.xlsx')
try {
    supdata=ExcelUtility.getExcelData(filepath,"Suppliers")
    cusdata=ExcelUtility.getExcelData(filepath,"Customers")
   // console.log(supdata)
} catch (error) {
    console.log(error)
}


test.beforeEach(async({page})=>{
    Login=new AdminLogin(page)
    await Login.ERPUrl(process.env.BASE_URL!)
    await Login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
 })   
 test.describe('ERP Modules',()=>{
    //Supplier detials
    for (const sup of supdata) {
    test(`Supplier details of ${sup.SupplierName}`,async({page})=>{
        supplier=new AddSupplier(page)
       await supplier.AddSupplierDetails(
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
    //Customer details
    for (const cus of cusdata) {
     test(`Customer details of ${cus.CustomerName}`,async({page})=>{
        customer=new AddCustomer(page)
        await customer.AddCustomerDetails(
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