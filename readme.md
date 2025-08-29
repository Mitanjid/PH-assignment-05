# সহজ সরল সিম্পল ASSIGNMENT-005 এর Q&A

## Questions & Answers

---

### **1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?**

**Ans:**

-> getElementById(id): Selects a single element based on its unique id attribute. HTML ids are intended to be unique within a document.

-> getElementsByClassName(className): Selects all elements that possess a specific class name.

->querySelector('selector') → Selects the first element that matches a CSS selector (e.g., #id, .class, div > p).

->querySelectorAll('selector') → Selects all elements matching a CSS selector. Returns a NodeList (static).

---

### **2. How do you create and insert a new element into the DOM?**

**Ans:**

- Create element: - document.createElement('tagName')

- Insert element: - appendChild() prepend() innerHTML

---

### **3. What is Event Bubbling and how does it work?**

**Ans:**

Event bubbling is a JavaScript mechanism where an event, like a click, triggers on a child element and then propagates up through its ancestor elements (parents, grandparents, etc.) toward the DOM root.

**How It Works:**

You click on a child element (e.g., a button inside a div).The event is first handled on that button.Then it moves (or “bubbles”) up to its parent <#div> then <#body>,then <#html>, and finally document.

---

### **4. What is Event Delegation in JavaScript? Why is it useful?**

**Ans:**

Event Delegation is when you add an event listener to a parent element instead of each child. The event uses bubbling to check the target.

Useful because:
Saves memory (fewer event listeners).
Handles dynamically added elements.

---

### **5. What is the difference between `preventDefault()` and `stopPropagation()` methods?**

**Ans:**

preventDefault() → Stops the default action (e.g., prevents form submission, stops link navigation).

stopPropagation() → Stops the event from bubbling up to parent elements

---
