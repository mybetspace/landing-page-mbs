<script setup lang="ts">
import { MessageCircleQuestion } from "lucide-vue-next";
</script>

<template>
    <a
        href="https://t.me/MyBetSpacebot"
        target="_blank"
        class="fixed cursor-pointer flex items-center justify-center bottom-5 right-5 rounded-full w-16 h-16 bg-[#2AA9EA] transition-all hover:bg-[#279dd8]"
    >
        <MessageCircleQuestion :size="36" :stroke-width="1.8" />
    </a>
</template>
