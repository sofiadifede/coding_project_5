This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

npm run dev

Open [http://localhost:3000] within your browser to see the result.

## Task Manager — Build Process with AI
 
This document reflects on how AI was used while building this Next.js task manager.
 
## 1. Generate scaffolding
 
After creating the components, like TaskBoard.js, I had it explain the section "to someone who is new to coding". I would then try the code myself and use the AI in VS Code to help with building the code and checking if its actually what I'm looking for. 
 
I learned: 

- Why `tasks.map()` returns a new array rather than mutating in place
- Why `key={task.id ?? index}` uses the nullish operator as a fallback
- Why the empty-state guard checks both `!tasks` and `tasks.length === 0`

After understanding the point of each line, I was able to understand if it was computing it correctly and was able to fix its mistakes.

## 2. Improve Comments

In past assignments, my comments have been vague, so I used AI to help me understand if my comments had made sense. AI would explain to me the code and then I would add on. 

## 3. Tailwind Variations

I don't have a creative mind, so I asked AI to show me colors I could use for Tailwind variations. I like bright colors, so I just typed in blue, purple, and pink. 

One thing I had trouble changing was the font, but the AI feauture was unable to help me figure that out because everytime I would find a font I liked, it would highlight red my entire code incorrect. 
 