<script setup lang="ts">
import { ref } from 'vue'
import CommandInput from '../components/command/CommandInput.vue'
import CommandOutput from '../components/command/CommandOutput.vue'

const command = ref()

const submitCommand = ({ value }: { value: string }) => {
  command.value = value

  if(value.startsWith('client background')) {
    backgroundColor.value = value.split(' ')[2]
  }
}

const backgroundColor = ref('#000')

</script>

<template>
  <main :style="{ backgroundColor }">
    <CommandOutput :command="command" />
    <CommandInput @submit-command="submitCommand"/>
  </main>
</template>

<style>
main {
  display: flex;
  flex-direction: column;
  min-width: 100%;
}

.command-input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid green;
  padding: 10px;
  color: green;
  width: 100%;
  max-width: 300px;
}

.command-input-disabled {
  background-color: transparent;
  border: none;
  padding: 10px;
  color: green;
  max-width: 300px;
  min-width: 300px;
  resize: none;
}

.command-input:focus {
  outline: none;
}
</style>