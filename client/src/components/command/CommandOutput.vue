<script setup lang="ts">
import { ref, watch } from 'vue'
import { handleClientCommand } from '../../service/client'
import { handleDotnetCommand } from '../../service/dotnet';

type CommandOutputProps = { command: string }

const props = defineProps<CommandOutputProps>()
const outputCommand = ref("")

watch(
  () => props.command, 
  (newCommand) => {
    getCommand(newCommand)
  })

const getCommand = async (command: string) => {
  const args = command.split(' ')

  switch(args[0]) {
    case 'client': outputCommand.value = handleClientCommand(args)
      break;
    case 'dotnet': outputCommand.value = await handleDotnetCommand(args)
      break;
    case '': outputCommand.value = ''
      break;
    default: outputCommand.value = 'invalid code'
  }

  console.log("output", outputCommand.value)
}
</script>
<template>
  <textarea class="command-input-disabled" disabled v-model="outputCommand"/>
</template>