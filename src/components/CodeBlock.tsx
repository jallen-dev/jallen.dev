import { Code } from "bright"

export function CodeBlock({ children, ...props }: { children: React.ReactNode }) {
  return <Code {...props}>{children}</Code>
}
