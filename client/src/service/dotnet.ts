export const handleDotnetCommand = async (args: string[]) => {
  args.shift()
  switch(args[0]) {
    case 'ping': return await ping()
    default: 'invalid code'
  }
  return ''
}

export const ping = async () => dotnet('ping')
export const dotnet = async (command: string) => fetch(`http://localhost:3001/${command}`)
  .then(res => res.json())
  .then(res => res.value)
  .catch(res => {
    console.error(res)
    return 'unable to reach dotnet'
  })