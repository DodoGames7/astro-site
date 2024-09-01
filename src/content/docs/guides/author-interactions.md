---
title: Author interactions
description: A guide on how to create author-only interactions!
---

This page is dedicated to creating interactions that are only usable by a user. If you're here for that then go ahead reading this guide.

## What are author interactions
Author interactions are interactions that only the user who ran the command will be able to use it. It helps preventing interruptions by other people and overall ensures that each user will use their own dedicated interaction rather than messing with the other's interactions! This guide will include both of author buttons and select menus.

### Requirements
* Ensure that you're on aoi.js 6.8.0 or later. This guide won't work on much earlier versions without some modifications
* Have a command handler ready. The examples here rely on it but however you can modify the codes to work with non command handler method
* IT IS HIGHLY RECOMMENDED to have `onInteractionCreate` event added otherwise none of the examples below will ever work


:::note
The used custom ids in this guide can modified if it wasn't obvious
:::

## Author button Example
```js
module.exports = [{
    name: "authorButton",
    info: {
        description: "Shows an example of a Author Button"
      },
    code: `
    $title[Author Button]
    $description[Press the Button!]
    $color[Random]
    $addButton[1;Example;primary;Examplebutton_$authorID;false]`
    }, {
      type: "interaction",
      prototype: "button",
      code:`
    $interactionReply[{newEmbed:{title:Author Button}{description:First Page.}{color:Random}}]
    
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
    {interaction}]
    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==Examplebutton;]`
    }]
```

## Author select menu Example
```js
module.exports = [{
    name: "author-menu",
    info: {
        description: "Shows an example of a Author Menu"
      },
    code: `
$title[Author menu example]
     $description[Select an option.]
$color[Random]
     $addSelectMenu[1;string;ExampleMenu_$authorID;This is a placeholder!;1;1;false;A Option:Description of option B:Examplemenuvalue1:false;B Option:Description of option B:andAnotherCustomID:true]
  `,
  },
  {
    type: "interaction", // clarifying that this command is an Interaction
    prototype: "selectMenu",
    code: `
     $interactionReply[Hello! :)]

$onlyIf[$advancedTextSplit[$interactionData[customId];_;2]==$interactionData[author.id];You're not the author of this command! {ephemeral}
    {interaction}]

    $onlyIf[$advancedTextSplit[$interactionData[customId];_;1]==ExampleMenu;]

     $onlyIf[$interactionData[values[0]]==Examplemenuvalue1;]`,
  }]
```

## How do they work?
We start by adding both of buttons and select menus using their dedicated functions.

We then make sure that they have ` _$authorID` within the custom id like `Examplebutton_$authorID` for buttons example but then we start to create an author interaction using `$interactionData[customId]` which allows us to return the custom id name of the button/select menu we have just created below.

As a result, we remove the property `name:` from both interaction's commands and we start separating the custom id and the author id using `$advancedTextSplit` as we have `_` in our custom id which makes it easy to do that!

Finally, we then add our first `$onlyIf` at the bottom of our interaction code to check if the button/select menu has been used by returning it's custom id name and second `$onlyif` to check if the user is the same person who just ran the command to prevent other users from interacting with the author who ran the command. To finish our final touches for our select menu, we add `$onlyIf[$interactionData[values[0]]==menu value;]` to respond to the option we want.

Obviously, we respond to the interactions using `$interactionReply` and we're done after that! Our author interactions should work now!
