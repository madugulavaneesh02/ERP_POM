import test, { expect } from "@playwright/test";
import { request } from "http";

test('Fetch all users form goresserver',async({request})=>{
    const response=await request.get('https://gorest.in/public/v2/users',{
        headers:{
            'Accept':'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
        }

    })
    expect(response.status()).toBe(200)
    expect(response.statusText()).toBe('OK')
    console.log(response.status())
    console.log(response.statusText())
    
    const users=await response.json()
    expect(Array.isArray(users)).toBeTruthy()
    console.log('Total users Fetched:',users.length)
    console.log(users)
})