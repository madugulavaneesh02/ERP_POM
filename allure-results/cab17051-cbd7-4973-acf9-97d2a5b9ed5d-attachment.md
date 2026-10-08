# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: postandput.spec.ts >> Updating existing user in goresr server
- Location: tests\postandput.spec.ts:31:5

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
  3  | 
  4  | test('Create new user in gorest server',async({request})=>{
  5  | const response=await request.post('https://gorest.in/public/v2/users',{
  6  |     headers:{
  7  |         'Accept':'application/json',
  8  |             'Content-Type': 'application/json',
  9  |             'Authorization': 'Bearer a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
  10 |     },
  11 |     data:{
  12 |         "name":"Naveen Kumar",
  13 |         "email":"vs@test.com",
  14 |         "gender":"male",
  15 |         "status":"active"
  16 |     }
  17 | })
  18 | expect(response.status()).toBe(201)
  19 | //expect(response.statusText()).toBe('Created')
  20 | console.log(response.status())
  21 | console.log(response.statusText())
  22 | const newuser= await response.json()
  23 | const userid= newuser.id
  24 | const emailid= newuser.email
  25 | console.log(`Created User with ID: ${userid}`)
  26 | console.log(`Created User with ID: ${emailid}`)
  27 | console.log('-----------------------------------------')
  28 | console.log(newuser)
  29 | })
  30 | 
  31 | test('Updating existing user in goresr server',async({request})=>{
  32 |    // const userid='1025'
  33 |     const token= 'a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
  34 |     const response= await request.put('https://gorest.co.in/1025',{
  35 |          headers:{
  36 |         'Accept':'application/json',
  37 |             'Content-Type': 'application/json',
  38 |             'Authorization': `Bearer ${token}`
  39 |          },
  40 |          data:{
  41 |         "name":"Vanee",
  42 |         "email":"vsra@test.com",
  43 |         "gender":"male",
  44 |         "status":"active"
  45 |     }
  46 |  })
  47 |  //assert status code 200 ok
> 48 |  expect(response.status()).toBe(200)
     |                            ^ Error: expect(received).toBe(expected) // Object.is equality
  49 |  expect(response.statusText()).toBe('OK')
  50 |  //parse and validate the response body
  51 |  const updateduser= await response.json()
  52 |  console.log(`Updated user details:`,updateduser)
  53 | 
  54 | })
```