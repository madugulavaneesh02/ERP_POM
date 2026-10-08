# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: post.spec.ts >> Create new user in gorest server
- Location: tests\post.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 201
Received: 422
```

# Test source

```ts
  1  | import test, { expect } from "@playwright/test";
  2  | 
  3  | test('Create new user in gorest server',async({request})=>{
  4  | const response=await request.post('https://gorest.in/public/v2/users',{
  5  |     headers:{
  6  |         'Accept':'application/json',
  7  |             'Content-Type': 'application/json',
  8  |             'Authorization': 'Bearer a894f1e9fc8c3ebb462e54a3416f321af0453901ca1379162b71922b7d9d8633'
  9  |     },
  10 |     data:{
  11 |         "name":"Naveen Kumar",
  12 |         "email":"nk@test.com",
  13 |         "gender":"male",
  14 |         "status":"active"
  15 |     }
  16 | })
> 17 | expect(response.status()).toBe(201)
     |                           ^ Error: expect(received).toBe(expected) // Object.is equality
  18 | expect(response.statusText()).toBe('Created')
  19 | console.log(response.status())
  20 | console.log(response.statusText())
  21 | const newuser= await response.json()
  22 | const userid= newuser.id
  23 | const emailid= newuser.email
  24 | console.log(`Created User with ID: ${userid}`)
  25 | console.log(`Created User with ID: ${emailid}`)
  26 | console.log('-----------------------------------------')
  27 | console.log(newuser)
  28 | })
```