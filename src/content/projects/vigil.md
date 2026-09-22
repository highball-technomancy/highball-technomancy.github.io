---
order: 5
name: Vigil
status: Build
icon: /vigil-logo.png
scale: 1
line: "AI powered budgeting. Simple and unserious."
accent: "#4fd2f3"
glass: Private
ingredients: [TypeScript, React Native, Expo, SQLite, Cloudflare Workers, Plaid]
---

## What it is

Vigil is a budgeting app for Android, built because keeping up with daily expenses was becoming its own chore. It brings your bank balance, planned spending, and repeating bills together so you can answer a fairly ordinary question: how much of this is actually mine to spend?

It started as a spreadsheet, and the idea is still to keep things simple enough to check while you're getting on with your day. A little less remembering what hasn't come out yet, and a little less opening the bank app and hoping the number means what you think it means.

## The cascade

The main screen works through three numbers. Your bank balance is the starting point, then Vigil accounts for the things you already know are coming.

- **Available now.** What the bank says you have.
- **After planned.** What remains after the expenses and income you've written down.
- **After repeating.** What that looks like with the next thirty days of repeating bills and income included.

The order is the idea. Money sitting in the account may already have a job, even if the bank doesn't know about it yet. Vigil puts those commitments beside the balance, with a heads-up for what's getting close.

There's another small annoyance hiding underneath this: recognizing when something you planned has actually happened. The bank might call it “SQ *TACO 4417.” You called it lunch. We'd rather not make you reconcile that by hand every time, or keep subtracting lunch after you've already paid for it.

That's where we're using a small AI model running on the phone. It looks for connections the ordinary matching rules miss and offers a suggestion for you to confirm. The arithmetic stays in code, and the AI doesn't quietly change your budget because it thinks it recognized a taco.

Your plans and notes stay on the device. Bank information comes through Plaid, but matching it against what you wrote doesn't require sending it to an AI service.

## How it started

This one came from not being able to keep up with daily expenses. The spreadsheet was useful, but keeping it useful meant remembering to update it, checking what had cleared, and accounting for the things that were still coming. Eventually the request was fairly literal: “I want my spreadsheet to be an app.”

Could it get the bank information itself? Keep the repeating things out of the way until they mattered? Give us a number we could understand without having to reconstruct the week first?

The first version read bank notification emails. Later it moved to a bank connection, and the questions became less about getting numbers onto a screen and more about what those numbers actually meant. A purchase can affect your balance before it shows up in your transaction history, which is an irritating amount of complexity for something that started with wanting to know what was left.

## Currently

Vigil is running on Android and getting used with a real bank account. Recent work has mostly been about keeping the numbers honest: matching planned expenses to posted transactions, avoiding counting the same purchase twice, and dealing with the gaps between a bank balance changing and the transaction appearing.

The on-phone AI matcher is built and has been tested on the device, though there's still a loading issue to sort out. Receipt capture is next on the wish list: take a photo, check the merchant, date, and total it found, and save yourself the typing. We've tried the text-extraction part; the camera and image-reading pieces still need wiring up.

The plan is to release Vigil as open source. Before that, we're working out the bank-data connection and how to handle pending spending more reliably. Bringing multiple accounts together is still on the list too.
