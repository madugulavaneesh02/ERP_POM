# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: postandput.spec.ts >> Updating existing user in goresr server
- Location: tests\postandput.spec.ts:32:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 404
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | import { request } from "http";
  3  | import { userInfo } from "os";
  4  | 
  5  | test('Create new user in gorest server',async({request})=>{
  6  | const response=await request.post('https://gorest.in/public/v2/users',{
  7  |     headers:{
  8  |         'Accept':'application/json',
  9  |             'Content-Type': 'application/json',
  10 |             'Authorization': 'Bearer a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
  11 |     },
  12 |     data:{
  13 |         "name":"Naveen Kumar",
  14 |         "email":"vs@test.com",
  15 |         "gender":"male",
  16 |         "status":"active"
  17 |     }
  18 | })
  19 | expect(response.status()).toBe(201)
  20 | //expect(response.statusText()).toBe('Created')
  21 | console.log(response.status())
  22 | console.log(response.statusText())
  23 | const newuser= await response.json()
  24 | const userid= newuser.id
  25 | const emailid= newuser.email
  26 | console.log(`Created User with ID: ${userid}`)
  27 | console.log(`Created User with ID: ${emailid}`)
  28 | console.log('-----------------------------------------')
  29 | console.log(newuser)
  30 | })
  31 | 
  32 | test('Updating existing user in goresr server',async({request})=>{
  33 |    // const userid='1025'
  34 |     const token= 'a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
  35 |     //send put request
  36 |     const response= await request.put('https://gorest.in/public/v2/users/1025',{
  37 |          headers:{
  38 |         'Accept':'application/json',
  39 |             'Content-Type': 'application/json',
  40 |             'Authorization': `Bearer ${token}`
  41 |          },
  42 |          data:{
  43 |         "name":"Van",
  44 |         "email":"vs1529@test.com",
  45 |         "gender":"female",
  46 |         "status":"active"
  47 |     }
  48 |  })
  49 |  //assert status code 200 ok
> 50 |  expect(response.status()).toBe(200)
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  51 |  expect(response.statusText()).toBe('OK')
  52 |  //parse and validate the response body
  53 |  const updateduser= await response.json()
  54 |  console.log(`Updated user details:`,updateduser)
  55 |  //assertions to verify the update took effect
  56 |  expect(updateduser.id.toString()).toBe('1025')
  57 |  expect(updateduser.name).toBe('Van')
  58 |  expect(updateduser.email).toBe('vs1529@test.com')
  59 |  expect(updateduser.gender).toBe('female')
  60 |  expect(updateduser.status).toBe('active')
  61 | 
  62 | })
```