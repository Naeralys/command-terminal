export const handleClientCommand = (args: string[]) => {
  args.shift()
  switch(args[0]) {
    case 'background': return changeClientBackground(args)
    default: 'invalid code'
  }
  return ''
}

export const changeClientBackground = (args: string[]) => {
  args.shift()
  if(!args.length) return 'Must contain a color param'
  return 'Changed client background to color: ' + args[0]
}