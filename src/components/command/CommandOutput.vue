<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ command: string }>()
const outputCommand = ref("")

watch(
  () => props.command, 
  (newCommand) => {
    getCommand(newCommand)
  })

const getCommand = (command: string) => {
  switch(command) {
    case 'get weather': outputCommand.value = 'weather is good, mate'
      break;
    case '': outputCommand.value = ''
      break;
    default: outputCommand.value = 'invalid code'
  }
}
</script>
<template>
  <input class="command-input-disabled" disabled v-model="outputCommand"/>
</template>