<script setup lang="ts">
import {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogOverlay,
    DialogPortal,
    DialogRoot,
    DialogTitle,
    DialogTrigger,
} from "reka-ui";
</script>

<template>
    <div>
        <DialogRoot>
            <DialogTrigger>
                <li>
                    <div
                        class="flex py-2 text-base cursor-pointer font-medium text-white hover:text-orange dark:text-dark-6 dark:hover:text-orange lg:ml-12 lg:inline-flex"
                    >
                        Download
                    </div>
                </li>
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay
                    class="bg-background/70 data-[state=open]:animate-overlayShow fixed inset-0 z-30"
                />
                <DialogContent
                    class="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[544px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-background p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-[100]"
                >
                    <DialogTitle
                        class="mb-8 text-[17px] font-semibold flex items-center justify-between"
                    >
                        <span>Download App MyBetSpace</span>

                        <DialogClose as-child>
                            <button class="text-sm font-normal">X</button>
                        </DialogClose>
                    </DialogTitle>

                    <div class="flex flex-col gap-2">
                        <div class="flex flex-col sm:flex-row gap-5 items-center mb-5">
                            <img
                                src="/assets/icon-app.png"
                                alt="My Bet Space logo icon"
                                width="60"
                            />

                            <span class="text-xl leading-7">
                                Faça download do Software e experimente uma gestão de banca
                                profissional.
                            </span>
                        </div>

                        <div class="font-medium mb-6 text-sm">
                            O software foi desenvolvido especialmente para usuários da Betfair
                            Brasil. Se você usa outra exchange, pode acessar pelo site:
                            <a
                                href="https://app.mybetspace.com/"
                                target="_blank"
                                class="text-[#1890ff] hover:opacity-90"
                            >
                                app.mybetspace.com
                            </a>
                            . 😊
                            <br><br>
                            Veja o vídeo explicando como funciona agora com a Betfair Brasil,
                            <a
                                href="https://youtu.be/RHMwbuZb7nY"
                                target="_blank"
                                class="text-[#1890ff] hover:opacity-90"
                            >
                              veja aqui.
                            </a>
                        </div>

                        <a
                            class="border border-white rounded-xl h-12 flex items-center justify-center bg-background hover:bg-backgroundGrayTwo transition-all"
                            href="https://mybetspace.short.gy/MybetspaceApp"
                        >
                            <img
                                src="/assets/windows-logo.svg"
                                alt="Windows logo"
                                width="18"
                                class="mr-2"
                            />
                            Windows
                        </a>
                    </div>
                </DialogContent>
            </DialogPortal>
        </DialogRoot>
    </div>
</template>
