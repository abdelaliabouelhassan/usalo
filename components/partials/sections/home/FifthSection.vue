<template>
    <section class="bg-white py-16 lg:py-20">
        <div class="container px-5 flex flex-col  gap-x-8">
            <div class="w-full">
                <div class="w-full flex flex-col md:w-full md:max-w-[40.68rem] gap-x-5">
                    <h1 class="text-center md:text-start">Una squadra vincente</h1>
                    <div class="text-lg mt-6 text-center md:text-start lg:text-xl font-light">I nostri soci e manager hanno competenze, esperienze e professionalità in diversi ambiti: siamo tutti tasselli complementari!.</div>
                </div>
            </div>
            <Splide class="py-16 lg:py-20" :has-track="false" :options="options">
                <div class="slide-wrapper">
                    <div class="splide__track">

                        <ul class="splide__list">

                            <li class="splide__slide w-full lg:w-1/2 flex justify-center">
                                <img class="w-full max-w-[27.25rem] object-contain" src="/images/home/italfinance.svg" alt="" srcset="">
                            </li>
                            <li class="splide__slide w-full lg:w-1/2 flex">
                                <div class="bg-[#EDF1F8] w-full h-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Italfinance</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">energia e imprenditorialità</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>


                            <li class="splide__slide w-full lg:w-1/2 flex justify-center">
                                <img class="w-full max-w-[20.125rem] object-contain" src="/images/home/probest.svg" alt="" srcset="">
                            </li>
                            <li class="splide__slide w-full lg:w-1/2 flex">
                                <div class="bg-[#EDF1F8] w-full h-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Probest Service SPA</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">storia e networking</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>


                            <li class="splide__slide w-full lg:w-1/2 flex justify-center">
                                <img class="w-full max-w-[20.5rem] object-contain" src="/images/home/prime-advisor.svg" alt="" srcset="">
                            </li>
                            <li class="splide__slide w-full lg:w-1/2 flex">
                                <div class="bg-[#EDF1F8] w-full h-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Prime Advisor</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">strategia e controllo</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>
                            


                            <li class="splide__slide w-full lg:w-1/2 flex justify-center">
                                <img class="w-full max-w-[19.5rem] object-contain" src="/images/home/cormiac.svg" alt="" srcset="">
                            </li>
                            <li class="splide__slide w-full lg:w-1/2 flex">
                                <div class="bg-[#EDF1F8] w-full h-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Cormiac</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">assest management e re-marketing</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>


                            <li class="splide__slide w-full lg:w-1/2 flex justify-center">
                                <img class="w-full max-w-[18.82rem] object-contain" src="/images/home/garanzia-etica.svg" alt="" srcset="">
                            </li>
                            <li class="splide__slide w-full lg:w-1/2 flex">
                                <div class="bg-[#EDF1F8] w-full h-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Garanzia Etica</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">istituzione e garanzie</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                
                </div>

                <ul class="splide__pagination "></ul>
            </Splide>
        </div>
    </section>
</template>
<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const options = reactive({
    rewind:false,
    arrows:false,
    pagination: true,
    drag:true,
    perMove:1,
    autoWidth:true,
    perPage:2,
    breakpoints:{
        1024:{
            perPage:1
        }
    }
    
})
</script>

<style>
.splide__pagination{
    @apply gap-x-3 md:gap-x-10;
}
.splide__pagination .splide__pagination__page {
    @apply bg-[#EDF1F8] h-3 w-3;
}
.splide__pagination .splide__pagination__page.is-active {
    @apply bg-usalo-sky transform-none;
}
</style>