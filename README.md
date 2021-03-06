# Inventory-management-app-frontend

Opening screen (which defaults to *search by article number* screen).

[![chrome_q71pkAbhul.png](https://i.imgur.com/1IWUQ0pm.jpg)](https://i.imgur.com/1IWUQ0p.png)

App is build out of 3 big segments:
- header
- main screen
- footer

## Header

Currently, header is pure placeholder. It holds logo and name of company/app.

[![chrome_xUnneoHi00.png](https://i.imgur.com/EFC9Wrum.jpg)](https://i.imgur.com/EFC9Wru.png)

## Main Screen

Main screen is seperated into another 3 sections:
- left panel
- screen
- right panel

[![chrome_mz6rvgZbUW.png](https://i.imgur.com/6IT3py1m.jpg)](https://i.imgur.com/6IT3py1.png)

### Left Panel

Left panel consist of 4 letter buttons, which are color coded (for example levels - ground level, first level, etc. - could be color coded respectively, in warehouse).

[![chrome_ZfybLvDqEr.png](https://i.imgur.com/YoCB1kHm.jpg)](https://i.imgur.com/YoCB1kH.png)

### Screen

Screen is where all information are being displayed. In this particular example it is going to be number of article we are going to look for.

[![chrome_ws03iDvhVe.png](https://i.imgur.com/YK3ieYgm.jpg)](https://i.imgur.com/YK3ieYg.png)

### Right Panel

Right panel serves as main input panel. You can choose numbers, cancel current input or confirm it.

[![webstorm64_7XxoTsMdoh.png](https://i.imgur.com/d2RDslfm.jpg)](https://i.imgur.com/d2RDslf.png)

## Footer

In footer, you can find 2 sections:
- navigation buttons
- info panel

[![chrome_SRsVfgIIMF.png](https://i.imgur.com/rxLAmzmm.jpg)](https://i.imgur.com/rxLAmzm.png)

On the left is navigation panel that have 3 buttons:
- Article
- Location
- Item

Which corresponds to 3 functions:
- search by article number
- search by location in warehouse
- add new item to database

On the right is basic info panel, that consist of username and current time.

# Functionality

Currently, app have 4 main functions:
- list all items by article number
- list all items by location
- add new item to database
- change location of item in warehouse

List all by article/location are similar functions that result in list of all items that met search query conditions.

For example, we can click `LOCATION` button and search all items by location (Every location is a string that consist of row, lot and level).

[![chrome_B0AJCx1cZy.png](https://i.imgur.com/m9aBxgCm.jpg)](https://i.imgur.com/m9aBxgC.png)

We use `Right panel` and `Left panel` to input location we want to search for - *00.00.0*.

[![chrome_xJbPEtxXRf.png](https://i.imgur.com/AtNqYtQm.jpg)](https://i.imgur.com/AtNqYtQ.png)

The result is table with list of all items in warehouse at location *00.00.0*.
Each item has its name, location, description and quantity.

[![chrome_hk34glxIni.png](https://i.imgur.com/rfzFoHlm.jpg)](https://i.imgur.com/rfzFoHl.png)

We can choose 1 item and move it to different location in our warehouse by clicking on desired item name. This will take us to screen on which we can input desired new location, using `Right panel` and `Left panel`.

[![chrome_ZJuquRtIfR.png](https://i.imgur.com/x4op1OBm.jpg)](https://i.imgur.com/x4op1OB.png)

[![chrome_Ny5m6GWqtG.png](https://i.imgur.com/RHM1mmTm.jpg)](https://i.imgur.com/RHM1mmT.png)

And update it location with `Update Location` button. We will be informed of successful data update to database.

[![chrome_NaUF6oEzMm.png](https://i.imgur.com/hAcnG9Vm.jpg)](https://i.imgur.com/hAcnG9V.png)

After which we can continue using app by choosing desired function from one of buttons in footer.

Searching by article number is very similar to searching by location. But it will give us list of all locations for desired article number.

[![chrome_xAI9zhuFjV.png](https://i.imgur.com/WKcFDUXm.jpg)](https://i.imgur.com/WKcFDUX.png)

We can also add new item to database, by clicking on a `ITEM` button in footer.
It will take us to screen with form to fill.

[![chrome_CsSCIrCGS5.png](https://i.imgur.com/pC7jPzam.jpg)](https://i.imgur.com/pC7jPza.png)

We have to use keyboard to fill out form. Form has some basic validation for data.

[![chrome_KBdymEoEte.png](https://i.imgur.com/wnvVS1Om.jpg)](https://i.imgur.com/wnvVS1O.png)

After adhering to all requirements of form and clicking on `ADD ITEM` button. We will see confirmation of successful addition of new item to database.

## PLANNED
- accounts/login screen and functionality
- delete item from database functionality
- hide adding new items, behind *special* account privileges
- list of validated locations and validation on location change with mentioned list
- refactoring (better use of modules in REACT - some duplicated modules could be rewritten into 1 separate module).
- use of header as additional info source for user.
- further refactoring and styling...
