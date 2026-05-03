type CommandPromptProps = {
  command: string
}

export function CommandPrompt({ command }: CommandPromptProps) {
  return (
    <div className="cmd-prompt">
      <span className="ps1">➜</span>
      <span className="cmd">{command}</span>
      <span className="cursor" aria-hidden="true" />
    </div>
  )
}
