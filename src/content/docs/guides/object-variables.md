---
title: Object variables
description: A guide on how to use objects inside of variables
---
In this guide, you will learn on how to use object variables!
# What is object variables?
object variables are basically a json inside of a variable regardless of it's type whether it meant for a guild, message, global, etc.

A example of object variable is this:
```js
wyr: {
upvotes: 0,
downvotes: 0
}
```

## Advantages
* Doesn't require making many variables just for a system you're working on
* Easy to use (even if it looks hard)
* Can be used for advanced stuff such as moderation case systems

## Getting started
Let's start by making a object variable first, we can have this example being added to our client variables setup:
```js
variable: {
// these are called properties
number: 0,
text: "whatever you like",
emptytext: "",
boolean: false
}
```

Note those types above do work the same as if you're making a normal variable with boolean, text, numbers or so.

Optionally, as with empty variable strings, you can also have objects empty:
```js
variable: {}
```

This can be useful if you want each object variable to have it's own unique data rather than including default properties.

### Getting data
Now as you use a get variable function, you get the current data of it depending on how you made that object variable.

This can become an issue however, when you only want to get a specific property from that variable.

### Getting specific property
To get a specific property, you can use `$getObjectProperty`.

:::note
You will need to first use `$createObject` with the object variable in order to get it registered as a object.

Also, `$getVar` and `$setVar` will be used as a example but you can change them according to your needs.
:::

Here's a example:
```js
// replace the propertyname with the actual property you have from your variable
$getObjectProperty[data;propertyname]
$getObjectProperty[data;propertyname]

$createObject[data;$getVar[variable]]
```

This will work as long as the properties you specified actually exists in your variable!

### Changing and saving data
Now with retrieving the data being out of the way, you will be wondering:

"How do i set data in my object variable?"

For this, we will use `$setObjectProperty` after which we will use `$setVar` with `$getObject` to save the data permanently! Here's a example:
```js
// save the data permanently
$setVar[variable;$getObject[data]]

// add new properties
$setObjectProperty[data;property2;example here as well]
$setObjectProperty[data;property1;example]

$createObject[data;$getVar[variable]]
```

`$setObjectProperty` can also be used to change a data of a existing property as well! Just use a existing property name from your variable and it will work.

That's it! Now, you can go create something amazing with these object variables! Good Luck there!



