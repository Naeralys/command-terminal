<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['submitCommand'])

const inputCommand = ref("")
const submitCommand = () => {
  emit('submitCommand', inputCommand)
}
</script>

<template>
  <input v-model="inputCommand" class="command-input" placeholder="Enter command..." @keyup.enter="submitCommand" />
</template>