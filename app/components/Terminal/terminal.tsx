"use client"

import { useEffect, useState, useRef } from "react"

// Implementación local de la función cn para combinar clases condicionales
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ")
}

interface TerminalProps {
  progress: number
}

interface Command {
  text: string
  output: string[]
  delay: number
}

export function Terminal({ progress }: TerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)
  const [showOutput, setShowOutput] = useState<boolean[]>([])
  const terminalRef = useRef<HTMLDivElement>(null)

  const commands: Command[] = [
    {
      text: "npx create-remix@latest my-remix-app",
      output: ["Creating a new Remix app in my-remix-app...", "Installing dependencies..."],
      delay: 10, // Reduced from 20
    },
    {
      text: "cd my-remix-app",
      output: [],
      delay: 20, // Reduced from 50
    },
    {
      text: "npm run dev",
      output: [
        "Remix App Server started at http://localhost:3000",
        "💿 Building...",
        "💿 Built in 0.8s",
        "Remix development server started at http://localhost:3000",
      ],
      delay: 15, // Reduced from 30
    },
  ]

  // Simulate typing
  useEffect(() => {
    if (progress < 15) return // Reduced from 30 to 15

    const command = commands[currentCommandIndex]
    if (!command) return

    if (typedText.length < command.text.length) {
      const timeout = setTimeout(() => {
        setTypedText(command.text.substring(0, typedText.length + 1))
      }, command.delay)
      return () => clearTimeout(timeout)
    } else if (showOutput.length < command.output.length) {
      const timeout = setTimeout(() => {
        setShowOutput((prev) => [...prev, true])
      }, 300) // Reduced from 500 to 300
      return () => clearTimeout(timeout)
    } else if (currentCommandIndex < commands.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentCommandIndex((prev) => prev + 1)
        setTypedText("")
        setShowOutput([])
      }, 500) // Reduced from 1000 to 500
      return () => clearTimeout(timeout)
    }
  }, [typedText, currentCommandIndex, commands, showOutput, progress])

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [typedText, showOutput])

  return (
    <div ref={terminalRef} className="bg-black text-green-500 p-4 h-full font-mono text-sm overflow-auto">
      <div className="mb-2">Welcome to Remix installation simulator</div>

      {Array.from({ length: currentCommandIndex }).map((_, index) => (
        <div key={`completed-${index}`} className="mb-4">
          <div className="flex">
            <span className="text-blue-400 mr-2">$</span>
            <span>{commands[index].text}</span>
          </div>
          {commands[index].output.map((line, i) => (
            <div key={i} className="ml-4 text-gray-300">
              {line}
            </div>
          ))}
        </div>
      ))}

      {currentCommandIndex < commands.length && (
        <div>
          <div className="flex">
            <span className="text-blue-400 mr-2">$</span>
            <span>{typedText}</span>
            <span
              className={`${showCursor ? "" : "opacity-0"} ml-0.5 w-2 h-4 bg-green-500`}
            ></span>
          </div>

          {commands[currentCommandIndex].output.map(
            (line, index) =>
              showOutput[index] && (
                <div key={index} className="ml-4 text-gray-300">
                  {line}
                </div>
              ),
          )}
        </div>
      )}

      <div className="mt-4">
        <div className="h-1 bg-gray-700 rounded-full w-full">
          <div
            className="h-1 bg-green-500 rounded-full transition-all duration-100 ease-in-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="text-xs text-gray-400 mt-1">Installation progress: {progress}%</div>
      </div>
    </div>
  )
}

