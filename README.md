# localStorage
In **JavaScript**, `localStorage` is a built-in **Web Storage API** that allows you to store data in the browser.
### Key Points:
- Stores data as **key-value pairs** (both strings).
- Data persists even after **page reloads or browser restarts** (until manually cleared).
- Storage limit is usually around **5–10 MB** depending on the browser.
- Accessible only in the **same origin** (same domain + protocol + port).

### Basic Methods:
```javascript
// Save data
localStorage.setItem("username", "Shafin");

// Get data
let user = localStorage.getItem("username");
console.log(user); // "Shafin"

// Remove specific data
localStorage.removeItem("username");

// Clear all data
localStorage.clear();
```
### Example with Objects:

Since `localStorage` only stores strings, you need `JSON.stringify()` and `JSON.parse()` for objects/arrays:
```javascript
// Save object
let userInfo = { name: "Shafin", age: 22 };
localStorage.setItem("userInfo", JSON.stringify(userInfo));

// Retrieve object
let data = JSON.parse(localStorage.getItem("userInfo"));
console.log(data.name); // "Shafin"
```
- Use `localStorage` when you want to **persist small amounts of data** (like user preferences, theme, login tokens).
- For temporary storage that clears when the tab/browser is closed, use `sessionStorage`.
