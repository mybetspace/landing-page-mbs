<script setup lang="ts">
import {
    TooltipArrow,
    TooltipContent,
    TooltipPortal,
    TooltipProvider,
    TooltipRoot,
    TooltipTrigger,
} from "reka-ui";
import MessageIcon from "./MessageIcon.vue";
</script>

<template>
    <TooltipProvider>
        <TooltipRoot>
            <TooltipTrigger as-child>
                <a
                    href="https://t.me/MyBetSpacebot"
                    target="_blank"
                    class="fixed cursor-pointer flex items-center justify-center bottom-5 right-5 rounded-full w-16 h-16 bg-[#2AA9EA] transition-all hover:bg-[#279dd8]"
                >
                    <MessageIcon />
                </a>
            </TooltipTrigger>

            <TooltipPortal>
                <TooltipContent side="left" class="p-2 rounded-lg bg-background shadow">
                    Suporte Telegram
                    <TooltipArrow />
                </TooltipContent>
            </TooltipPortal>
        </TooltipRoot>
    </TooltipProvider>
</template>
