---
order: 4
name: Trance
status: Build
icon: /trance.png
scale: 1
line: "Our gift to Claude. Theming, exporting, and thought transmission."
accent: "#e5048b"
glass: Private
ingredients: [JavaScript, Chrome Extension (MV3), chrome.storage, Orbitron]
---

## What it is

Trance is a browser extension for making Claude a little more yours. It started with the things we wanted while spending far too much time in its company: an interface we could dress up, conversations we could keep, and a way to pass work between chats without being the person carrying it back and forth.

The theming is already there, complete with saved presets, color controls, and adjustable glow. The more interesting ambition is letting one conversation ask another for a second look.

## Parallel thinking

A fresh Claude can read the same work and notice something the first one missed. It can also misunderstand something the first one had already worked out. We've spent enough time moving between conversations to find both useful and irritating, sometimes within the same afternoon.

Verify, originally coined Parallel Think is our attempt to make that exchange easier. You choose the part of a conversation you want checked and send it to another Claude, with enough context to understand the task. Its response comes back to the original conversation, where the first Claude can reconsider, explain a disagreement, or correct what it got wrong.

We want more than a second instance saying the answer looks good. The useful part is finding the missed assumption, the caveat that disappeared, or the question nobody thought to ask. Agreement by itself doesn't tell us much.

The planned exchange is deliberately short: send the work over, bring the response back, and stop. You choose when it happens and can read both conversations. It's a little of the back-and-forth we already do by hand, without quite so much copying, pasting, and explaining who said what.

## How it started

Trance grew out of long sessions working on Permafrost. We'd get somewhere with an AI, move to a fresh chat, and discover that giving it the transcript didn't necessarily give it the understanding we'd just spent hours building.

The new instance could see the previous conversation's path, but it still had to infer why that path mattered and what was supposed to happen next. A detail that seemed obvious in one chat could become a point of confusion in the next. So we started carrying questions back to the earlier conversation and bringing the answers over. Sometimes that recovered the missing context. Sometimes it exposed a mistake.

Could we make that part of the way we worked, instead of a chore between chats? And while we were there, could we make the place look how we wanted? If we're going to spend this much time talking to an AI, a little magenta seems reasonable.

The first version was a desktop app. That approach ran into enough walls that we moved Trance into the browser, working with the Claude tabs already open there. The idea survived; the way we were building it changed.

## Currently

Trance is now a Chrome extension in development. The theme engine is built, with editable colors, saved presets, and glow controls that reach the conversation, sidebar, and composer. There are still a few editor and inspector bugs to clean up, but this part is working.

Parallel Think worked in the desktop version. It's now called Verify, and we're migrating that code into the extension. The new panel can pair conversations and let you select what to send; the sending and return path are the part we're bringing over now.

Conversation export and a visible usage display are still on the list. For now, the focus is getting Verify working in its new home alongside the pretty colors.
