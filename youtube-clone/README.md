Debouncing : For Api calls of Search Suggestion

typing slow = difference between keystrokes ~ 200ms
typing fast = difference between keystrokes ~ 30ms

Performance: 
- iphone pro max = 14 letters (14 API calls)
After adding debouncing = 3 Api calls {makes huge difference in performance}

Debouncing with 200ms
- if difference between 2 key strokes is 
< 200 ms -> Decline the API call
> 200 ms -> Make API call