# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ERPSingle.spec.ts >> ERP Management Modules >> Validate supplier
- Location: tests\ERPSingle.spec.ts:17:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.clear: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#psearch')
    - locator resolved to <input value="" type="text" id="psearch" name="psearch" class="form-control" placeholder="Search"/>
    - fill("")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    46 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=f4e2]:
  - generic [ref=f4e3]:
    - link "Stock Accounting" [ref=f4e6] [cursor=pointer]:
      - /url: .
    - strong [ref=f4e9]: Stock Accounting
    - generic [ref=f4e12]:
      - text: "User Name:"
      - strong [ref=f4e13]: Administrator
      - text: "|"
      - link "Logout" [ref=f4e14] [cursor=pointer]:
        - /url: javascript:void(0);
  - text:                             
  - generic [ref=f4e17]:
    - list [ref=f4e18]:
      - listitem [ref=f4e19]:
        - link "Dashboard" [ref=f4e20] [cursor=pointer]:
          - /url: dashboard.php
      - listitem [ref=f4e21]:
        - link "Stock Items" [ref=f4e22] [cursor=pointer]:
          - /url: a_stock_itemslist.php?cmd=resetall
      - listitem [ref=f4e24]:
        - link "Suppliers" [ref=f4e25] [cursor=pointer]:
          - /url: a_supplierslist.php
      - listitem [ref=f4e26]:
        - link "Purchases" [ref=f4e27] [cursor=pointer]:
          - /url: a_purchaseslist.php?cmd=resetall
      - listitem [ref=f4e28]:
        - link "Customers" [ref=f4e29] [cursor=pointer]:
          - /url: a_customerslist.php
      - listitem [ref=f4e30]:
        - link "Sales" [ref=f4e31] [cursor=pointer]:
          - /url: a_saleslist.php?cmd=resetall
      - listitem [ref=f4e32]:
        - link "Outstandings" [ref=f4e33] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f4e35]:
        - link "Administrator" [ref=f4e36] [cursor=pointer]:
          - /url: "#"
      - listitem [ref=f4e38]:
        - link " Help (Categories)" [ref=f4e39] [cursor=pointer]:
          - /url: help_categorieslist.php
          - generic [ref=f4e40]: 
          - text: Help (Categories)
        - text:   
      - listitem [ref=f4e42]:
        - link " Settings" [ref=f4e43] [cursor=pointer]:
          - /url: "#"
          - generic [ref=f4e44]: 
          - text: Settings
        - text:          
      - listitem [ref=f4e46]:
        - link " Logout" [ref=f4e47] [cursor=pointer]:
          - /url: logout.php
          - generic [ref=f4e48]: 
          - text: Logout
    - list
  - generic [ref=f4e51]:
    - generic [ref=f4e52]:
      - list [ref=f4e53]:
        - listitem [ref=f4e54]:
          - link "" [ref=f4e55] [cursor=pointer]:
            - /url: index.php
        - listitem [ref=f4e57]: / Suppliers
        - link "" [ref=f4e58] [cursor=pointer]:
          - /url: javascript:void(0);
      - generic [ref=f4e61]:
        - button "" [ref=f4e62] [cursor=pointer]
        - text:       
      - generic [ref=f4e66]:
        - button "" [ref=f4e67] [cursor=pointer]
        - link "" [ref=f4e69] [cursor=pointer]:
          - /url: a_supplierssrch.php
      - button "" [ref=f4e73] [cursor=pointer]
      - generic [ref=f4e77]:
        - generic [ref=f4e78] [cursor=pointer]:
          - radio "en" [checked]
          - text: en
        - generic [ref=f4e79] [cursor=pointer]:
          - radio "id"
          - text: id
    - generic [ref=f4e81]:
      - generic [ref=f4e82]:
        - generic:
          - generic [ref=f4e83]:
            - generic [ref=f4e84]: Page Size
            - combobox [ref=f4e85]:
              - option "1"
              - option "2"
              - option "3"
              - option "5"
              - option "7"
              - option "10" [selected]
              - option "15"
              - option "20"
              - option "50"
              - option "100"
              - option "500"
              - option "1000"
          - generic [ref=f4e86]:
            - generic [ref=f4e87]: Page
            - generic [ref=f4e89]:
              - generic [ref=f4e90]:
                - generic: 
                - generic: 
              - textbox [ref=f4e91]: "1"
              - generic [ref=f4e92]:
                - link "" [ref=f4e93] [cursor=pointer]:
                  - /url: a_supplierslist.php?start=11
                - link "" [ref=f4e95] [cursor=pointer]:
                  - /url: a_supplierslist.php?start=951
            - generic [ref=f4e97]: of 96
          - generic [ref=f4e98]: Records 1 to 10 of 958
        - generic [ref=f4e100]:
          - link "+" [ref=f4e103] [cursor=pointer]:
            - /url: a_suppliersadd.php?showdetail=
          - generic [ref=f4e106]:
            - button "" [ref=f4e107] [cursor=pointer]
            - text:  
      - generic [ref=f4e112]:
        - table [ref=f4e114]:
          - rowgroup [ref=f4e115]:
            - row [ref=f4e116]:
              - cell [ref=f4e117]:
                - table [ref=f4e118]:
                  - rowgroup [ref=f4e119]:
                    - row "Supplier Number Supplier Name Contact Person Phone Number Mobile Number Balance Is Stock Available?" [ref=f4e120]:
                      - columnheader [ref=f4e121]:
                        - checkbox [ref=f4e124]
                      - columnheader [ref=f4e125]
                      - columnheader [ref=f4e127]
                      - columnheader [ref=f4e129]
                      - columnheader [ref=f4e131]
                      - columnheader "Supplier Number" [ref=f4e133]
                      - columnheader "Supplier Name" [ref=f4e138]
                      - columnheader "Contact Person" [ref=f4e143]
                      - columnheader "Phone Number" [ref=f4e148]
                      - columnheader "Mobile Number" [ref=f4e153]
                      - columnheader "Balance" [ref=f4e158]
                      - columnheader "Is Stock Available?" [ref=f4e163]
              - cell [ref=f4e168]
        - table [ref=f4e170]:
          - rowgroup [ref=f4e171]:
            - row [ref=f4e172]:
              - cell [ref=f4e173]:
                - checkbox [ref=f4e176]
              - cell "" [ref=f4e177]:
                - generic [ref=f4e179]:
                  - generic [ref=f4e180] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e181]:
                - generic [ref=f4e183]:
                  - link "Purchase Now" [ref=f4e184] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000001&showdetail=a_purchases_detail
                  - link "" [ref=f4e186] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=1
                  - link "" [ref=f4e188] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=1
                  - link "" [ref=f4e190] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=1
              - cell [ref=f4e192]:
                - generic [ref=f4e194]:
                  - link "Purchases 3" [ref=f4e196] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000001
                    - text: Purchases
                    - generic [ref=f4e197]: "3"
                  - text: 
              - cell [ref=f4e198]:
                - generic [ref=f4e200]:
                  - link "Stock Items 2" [ref=f4e202] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000001
                    - text: Stock Items
                    - generic [ref=f4e203]: "2"
                  - text: 
              - cell "Supplier-00000000001" [ref=f4e204]
              - cell "First Supplier" [ref=f4e207]
              - cell "John Mc. Enroe" [ref=f4e210]
              - cell "022124415093" [ref=f4e213]
              - cell "0824132048929" [ref=f4e216]
              - cell "Rp 16,040,000.00" [ref=f4e219]
              - cell "Yes" [ref=f4e222]
            - row [ref=f4e225]:
              - cell [ref=f4e226]:
                - checkbox [ref=f4e229]
              - cell "" [ref=f4e230]:
                - generic [ref=f4e232]:
                  - generic [ref=f4e233] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e234]:
                - generic [ref=f4e236]:
                  - link "Purchase Now" [ref=f4e237] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000002&showdetail=a_purchases_detail
                  - link "" [ref=f4e239] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=2
                  - link "" [ref=f4e241] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=2
                  - link "" [ref=f4e243] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=2
              - cell [ref=f4e245]:
                - generic [ref=f4e247]:
                  - link "Purchases 2" [ref=f4e249] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000002
                    - text: Purchases
                    - generic [ref=f4e250]: "2"
                  - text: 
              - cell [ref=f4e251]:
                - generic [ref=f4e253]:
                  - link "Stock Items 4" [ref=f4e255] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000002
                    - text: Stock Items
                    - generic [ref=f4e256]: "4"
                  - text: 
              - cell "Supplier-00000000002" [ref=f4e257]
              - cell "Second Supplier" [ref=f4e260]
              - cell "Martina Navatrilova" [ref=f4e263]
              - cell "02148272080" [ref=f4e266]
              - cell "081232442840" [ref=f4e269]
              - cell "Rp 7,750,000.00" [ref=f4e272]
              - cell "Yes" [ref=f4e275]
            - row [ref=f4e278]:
              - cell [ref=f4e279]:
                - checkbox [ref=f4e282]
              - cell "" [ref=f4e283]:
                - generic [ref=f4e285]:
                  - generic [ref=f4e286] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e287]:
                - generic [ref=f4e289]:
                  - link "Purchase Now" [ref=f4e290] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000003&showdetail=a_purchases_detail
                  - link "" [ref=f4e292] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=3
                  - link "" [ref=f4e294] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=3
                  - link "" [ref=f4e296] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=3
              - cell [ref=f4e298]:
                - generic [ref=f4e300]:
                  - link "Purchases 1" [ref=f4e302] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000003
                    - text: Purchases
                    - generic [ref=f4e303]: "1"
                  - text: 
              - cell [ref=f4e304]:
                - generic [ref=f4e306]:
                  - link "Stock Items 3" [ref=f4e308] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000003
                    - text: Stock Items
                    - generic [ref=f4e309]: "3"
                  - text: 
              - cell "Supplier-00000000003" [ref=f4e310]
              - cell "Third Supplier" [ref=f4e313]
              - cell "Joko Sentul" [ref=f4e316]
              - cell "03142348293" [ref=f4e319]
              - cell "081242009827" [ref=f4e322]
              - cell "Rp 3,600,000.00" [ref=f4e325]
              - cell "Yes" [ref=f4e328]
            - row [ref=f4e331]:
              - cell [ref=f4e332]:
                - checkbox [ref=f4e335]
              - cell "" [ref=f4e336]:
                - generic [ref=f4e338]:
                  - generic [ref=f4e339] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e340]:
                - generic [ref=f4e342]:
                  - link "Purchase Now" [ref=f4e343] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000004&showdetail=a_purchases_detail
                  - link "" [ref=f4e345] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=4
                  - link "" [ref=f4e347] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=4
                  - link "" [ref=f4e349] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=4
              - cell [ref=f4e351]:
                - generic [ref=f4e353]:
                  - link "Purchases 1" [ref=f4e355] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000004
                    - text: Purchases
                    - generic [ref=f4e356]: "1"
                  - text: 
              - cell [ref=f4e357]:
                - generic [ref=f4e359]:
                  - link "Stock Items 1" [ref=f4e361] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000004
                    - text: Stock Items
                    - generic [ref=f4e362]: "1"
                  - text: 
              - cell "Supplier-00000000004" [ref=f4e363]
              - cell "Fourth Supplier" [ref=f4e366]
              - cell "Siapa Sajalah" [ref=f4e369]
              - cell "0213248290" [ref=f4e372]
              - cell "081242932890" [ref=f4e375]
              - cell "Rp 1,700,000.00" [ref=f4e378]
              - cell "Yes" [ref=f4e381]
            - row [ref=f4e384]:
              - cell [ref=f4e385]:
                - checkbox [ref=f4e388]
              - cell "" [ref=f4e389]:
                - generic [ref=f4e391]:
                  - generic [ref=f4e392] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e393]:
                - generic [ref=f4e395]:
                  - link "Purchase Now" [ref=f4e396] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000005&showdetail=a_purchases_detail
                  - link "" [ref=f4e398] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=5
                  - link "" [ref=f4e400] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=5
                  - link "" [ref=f4e402] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=5
              - cell [ref=f4e404]:
                - generic [ref=f4e406]:
                  - link "Purchases" [ref=f4e408] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000005
                  - text: 
              - cell [ref=f4e409]:
                - generic [ref=f4e411]:
                  - link "Stock Items" [ref=f4e413] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000005
                  - text: 
              - cell "Supplier-00000000005" [ref=f4e414]
              - cell "bbcfgb" [ref=f4e417]
              - cell "bcv" [ref=f4e420]
              - cell "bcv" [ref=f4e423]
              - cell "bcv" [ref=f4e426]
              - cell "Rp 0.00" [ref=f4e429]
              - cell "No" [ref=f4e432]
            - row [ref=f4e435]:
              - cell [ref=f4e436]:
                - checkbox [ref=f4e439]
              - cell "" [ref=f4e440]:
                - generic [ref=f4e442]:
                  - generic [ref=f4e443] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e444]:
                - generic [ref=f4e446]:
                  - link "Purchase Now" [ref=f4e447] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000006&showdetail=a_purchases_detail
                  - link "" [ref=f4e449] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=6
                  - link "" [ref=f4e451] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=6
                  - link "" [ref=f4e453] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=6
              - cell [ref=f4e455]:
                - generic [ref=f4e457]:
                  - link "Purchases" [ref=f4e459] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000006
                  - text: 
              - cell [ref=f4e460]:
                - generic [ref=f4e462]:
                  - link "Stock Items" [ref=f4e464] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000006
                  - text: 
              - cell "Supplier-00000000006" [ref=f4e465]
              - cell "hfghgf" [ref=f4e468]
              - cell "hgf" [ref=f4e471]
              - cell "hgf" [ref=f4e474]
              - cell "hg" [ref=f4e477]
              - cell "Rp 0.00" [ref=f4e480]
              - cell "No" [ref=f4e483]
            - row [ref=f4e486]:
              - cell [ref=f4e487]:
                - checkbox [ref=f4e490]
              - cell "" [ref=f4e491]:
                - generic [ref=f4e493]:
                  - generic [ref=f4e494] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e495]:
                - generic [ref=f4e497]:
                  - link "Purchase Now" [ref=f4e498] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000007&showdetail=a_purchases_detail
                  - link "" [ref=f4e500] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=7
                  - link "" [ref=f4e502] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=7
                  - link "" [ref=f4e504] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=7
              - cell [ref=f4e506]:
                - generic [ref=f4e508]:
                  - link "Purchases" [ref=f4e510] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000007
                  - text: 
              - cell [ref=f4e511]:
                - generic [ref=f4e513]:
                  - link "Stock Items" [ref=f4e515] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000007
                  - text: 
              - cell "Supplier-00000000007" [ref=f4e516]
              - cell "bb" [ref=f4e519]
              - cell "vxc" [ref=f4e522]
              - cell "vxc" [ref=f4e525]
              - cell "vxc" [ref=f4e528]
              - cell "Rp 0.00" [ref=f4e531]
              - cell "No" [ref=f4e534]
            - row [ref=f4e537]:
              - cell [ref=f4e538]:
                - checkbox [ref=f4e541]
              - cell "" [ref=f4e542]:
                - generic [ref=f4e544]:
                  - generic [ref=f4e545] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e546]:
                - generic [ref=f4e548]:
                  - link "Purchase Now" [ref=f4e549] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000008&showdetail=a_purchases_detail
                  - link "" [ref=f4e551] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=8
                  - link "" [ref=f4e553] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=8
                  - link "" [ref=f4e555] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=8
              - cell [ref=f4e557]:
                - generic [ref=f4e559]:
                  - link "Purchases 1" [ref=f4e561] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000008
                    - text: Purchases
                    - generic [ref=f4e562]: "1"
                  - text: 
              - cell [ref=f4e563]:
                - generic [ref=f4e565]:
                  - link "Stock Items" [ref=f4e567] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000008
                  - text: 
              - cell "Supplier-00000000008" [ref=f4e568]
              - cell "John" [ref=f4e571]
              - cell "Qedge" [ref=f4e574]
              - cell "876543" [ref=f4e577]
              - cell "765432" [ref=f4e580]
              - cell "Rp 0.00" [ref=f4e583]
              - cell "No" [ref=f4e586]
            - row [ref=f4e589]:
              - cell [ref=f4e590]:
                - checkbox [ref=f4e593]
              - cell "" [ref=f4e594]:
                - generic [ref=f4e596]:
                  - generic [ref=f4e597] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e598]:
                - generic [ref=f4e600]:
                  - link "Purchase Now" [ref=f4e601] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000009&showdetail=a_purchases_detail
                  - link "" [ref=f4e603] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=9
                  - link "" [ref=f4e605] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=9
                  - link "" [ref=f4e607] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=9
              - cell [ref=f4e609]:
                - generic [ref=f4e611]:
                  - link "Purchases" [ref=f4e613] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000009
                  - text: 
              - cell [ref=f4e614]:
                - generic [ref=f4e616]:
                  - link "Stock Items" [ref=f4e618] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000009
                  - text: 
              - cell "Supplier-00000000009" [ref=f4e619]
              - cell "John" [ref=f4e622]
              - cell "Qedge" [ref=f4e625]
              - cell "876543" [ref=f4e628]
              - cell "765432" [ref=f4e631]
              - cell "Rp 0.00" [ref=f4e634]
              - cell "No" [ref=f4e637]
            - row [ref=f4e640]:
              - cell [ref=f4e641]:
                - checkbox [ref=f4e644]
              - cell "" [ref=f4e645]:
                - generic [ref=f4e647]:
                  - generic [ref=f4e648] [cursor=pointer]: 
                  - text:  
              - cell [ref=f4e649]:
                - generic [ref=f4e651]:
                  - link "Purchase Now" [ref=f4e652] [cursor=pointer]:
                    - /url: a_purchasesadd.php?Supplier_Number=Supplier-00000000010&showdetail=a_purchases_detail
                  - link "" [ref=f4e654] [cursor=pointer]:
                    - /url: a_suppliersview.php?showdetail=&Supplier_ID=10
                  - link "" [ref=f4e656] [cursor=pointer]:
                    - /url: a_suppliersedit.php?showdetail=&Supplier_ID=10
                  - link "" [ref=f4e658] [cursor=pointer]:
                    - /url: a_suppliersadd.php?showdetail=&Supplier_ID=10
              - cell [ref=f4e660]:
                - generic [ref=f4e662]:
                  - link "Purchases" [ref=f4e664] [cursor=pointer]:
                    - /url: a_purchaseslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000010
                  - text: 
              - cell [ref=f4e665]:
                - generic [ref=f4e667]:
                  - link "Stock Items" [ref=f4e669] [cursor=pointer]:
                    - /url: a_stock_itemslist.php?showmaster=a_suppliers&fk_Supplier_Number=Supplier-00000000010
                  - text: 
              - cell "Supplier-00000000010" [ref=f4e670]
              - cell "John" [ref=f4e673]
              - cell "Qedge" [ref=f4e676]
              - cell "876543" [ref=f4e679]
              - cell "765432" [ref=f4e682]
              - cell "Rp 0.00" [ref=f4e685]
              - cell "No" [ref=f4e688]
          - rowgroup [ref=f4e691]:
            - row "Rp 29,090,000.00" [ref=f4e692]:
              - cell [ref=f4e693]
              - cell [ref=f4e695]
              - cell [ref=f4e697]
              - cell [ref=f4e699]
              - cell [ref=f4e701]
              - cell [ref=f4e703]
              - cell [ref=f4e705]
              - cell [ref=f4e707]
              - cell [ref=f4e709]
              - cell [ref=f4e711]
              - cell "Rp 29,090,000.00" [ref=f4e713]:
                - generic [ref=f4e715]:
                  - text: ":"
                  - generic [ref=f4e716]: Rp 29,090,000.00
              - cell [ref=f4e717]
      - generic [ref=f4e719]:
        - generic:
          - generic [ref=f4e720]:
            - generic [ref=f4e721]: Page Size
            - combobox [ref=f4e722]:
              - option "1"
              - option "2"
              - option "3"
              - option "5"
              - option "7"
              - option "10" [selected]
              - option "15"
              - option "20"
              - option "50"
              - option "100"
              - option "500"
              - option "1000"
          - generic [ref=f4e723]:
            - generic [ref=f4e724]: Page
            - generic [ref=f4e726]:
              - generic [ref=f4e727]:
                - generic: 
                - generic: 
              - textbox [ref=f4e728]: "1"
              - generic [ref=f4e729]:
                - link "" [ref=f4e730] [cursor=pointer]:
                  - /url: a_supplierslist.php?start=11
                - link "" [ref=f4e732] [cursor=pointer]:
                  - /url: a_supplierslist.php?start=951
            - generic [ref=f4e734]: of 96
          - generic [ref=f4e735]: Records 1 to 10 of 958
        - generic [ref=f4e737]:
          - link "+" [ref=f4e740] [cursor=pointer]:
            - /url: a_suppliersadd.php?showdetail=
          - generic [ref=f4e743]:
            - button "" [ref=f4e744] [cursor=pointer]
            - text:  
  - generic [ref=f4e749]:
    - text: ©2015
    - link "Masino Sinaga" [ref=f4e750] [cursor=pointer]:
      - /url: http://www.ilovephpmaker.com
    - text: . All rights reserved. |
    - link "Terms and Conditions" [ref=f4e751] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "About Us" [ref=f4e752] [cursor=pointer]:
      - /url: javascript:void(0);
    - text: "|"
    - link "Back to Top" [ref=f4e753] [cursor=pointer]:
      - /url: javascript:void(0);
    - generic [ref=f4e754]: Your session will expire in 158 seconds.
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
  42 |         this.Searchpanel=page.locator("//button[@data-caption='Search Panel']")
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
> 76 |         await this.Searchtextbox.clear()
     |                                  ^ Error: locator.clear: Test timeout of 30000ms exceeded.
  77 |         await this.Searchtextbox.fill(Exp_num)
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