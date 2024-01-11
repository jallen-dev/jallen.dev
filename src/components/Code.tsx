import { Code as Bright } from "bright"

export function Code({ children, ...props }: { children: React.ReactNode }) {
  return <Bright {...props}>{children}</Bright>
}
