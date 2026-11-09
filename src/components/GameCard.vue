<script setup lang="ts">
import type { Game } from "@/types"

const props = defineProps<{
    game: Game
}>()

const emit = defineEmits<{
    toggleFavorite: [id: string]
}>()
</script>

<template>
    <div class="rounded-lg border border-gray-300 p-4 shadow-sm transition hover:shadow-md">
        <div class="flex items-start justify-between">
            <h2 class="text-lg font-semibold">{{ game.title }}</h2>
            <button class="text-xl" @click="emit('toggleFavorite', game.id)">
                ♡
            </button>
        </div>

        <p class="mt-1 text-sm text-gray-500">{{ game.category }}</p>
        <p class="mt-2">{{ game.description }}</p>
        <p class="mt-3 text-sm font-medium">Мін. ставка: {{ game.minBet }}</p>
    </div>
</template>