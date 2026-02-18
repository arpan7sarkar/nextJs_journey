## Router in Next.js

### What is a Router?
A **router** is responsible for managing **navigation between different pages** in an application.

---

### Routers in Next.js
Next.js provides **two routing systems**:

1. **Page Router (Older Way)**
   - Based on the `pages/` directory
   - Uses file-based routing
   - Still supported, but **considered old**
   - Rarely used in new projects

2. **App Router (New Approach)**
   - Based on the `app/` directory
   - Modern and recommended by Next.js
   - Supports layouts, nested routes, and better data handling
   - Preferred choice for new applications
```md
## Next.js File-Based Routing

### File-Based Routing
Next.js follows **file-based routing**.
- Each **folder / file name maps to a route**
- Creating a file automatically creates a URL

**Example:**
```

app/signup/page.tsx

````
After `npm run dev`, visiting  
👉 `/signup` will render the content of `page.tsx`

---

### Dynamic & Nested Routing Problem
With deeply nested dynamic routes, we may need to create **many folders**, which becomes messy.

To solve this, Next.js provides **Catch-All Segments**.

---

### Catch-All Segment
**Syntax:**  
```txt
[...param]
````

* Captures **multiple dynamic route segments**
* Useful for deeply nested dynamic routes

---

### Optional Catch-All Segment

**Syntax:**

```txt
[[...param]]
```

* Advanced version of catch-all
* Works **even when no dynamic route is provided**
* Handles both `/route` and `/route/anything`

⚠️ Use **only one** at a time (catch-all OR optional catch-all)

---

### Route Groups

Used for **organizing folders without affecting URLs**.

**Problem:**

```
/auth/signin
```

Reveals folder structure and makes URL longer.

**Solution:**
Wrap the folder name in parentheses.

```
(auth)/signin/page.tsx
```

Now the route becomes:

```
/signin
```

Folder structure stays clean, URL stays simple.

---

### Private Folders

Private folders are **ignored by the router**.

**Syntax:** Prefix folder name with `_`

❌ `utils`
✅ `_utils`

**Use case:**

* Storing helper files
* Components inside a route

Example:

```
_components/
```

---

### Intercepting Pages

Intercepting pages are used for **popups, modals, drawers**, etc.

* Page appears as an overlay
* URL still updates correctly

**Navigation levels:**

* Same level → `(.)`
* 1 level up → `(..)`
* 2 levels up → `(..)(..)`
* From root → `(...)`

---

### Parallel Routes

Parallel routes allow rendering **multiple pages or layouts in parallel**.

**Example:**
LeetCode-style coding page (editor, testcases, description)

**How it works:**

1. Define a route folder
2. Add `layout.tsx` and `page.tsx`
3. Create parallel routes using:

```
@folder-name
```

**Features:**

* Each route has its own:

  * Navigation
  * State
  * Error boundaries
* Can be conditionally rendered

---

### Unmatched Routes (Parallel Routes)

If after reload or navigation you get **404 errors**, use:

```txt
default.tsx
```

Place it at the **root level of that route** to handle unmatched cases.

---

### Components in Next.js

#### Server Components

1. **Default** component type in Next.js
2. Rendered on the **server**
3. Output is **static HTML or minimal JS**
4. Best for **performance**

**Notes:**

* `console.log` runs in the **terminal**
* Browser shows a **server flag**
* Can use built-in APIs like `fetch`, `os`

**Advantages:**

1. Secure data fetching
2. Direct DB queries, API calls, file access
3. Smaller JS sent to client

**Disadvantages:**

1. No browser APIs (`window`, `document`)
2. No React hooks (`useState`, `useEffect`)
3. Interactivity requires Client Components

---

#### Client Components

1. Run in the **browser**
2. Used for **interactivity**

   * Buttons
   * Forms
   * Animations
   * State management
3. Must start with:

```ts
"use client";
```

📌 Use Client Components **only when needed** to keep performance high.

```
```


Query params Cookies , Headers , Cookie
Query parameter are key value pairs that we add at the end of a url to pass extra information to the server

ex : url / xyz ?key = value

?key=value is the way for using query parameter
use 
1. filer
2. searching 
3. pagination
   ``` ts
   const searchParams = request.nextUrl.searchParams;

   ``` 

headers == metadata send by http request /responce

1. request header
   1. Carry info about the incoming request
   2. user-agent ->client
   3. accept , authorization
2. respose headers
   1. send back with response
   2. content type application json , cache control , set cookie
3. 
``` ts
two way 

   using inbuiild headers class
    const requestHeader = new Headers(request.headers);
    const authHeader = requestHeader.get("Authorization");


// using next js headers
    const headerList = await headers();// headers is comming from next js
    const authHeader2= headerList.get("Authorization");



   for returning / returning header
   2 approch

   return NextResponse.json({
        data: "Hello world from profile"
    }, {
        headers: {
            "names": "Arpan, Lol",
            "ok":"Yes bro"
        }
    })

    return new Response("<h1>Hello Bro</h1>" ,{
        headers:{
            "Content-Type":"text/html",
            "CustomHeader":"its custom",

        }
    });

```
