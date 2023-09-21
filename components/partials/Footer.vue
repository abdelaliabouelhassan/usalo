<template>
    <footer class=" py-10 lg:py-20 bg-usalo-blue text-white">
        <div class="container px-5 flex flex-col gap-10 md:gap-32 lg:gap-x-0 sm:flex-row sm:justify-between">
            <nuxt-link to="/" class="sm:w-1/3 lg:w-full">
                <img class="w-[9.5rem] lg:w-[12.625rem] object-contain" src="/images/logo2.svg" alt="" srcset="">
            </nuxt-link >
            <div class=" w-full  sm:w-2/3 lg:w-full">
                <div class="flex flex-col gap-10 xs:flex-row md:gap-32">

                    <div class="flex flex-col z-40 gap-y-4 ">
                        <nuxt-link to="/" class="text-lg py-2 hover:text-usalo-sky">Home</nuxt-link>
                        <nuxt-link to="/" class="text-lg py-2 hover:text-usalo-sky">Chi siamo</nuxt-link>
                        <nuxt-link to="/" class="text-lg py-2 hover:text-usalo-sky">USALO! in dettaglio</nuxt-link>
                        <nuxt-link to="/" class="text-lg py-2 hover:text-usalo-sky">Sei un fornitore?</nuxt-link>
                    </div>
                    <div class="w-fit sm:mr-[20%] md:mr-0">
                        <div class="pb-3 font-bold border-b border-usalo-sky">Contatti</div>
                        <div class="pt-3">
                            <div>06 123 1453</div>
                            <div class="mt-3">info@usalo.it</div>
                        </div>
                    </div>
                </div>
                <div class="flex items-center divide-x divide-white  text-xs lg:text-sm mt-20">
                    <div class="pr-3">Privacy policy</div>
                    <div class="px-3">© 2023 USALO!</div>
                    <div class="pl-3">MGquadro Web Agency</div>
                </div>


            </div>
        </div>

    </footer>
</template>