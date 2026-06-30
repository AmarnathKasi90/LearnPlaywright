JavaScript Program runs in 2 phases

Phase 1: Compilation/Parsing Phase

When a JS file runs, first the entire code is scanned — it doesn't execute line by line yet, it just reads everything.

In this phase, JS comes to know:

Line 1: console.log(a) — a is being used

Line 2: let a = 10 — a is a let variable

So it registers a in memory — but for let/const, it does NOT initialize it (not even undefined). This is the TDZ.



Phase 2: Execution Phase

Now it runs line by line:



Example :-Imagine a hotel:

Phase 1 = Receptionist checks the booking list

var → Room is reserved AND a key is given (undefined key) 🔑

let → Room is reserved but NO key yet 🚫

Phase 2 = You arrive at the hotel

var → You get in (undefined) ✅

let → Guard says "Your room exists but key isn't ready yet!" → ReferenceError ❌