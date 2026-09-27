import test from "@playwright/test";
import { AddCustomer } from "../page/AddCustomer";
import { AddSupplier } from "../page/AddSupplier";
import { AdminLogin } from "../page/AdminLogin";
import { AdminLogout } from "../page/AdminLogout";
let Login:AdminLogin
let Sup:AddSupplier
let Cus:AddCustomer
let Logout:AdminLogout
test.beforeEach(async({page})=>{
    Login=new AdminLogin(page)
    await Login.ERPUrl(process.env.BASE_URL!)
    await Login.ERPLogin(process.env.BASE_USER!,process.env.BASE_PASS!)
})
test.describe('ERP Management Modules',()=>{
//Executing supplier test
test('Validate supplier',async({page})=>{
Sup=new AddSupplier(page)
await Sup.AddSupplierDetails('Vaneesh','Jakkampudi','Vijayawada','India','Vaneesh','7702204594','madugulavaneesh02@gmail.com','9494885802','Congratulations')
 
})
test('Validate Customer',async({page})=>{
    Cus=new AddCustomer(page)
    await Cus.AddCustomerDetails('Vaneesh','Jakkampudi','Vijayawada','India','Vaneesh','7702204594','madugulavaneesh02@gmail.com','9494885802','Congratulations')
})
})
test.afterEach(async({page})=>{
    Logout=new AdminLogout(page)
    await Logout.ERPLogout()
    await page.close()
})

