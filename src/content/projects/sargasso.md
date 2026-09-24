---
order: 3
name: Sargasso
status: Design
icon: /sargasso.png
scale: 1.03
line: "Local-first AI harness. Still the mind, and crush self congratulation."
accent: "#c6871e"
glass: Private
ingredients: [Python, llama.cpp, SQLite FTS5, Local language models]
---

## What it is

Sargasso is a local-first AI agent framework we're designing for coding, automation, and the sort of work that takes more than one good answer. We want an agent that runs on our own hardware, remembers what it learned, and can keep working through a problem without needing a cloud subscription to have a productive afternoon.

We also want it to stop congratulating itself for things it hasn't actually done. That part has become rather central.

## Nothing grades its own homework

Working with AI means getting used to a particular kind of disappointment: it tells you the problem is fixed, explains the fix beautifully, and then you try it. Sometimes the mistake is small. Sometimes the file it says it wrote doesn't exist. Asking it to double-check can get you another confident answer built on exactly the same misunderstanding.

With Sargasso, we want what counts as success written down before the work starts. The model doing the work can make its attempt, but a separate verifier checks the result against those requirements. It gets the task and the information needed to judge it, without the worker's explanation of why it deserves to pass.

Of course, another model can be confidently wrong too. Tests and other direct checks come first wherever they're available. The verifier needs evidence for its verdict, and if the work fails, specific feedback goes back with it for another attempt. If it keeps failing, the loop stops and brings you the attempts and what went wrong. We'd rather have something admit where it got stuck than spend the evening discovering what “complete” meant this time.

We're applying the same care to what the agent remembers. After work passes, a separate curator can propose a useful skill to keep for next time. You approve what goes into that library, and something you wrote doesn't get overwritten because the model thinks it has a better idea. We want useful experience to accumulate across sessions without letting yesterday's confident mistake become tomorrow's standing instruction.

## How it started

Sargasso began because we wanted an AI harness that wouldn't cost an arm and a RAM. Cloud agents were useful enough to become part of everyday work, which also meant their costs and limits had become part of everyday work. Could we get enough of that capability running on the hardware we already owned?

But moving the model onto a laptop wouldn't fix the habits that were already driving us up the wall. The overconfidence would come with it. So would the context drift, the forgotten caveat, and the tendency to explain why the work was finished instead of checking whether it was.

We started studying Hermes and OpenClaw for the things they did well: memory, reusable skills, and ways to organize agents doing work. The question became how to bring those ideas together while giving the agent less authority over its own verdict.

It's the same frustration behind several projects here. We like working with AI. We'd just like to spend less of that time arguing with it about whether a thing happened.

## Currently

Sargasso is still in design. The architecture and the rules for checking work, retaining useful skills, and approving changes are written down, but there isn't a running agent yet.

Some of the most useful work so far has been checking the research itself. Later passes found things the earlier passes confidently said weren't there, and the design changed as a result. We've already had a few demonstrations of the problem we're trying to solve.

Next is planning and building one small task through the whole loop: define what it needs to do, let a local model try it, check the result, and propose anything worth remembering. Then we can start finding out whether this behaves better in practice, and what we can reasonably ask it to do on the hardware we have.
