import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//clsx
// is a utility for constructing className strings conditionally
/*
It takes any number of arguments (strings, objects, arrays, etc.) and returns a single space-separated string of class names, ignoring any falsey values (false, null, undefined, etc.).

✅ Usage Examples:
✅ Basic String Usage
js
Copy
Edit
clsx('btn', 'btn-primary')
/// → 'btn btn-primary'
✅ Conditional Class Names
js
Copy
Edit
clsx('btn', { 'btn-disabled': isDisabled })
/// → 'btn' (if isDisabled is false)
/// → 'btn btn-disabled' (if isDisabled is true)
✅ Mixing Types
js
Copy
Edit
clsx('card', ['shadow', { 'active': isActive }])
///→ 'card shadow active' (if isActive is true)
*/