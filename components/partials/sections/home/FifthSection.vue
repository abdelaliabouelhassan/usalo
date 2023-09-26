<template>
    <section class="bg-white py-16 lg:py-20">
        <div class="container px-5 flex flex-col  gap-x-8">
            <div class="w-full">
                <div class="w-full flex flex-col md:w-full md:max-w-[40.68rem] gap-x-5">
                    <h1 class="">Una squadra vincente</h1>
                    <div class="text-lg mt-6 lg:text-xl font-light">I nostri soci e manager hanno competenze, esperienze e professionalità in diversi ambiti: siamo tutti tasselli complementari!.</div>
                </div>
            </div>
            <Splide class="pb-16 pt-5 lg:py-20" :has-track="false" :options="options">

                <div class="slide-wrapper">
                    <div class="splide__track">

                        <ul class="splide__list">

                            
                            <li class="splide__slide w-full flex flex-col lg:flex-row">
                                <div class="h-[19.125rem] py-4 px-11 w-full flex items-center justify-center  lg:h-full">
                                    <img class="w-full h-full max-w-[27.25rem] object-contain" src="/images/home/italfinance.svg" alt="" srcset="">
                                </div>
                                <div class="bg-[#EDF1F8] w-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Italfinance</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">energia e imprenditorialità</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>


                            
                            <li class="splide__slide w-full flex flex-col lg:flex-row">
                                <div class="h-[19.125rem] py-4 px-11 w-full flex items-center justify-center  lg:h-full">
                                    <img class="w-full h-full max-w-[27.25rem] object-contain" src="/images/home/probest.svg" alt="" srcset="">
                                </div>
                                <div class="bg-[#EDF1F8] w-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Probest Service SPA</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">storia e networking</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>


                            <li class="splide__slide w-full flex flex-col lg:flex-row">
                                <div class="h-[19.125rem] py-4 px-11 w-full flex items-center justify-center  lg:h-full">
                                    <img class="w-full h-full max-w-[27.25rem] object-contain" src="/images/home/prime-advisor.svg" alt="" srcset="">
                                </div>
                                <div class="bg-[#EDF1F8] w-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Prime Advisor</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">strategia e controllo</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>
                            


                            
                            <li class="splide__slide w-full flex flex-col lg:flex-row">
                                <div class="h-[19.125rem] py-4 px-11 w-full flex items-center justify-center  lg:h-full ">
                                    <img class="w-full h-full max-w-[27.25rem] object-contain" src="/images/home/cormiac.svg" alt="" srcset="">
                                </div>
                                <div class="bg-[#EDF1F8] w-full py-10 px-8 lg:py-20 lg:px-16">
                                    <div class="pb-6 border-b border-usalo-sky">
                                        <h2 class="font-semibold text-xl md:text-3xl lg:text-[2.375rem]">Cormiac</h2>
                                        <h3 class="uppercase font-semibold  md:text-xl mt-2 tracking-[1.5px] md:tracking-[2.4px]">assest management e re-marketing</h3>
                                    </div>
                                    <div class="pt-6">
                                        Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.Lorem ipsum dolor sit amet consectetur. Ultrices aliquet nisl augue at.
                                    </div>
                                </div>
                            </li>


                            
                            <li class="splide__slide w-full flex flex-col lg:flex-row">
                                <div class="h-[19.125rem] py-4 px-11 w-full flex items-center justify-center lg:h-full">
                                    <img class="w-full h-full max-w-[27.25rem] object-contain" src="/images/home/garanzia-etica.svg" alt="" srcset="">
                                </div>
                                <div class="bg-[#EDF1F8] w-full py-10 px-8 lg:py-20 lg:px-16">
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
                <LeftArrow class="hidden lg:block shrink-0 absolute top-1/2 -translate-y-1/2 left-2"/>
                <RightArrow class="hidden lg:block shrink-0 absolute top-1/2 -translate-y-1/2 right-2"/>
                <ul class="splide__pagination "></ul>
            </Splide>
        </div>
    </section>
</template>
<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import RightArrow from '@/components/UI/RightArrow.vue'
import LeftArrow from '@/components/UI/LeftArrow.vue'
const options = reactive({
    rewind:true,
    type   : 'loop',
    arrows:false,
    pagination: true,
    drag:true,
    perMove:1,
    perPage:1,
    arrows:true,

    
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