<script setup lang="ts">
import { ref } from "vue"
import type { Game } from "@/types";
import GameCard from "@/components/GameCard.vue"

const games = ref<Game[]>([
    {
        id: "1",
        title: "Dice Duel",
        category: "dice",
        description: "Вгадай, вище чи нижче ?",
        minBet: 10,
    },
    {
        id: "2",
        title: "Memory Match",
        category: "cards",
        description: "Знайти всі пари карток",
        minBet: 5,
    },
    {
        id: "3",
        title: "Slot Machine",
        category: "slots",
        description: "Крути барабани й збирай однакові символи",
        minBet: 1,
    }
])


function onToggleFavorite(id: string) {
    console.log("toggle", id)
}
</script>

<template>
    <div class="flex justify-center border border-gray-800">
        <div class="p-4">
            <h1 class="flex justify-center mb-4 text-2xl font-bold">Mini Games Lobby</h1>

            <ul class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <GameCard v-for="game in games" :key="game.id" :game="game" @toggle-favorite="onToggleFavorite" />
            </ul>
        </div>
    </div>
</template>