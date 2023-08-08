---
title: The Art of Readable Code. Part 2
description: Continue reading “The Art of Readable Code”.
datetime: 2017-03-27T18:15
cover: cover.webp
tags:
  - antipatterns
  - books
  - brain
  - documentation
  - focus
  - patterns
---

# The Art of Readable Code. Part 2

Continue reading [“The Art of Readable Code”](https://www.goodreads.com/book/show/8677004-the-art-of-readable-code).

[Last time](/blog/the-art-of-readable-code) we discussed chapters 1-4: the names of variables and functions, their ambiguity, code aesthetics, and simplicity. In this post, we'll discuss chapters 5-7.

## Chapter 5. Comments are Needed So That the Reader Knows as Much as the Author

TL;DR:

- If the comment doesn't provide any additional information, you don't need it;
- Explain the flaws of the code, explain the constants;
- Explain “why this is” rather than “what this is”;
- Good code is better than bad code with good comments;
- Think like a beginner.

Comments take up screen space and time to read. Don't comment on what is clear from the code.

Bad variable or function names should not be commented on, but corrected. The comment is only visible in one place, while the name is visible everywhere. In the first example, the comment tries to clarify the situation, while in the second, the name does everything by itself:

```
// Doesn't actually delete the record, but ends the processing:
void DeleteRegistry(RegistryKey* key);

void ReleaseRegistryHandle(RegistryKey* key);
```

If there's a story behind the decision, it's better to tell it:

```
// Suddenly the binary tree in this case allowed to speed up the algorithm by 40%.
```

Comments can alert the reader about the flaws or tell the reader why this particular solution was used:

```
// If the argument is greater than 500, it returns a rounded value.
// Other algorithms work twice as slow.
```

Constants usually have a history of how they came to be. You can tell us about it, too:

```
// Optimum size-quality ratio.
const IMAGE_QUALITY = 0.72;
```

Or the constant may be an approximation:

```
// No one else will read that much anyway.
const MAX_RSS_SUBSCRIPTIONS = 1000;
```

It is good practice to think about what will need to be explained to a newcomer to the project. For example, thinking “this is the link between the business logic and the database” or “this is the caching mechanism, it knows nothing about the rest of the system” is exactly what should be written down.

## Chapter 6. Comments Should be Short

TL;DR:

- Tell by example;
- Explain “magic values”;
- Make it shorter.

The easiest way to explain how the function works is with an example. Here it is not clear whether the function will remove only exact matches with _chars_, or just the characters that _chars_ consists of:

```
// It removes combinations of 'chars' from the input 'src'.
String Strip(String src, String chars) { ... }
```

This is clearer:

```
// @example: Strip("abba/a/ba", "ab") => "/a/"
String Strip(String src, String chars) { ... }
```

In languages where named arguments cannot be specified, functions often have “magic arguments”:

```
connect(10, false);
```

What _10_ and _false_ mean is not clear without documentation. If you can't change the function, you can use comments to clarify:

```
connect(/* timeout_ms = */ 10, /* use_encryption = */ false);
```

But such a comment must come before the argument. Otherwise it would be completely incomprehensible.

Keep your comments short and choose precise words for them.

## Chapter 7. Write so You Don't Have to Reread It

TL;DR:

- Compare the changing with the constant, not the other way around;
- Use early return;
- Be careful with ternary operators;
- Reduce nesting.

The order of the operands in the comparison is important. It is better to put what is changing on the left and what is constant on the right:

```
// Okay:
if (length >= 10) {...

// Not so...
if (10 <= length) {...
```

If both values change, the one on the right should be the one that is more constant:

```
// Better:
while (bytes_received < bytes_expected)

// Worse:
while (bytes_expected > bytes_received)
```

Check the simplest cases first to return from the condition or function more quickly:

```
if (!response) return null

try {
  response.getHeader()
  ...
}
...
```

Ternary operators are ok. But if the expression is too complex, replace it with `if...else`:

```
// Okay:
time_postfix = (hour >= 12) ? "pm" : "am";

// Not so:
return exponent >= 0 ? mantissa * (1 << exponent) : mantissa / (1 << -exponent);
```

Reduce code nesting—write wrappers and auxiliary functions, use early return. If you can't keep track of how a function is executed, simplify it.

## What's Next

Next time we'll discuss:

- How to break large expressions into chunks;
- Variables and how they affect readability;
- Extra and unnecessary functionality;
- The “one task at a time” technique.
