Next js follows file based routing
each file name means refering to each route
that means if i create a file called signup inside it i write page.tsx then after npm run dev going to /signup i will see the content

In case of too much of dynamic nested routing we sometiems face a big problem that is so much folders needs to get created for resolving this problem we have a saviour 
**catch all segment** synatx **[...param]**

we also have advanced version of it 
**optional catch all page segment** synatx **[[...param]]**
this will also gonna handle if no dynamic route had been provided

Try to use only one at a time 

##### Route group
suppose you want to structure the folder a little like putting all the auth related folders ( signin , signup eg) . but will have a issue for hitting this route 
you have to write something like /auth/signin this willl revel your folder structure also makuing url look worser it will better if it looks like /signin 
for achiving /auth/signin -> /sigin all we have to do is wrapping the folder with () ex  renaming folder auth to (auth) now you have access for /signin directly

 ##### Private folders
 suppose you want to create a specific folder but you don't want next js to track it and think  it as route then you have to use private folders 
 before writing folder name just add a **Underscore _** then it will become private
 eg : utils ❌ _utils✅
 usecase ( suppose in a route create a compontet folder then write _components)


 ##### Intersepting page
 Intersepting page are type of page that popup to layout ( like popup, model , drawer)
 the url stilll updates that means it changes the page proeprly
 same level -> (.)
 1 level up -> (..)
 2 level up -> (..)(..)
 from root -> (...)


##### Parallal routes
its let you render parallal pages , layouts in a single one , 
ex:: Leetcode coding page
procedure :
    you define slots where each page will render 
    each slot can have its own navigation , state, error-boundaries , even ve conditionally

for creating parrallal route you have to at first define a route (folder)
    then have to write layout.tsx , page.tsx then after that 
    which ever page you want to add as parrallar route you have to name the folder as 
    @folder-name