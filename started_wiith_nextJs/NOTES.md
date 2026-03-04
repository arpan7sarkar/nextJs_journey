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


### Network & Data: Parameters, Headers, and Cookies

#### 1. Query Parameters
Query parameters (e.g., `/search?q=nextjs`) are used to pass key-value pairs at the end of a URL.

**Common Use Cases:**
*   **Filtering:** `?category=electronics`
*   **Searching:** `?q=laptop`
*   **Pagination:** `?page=2&limit=10`

**Syntax in API Routes (`route.js`):**
```typescript
export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    return Response.json({ query });
}
```

#### 2. HTTP Headers
Headers provide metadata about the request or response.

*   **Request Headers:** `User-Agent` (client info), `Authorization` (JWT token), `Accept` (content type).
*   **Response Headers:** `Content-Type`, `Cache-Control`, `Set-Cookie`.

**Usage in Next.js:**
```typescript
import { headers } from "next/headers";

export async function GET(request: Request) {
    // 1. Using standard Headers class
    const requestHeaders = new Headers(request.headers);
    const auth = requestHeaders.get("Authorization");

    // 2. Using Next.js headers() function (Server Components/API Routes)
    const headersList = await headers();
    const specificHeader = headersList.get("User-Agent");

    // Setting Response Headers
    return new Response(JSON.stringify({ message: "Done" }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
            "X-Custom-Header": "next-js-app"
        }
    });
}
```

#### 3. Cookies
Cookies are small pieces of data stored in the browser and automatically sent back to the same server on every request.

**Common Use Cases:**
*   **Session Management:** Login state, shopping carts.
*   **Personalization:** Themes, language settings.
*   **Analytics:** Tracking user behavior.

**Syntax in API Routes:**
```javascript
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request) {
    // Reading Cookies
    const cookieStore = await cookies();
    const myCookie = cookieStore.get("sessionID");

    // Setting Cookies
    const response = NextResponse.json({ message: "Cookie set!" });
    response.cookies.set("theme", "dark", {
        path: "/",
        httpOnly: true, // Secure practice
        maxAge: 60 * 60 * 24 // 1 day
    });

    return response;
}
```

### Data Fetching and Caching

#### `fetch` API and Caching Behaviors in Next.js

Next.js extends the native `fetch` API to allow for granular control over caching and revalidation on the server.

1.  **Default Behavior (Dynamic Fetching)**
    *   By default, `fetch` behaves based on the rendering context. In Server Components, it might be cached or dynamic depending on other factors (like `cookies()` or `headers()` usage).

2.  **Force Cache (Static Data)**
    *   Stores the result in the Data Cache. Subsequent requests will hit the cache instead of the origin server.
    *   **Use Case:** Data that rarely changes (e.g., blog posts, product descriptions).

```javascript
const data = await fetch("https://api.example.com/data", {
    cache: "force-cache"
});
```

3.  **No Cache (Live Data)**
    *   Fetches the data from the source on every request.
    *   **Use Case:** Real-time data, dashboards, user-specific data.

```javascript
const data = await fetch("https://api.example.com/data", {
    cache: "no-store"
});
```

4.  **Incremental Static Regeneration (ISR / Revalidate)**
    *   Caches the data for a specific duration (in seconds).
    *   **Use Case:** Data that updates periodically (e.g., world news, stock prices).

```javascript
const data = await fetch("https://api.example.com/data", {
    next: { revalidate: 10 } // Cache for 10 seconds
});
```


### Client-Side Hooks

Next.js provides specific hooks to access routing and URL information in **Client Components** (`"use client"`).

#### 1. `useParams`
Used to access dynamic route parameters (e.g., `[id]`).
*   **Context:** Dynamic segments like `[user]` or `[...slug]`.
*   **Return Type:** Object (for regular segments) or Array (for catch-all segments).

```javascript
"use client";
import { useParams } from "next/navigation";

const UserPage = () => {
    const params = useParams();
    return <h1>User ID: {params.id}</h1>;
}
```

#### 2. `usePathname`
Returns the current URL's **pathname** (e.g., `/dashboard/profile`).
*   Does **not** include query parameters (`?q=...`) or hashes (`#top`).
*   Useful for conditional rendering or tracking current routes.

#### 3. `useSearchParams`
Reads and interacts with query parameters in the current URL.
*   **Common Use Cases:** Dynamic filtering, deep linking, and pagination.
*   **Multiple Values:** Handles keys with multiple values like `?tags=js&tags=react`.

```javascript
"use client";
import { useSearchParams } from "next/navigation";

const Products = () => {
    const searchParams = useSearchParams();
    const category = searchParams.get("category");
    return <p>Showing products for {category}</p>;
}
```

#### 4. `useRouter`
Provides programmatical navigation (e.g., pushing routes, replacing history).

```javascript
"use client";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    const handleLogin = () => {
        router.push("/dashboard");
    };
    return <button onClick={handleLogin}>Login</button>;
}
```

---

##### 404 - Not Found Pages
To replace the default Next.js 404 page, simply create a file named `not-found.tsx` (or `.js`) in the `app/` directory or inside any specific route segment.
