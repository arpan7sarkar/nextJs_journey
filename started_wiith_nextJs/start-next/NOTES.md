Next js follows file based routing
each file name means refering to each route
that means if i create a file called signup inside it i write page.tsx then after npm run dev going to /signup i will see the content

In case of too much of dynamic nested routing we sometiems face a big problem that is so much folders needs to get created for resolving this problem we have a saviour 
**catch all segment** synatx **[...param]**

we also have advanced version of it 
**optional catch all page segment** synatx **[[...param]]**
this will also gonna handle if no dynamic route had been provided

Try to use only one at a time 

