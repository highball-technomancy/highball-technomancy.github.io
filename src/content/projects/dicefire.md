---
order: 2
name: Dicefire
status: Build
icon: /DicefireLogo.png
scale: 1.4
line: "AI gamified disaster recovery for businesses. Tabletop, returned to roots."
accent: "#c80716"
glass: Private
ingredients: [Node.js, JavaScript, SQLite]
---

## What it is

Dicefire is a disaster recovery game for technical teams, with an AI as the Dungeon Master. It takes the tabletop exercise back toward the tabletop: character sheets, dice, questionable decisions, and a scenario that keeps getting worse while you argue about it. Everybody plays through a browser, acting at the same time, with a little pixel office where the trouble plays out.

## You Can Certainly Try

The interesting part is giving the AI the whole table to run. It describes the disaster, plays the people you have to deal with, and makes sense of what everybody is trying to do. That includes the person investigating the outage, the person explaining it to management, and whoever has decided this would be a good time to change the firewall rules.

- **The DM never says no.** We want a DM that lets you make those decisions, even when they're terrible. Trying something outside your skills or access makes it harder; it doesn't make it forbidden. Your character's role matters, stress builds, and the dice have a say in how things go. Meanwhile, everyone else is doing something too, and the incident isn't waiting for you to agree.
- **The DM never helps.** It'll answer questions about what's happening, but asking it what you should do won't get you a recovery plan. Figuring that out together is the game.

The reflection comes afterward, in a postmortem built from the session: what people tried, what happened, what helped, and what deserves another conversation. We want the DM's personality to survive that part too. “Maybe don't play with a stapler while the systems are down, Kyle” is very much the spirit.

## How it started

This came from loving D&D, disaster recovery, and site reliability engineering, and feeling that taking the fun out of tabletop exercises was a strange thing to do. There's already a scenario, a group of people with different skills, and somebody deciding what happens when they try something. We wanted to put more of the game back into it.

Could we make it fun and simple enough that people would actually want to play? Give everybody their own character, let their decisions collide, and see what happens when the recovery plan meets a bad roll?

Then there was the person running it. A good DM has to keep track of the situation, improvise, play the other characters, and respond to whatever the players come up with. That seemed like an interesting job to give an AI, and a good excuse to find out how well it could do it.

## Currently

There's a first playable version now, with browser multiplayer, a pixel office, and a postmortem you can take away afterward. Automated playtests have gone through the full session with a scripted stand-in for the DM. The live AI connection is built, but we still need to put it through a complete game.

We're working through a few remaining rules wrinkles, then getting two people in with the live DM. That's where we'll find out how well it handles the unexpected, whether the pacing feels right, and whether people want another round.
