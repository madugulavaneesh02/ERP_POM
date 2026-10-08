import test, { expect } from "@playwright/test";
import { request } from "http";
import { userInfo } from "os";

test('Create new user in gorest server',async({request})=>{
const response=await request.post('https://gorest.in/public/v2/users',{
    headers:{
        'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
    },
    data:{
        "name":"Naveen Kumar",
        "email":"vs@test.com",
        "gender":"male",
        "status":"active"
    }
})
expect(response.status()).toBe(201)
//expect(response.statusText()).toBe('Created')
console.log(response.status())
console.log(response.statusText())
const newuser= await response.json()
const userid= newuser.id
const emailid= newuser.email
console.log(`Created User with ID: ${userid}`)
console.log(`Created User with ID: ${emailid}`)
console.log('-----------------------------------------')
console.log(newuser)
})

test('Updating existing user in goresr server',async({request})=>{
   // const userid='1025'
    const token= 'a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
    //send put request
    const response= await request.put('https://gorest.in/public/v2/users/1022',{
         headers:{
        'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
         },
         data:{
        "name":"Vamsi",
        "email":"vs1529@test.com",
        "gender":"male",
        "status":"active"
    }
 })

 console.log("Status:", response.status());
console.log("Status Text:", response.statusText());
console.log("Response Body:", await response.text());
 //assert status code 200 ok
 expect(response.status()).toBe(200)
 expect(response.statusText()).toBe('OK')
 //parse and validate the response body
 const updateduser= await response.json()
 console.log(`Updated user details:`,updateduser)
 //assertions to verify the update took effect
 expect(updateduser.id.toString()).toBe('1022')
 expect(updateduser.name).toBe('Vamsi')
 expect(updateduser.email).toBe('vs1529@test.com')
 expect(updateduser.gender).toBe('male')
 expect(updateduser.status).toBe('active')

})