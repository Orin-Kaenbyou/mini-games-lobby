<script setup lang="ts">
import { ref } from "vue"
import type { Game } from "@/types";

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
</script>

<template>
    <div class="p-4">
        <h1 class="mb-4 text-2xl font-bold">Mini Games Lobby</h1>

        <ul>
            <li v-for="game in games" :key="game.id">
                {{ game.title }} ({{ game.category }})
            </li>
        </ul>
    </div>
</template>