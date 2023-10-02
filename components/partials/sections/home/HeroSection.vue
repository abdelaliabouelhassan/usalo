<template>
    <section class="  w-full  bg-usalo-blue ">
        <!-- hero first part -->
        <div class="h-[38.375rem] sm:h-[41rem] md:h-[calc(100vh-3.75rem)]  md:max-h-[55rem] relative overflow-hidden flex flex-col lg:h-[calc(100vh-4.25rem)]">
            <!-- small screen -->
            <div class="absolute w-[222%] aspect-square top-0  left-1/2 -translate-x-1/2  md:hidden">
                <!-- pictures gear -->
                <div class="w-full aspect-square min-w-[63rem] absolute -top-[47rem] xs:-top-[78%] sm:-top-[80%]  left-1/2 -translate-x-1/2 flex justify-center items-center">
                    <img draggable="false" class="mobile-pictures-gear-spin select-none w-full aspect-square object-contain transition-[transform] duration-[1.2s] ease-in-out" src="/images/home/hero-pictures-gear-mobile.webp">
                </div>
                <div class="absolute  aspect-square w-full min-w-[63rem] top-[5.5rem] xs:top-[5.5%] sm:top-[3%] left-1/2 -translate-x-1/2 flex justify-center items-center">
                    <!-- big gear -->
                    <img draggable="false" class="select-none w-full aspect-square big-gear-spin object-contain transition-[transform] duration-[1.2s] ease-in-out" src="/images/home/hero-blue-gear-mobile.svg">
                    <!-- content -->
                    <div class="h-[34%] xs:h-[35%] sm:h-[24.5%] absolute  top-[20%] pt-6  sm:top-[20%] gear-content-gradient
                        w-screen max-w-[100vw] text-white px-5 left-1/2 -translate-x-1/2  flex flex-col items-center">
                        <img draggable="false" class="select-none w-[15.25rem]" src="/images/logo2.svg" alt="" srcset="">
                        <div class="text-[2rem] text-center mt-14 max-w-md overflow-hidden">
                            <transition name="hero-subtext">
                                <div v-if="rotateCount === 1"><span class="font-bold">Uso</span> i beni solo per il tempo che serve</div>
                                <div v-else-if="rotateCount === 2">Più li <span class="font-bold">Uso</span> e meno pago<br><br></div>
                                <div v-else-if="rotateCount === 3">E se li <span class="font-bold">Uso</span> bene... potrei guadagnarci</div>
                                <div v-else-if="rotateCount === 4"><span class="font-bold">Uso</span> i beni solo per il tempo che serve</div>
                                <div v-else-if="rotateCount === 5" class="h-full">Più li <span class="font-bold">Uso</span> e meno pago</div>
                                <div v-else-if="rotateCount === 6" class="h-full">E se li <span class="font-bold">Uso</span> bene... potrei guadagnarci</div>
                            </transition>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- big screen -->
            <div class="hidden md:block absolute h-full w-[280%] lg:w-[190%] xl:w-[152%] aspect-square top-0  left-0  ">
                
                <div class="absolute  aspect-square w-full h-full -left-[65%] lg:-left-[51.5%] xl:-left-[42%] 2xl:-left-[40%]  top-1/2 -translate-y-1/2 flex justify-center items-center z-0">
                    <!-- big gear -->
                    <img draggable="false" class="z-[1] select-none w-full aspect-square big-gear-spin object-contain transition-[transform] duration-[1.2s] ease-in-out " src="/images/home/hero-blue-gear.svg">
                    <!-- gradient -->
                    <div class="z-[2] absolute w-full h-full top-0 left-0 big-screen-blue-gradient"></div>
                    <!-- content -->
                    <div class="z-[3] absolute  w-full  h-full 
                          text-white px-5 flex ">
                        <div class="absolute h-full w-[15%] flex flex-col justify-center left-[66%]  
                            lg:left-[52.5%] lg:w-fit xl:left-[43.2%]">
                           <img draggable="false" class="select-none w-[15.25rem] lg:w-[20rem] xl:w-[33.125rem]" src="/images/logo2.svg" alt="" srcset="">
                           <div class="text-[2rem]  xl:text-4xl mt-14 md:mt-8 lg:mt-12 max-w-md md:max-w-none overflow-hidden h-24">
                                <transition name="hero-subtext">
                                    <div v-if="rotateCount === 1" class="h-full"><span class="font-bold">Uso</span> i beni solo per il tempo che serve </div>
                                    <div v-else-if="rotateCount === 2" class="h-full">Più li <span class="font-bold">Uso</span> e meno pago</div>
                                    <div v-else-if="rotateCount === 3" class="h-full">E se li <span class="font-bold">Uso</span> bene... potrei guadagnarci</div>
                                    <div v-else-if="rotateCount === 4" class="h-full">Uso i beni solo per il tempo che serve</div>
                                    <div v-else-if="rotateCount === 5" class="h-full">Più li <span class="font-bold">Uso</span> e meno pago</div>
                                    <div v-else-if="rotateCount === 6" class="h-full">E se li <span class="font-bold">Uso</span> bene... potrei guadagnarci</div>
                                </transition>
                            </div>
                           
                        </div>
                    </div>
                </div>
                <!-- pictures gear-->
                <div class="w-full aspect-square min-w-[63rem] absolute left-[18%] lg:w-[85%] lg:left-[32%] xl:w-full xl:left-[42%] 2xl:left-[44%]  top-1/2 -translate-y-1/2 flex justify-center items-center">
                    <img draggable="false" class="desktop-pictures-gear-spin select-none w-full aspect-square object-contain transition-[transform] duration-[1.2s] ease-in-out" src="/images/home/hero-pictures-gear.webp">
                </div>
            </div>
        </div>

        <!-- hero second part -->
        <div class="w-full bg-usalo-blue container h-[33rem] px-1 pt-5 pb-16 sm:pt-6 overflow-hidden md:px-5
                    md:h-[40.875rem] md:py-16" @click="rotateStackedGears=!rotateStackedGears">
            <div ref="secondPartContent" class="w-full h-full relative md:max-w-[74.5rem] mx-auto flex z-0">
                <!-- rotating gears -->
                <div class="w-full h-full absolute md:w-fit md:aspect-square z-0">
                    <div class="absolute w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:translate-x-0 md:left-0" >
                        <img draggable="false" src="/images/home/gear_1.svg" class="opacity-50 w-[14.375rem] xs:w-auto  aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                        lg:h-[25rem]" 
                                :class="{'-rotate-90 w-full xs:h-full md:h-full lg:h-full ':rotateStackedGears,'xs:h-[14.375rem]':!rotateStackedGears }">
                        <img draggable="false" src="/images/home/gear_2.svg" class="opacity-50 w-[14.375rem] xs:w-auto  aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]"
                            :class="{'-rotate-[92deg] w-[82%] xs:h-[82%] md:h-[82%] lg:h-[82%]':rotateStackedGears,'xs:h-[14.375rem] -rotate-[4deg]':!rotateStackedGears}">

                        <img draggable="false" src="/images/home/gear_3.svg" class="opacity-50 w-[14.375rem] xs:w-auto aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]" 
                            :class="{'-rotate-[92deg] w-[66%] xs:h-[66%] md:h-[66%] lg:h-[66%]':rotateStackedGears,'xs:h-[14.375rem] -rotate-[7deg]':!rotateStackedGears}">
                        
                        
                        <img draggable="false" src="/images/home/gear_4.svg" class="opacity-50 w-[14.375rem] xs:w-auto aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]" 
                            :class="{'-rotate-[92deg] w-[52%] xs:h-[52%] md:h-[52%] lg:h-[52%]':rotateStackedGears,'xs:h-[14.375rem] -rotate-[11deg]':!rotateStackedGears}">
                         
                        <img draggable="false" src="/images/home/gear_1.svg" class="opacity-50 w-[14.375rem] xs:w-auto aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]" 
                            :class="{'-rotate-[77deg] w-[40%] xs:h-[40%] md:h-[40%] lg:h-[40%]':rotateStackedGears,'xs:h-[14.375rem]':!rotateStackedGears}">
                         
                        
                    </div>
                </div>
                <!-- text content -->
                <div class="z-1 font-kyrial-display-pro absolute top-1/2  text-2xl max-w-lg text-center px-5 w-full  left-1/2 -translate-x-1/2 font-thin text-white  
                     md:text-start md:max-w-lg md:top-[37%] md:translate-x-0 md:left-56 lg:max-w-[50rem] lg:text-5xl xl:max-w-[55rem] ">
                    <span>ItalRental ha ideato <span class="font-bold">Usalo!</span> la locazione evoluta per rispondere alle esigenze del mercato.</span>
                    <br class="md:hidden">
                    <span class="transition-opacity duration-700 ease-in-out opacity-0" :class="{'opacity-100':rotateStackedGears}"> e superare i limiti attuali dei servizi di locazione commerciale.</span>
                </div>
                
            </div>
            
        </div>

    </section>
</template>

<script setup>

const heroGearRotation = ref(0)
const mobilePicturesGearRotation = computed(()=> `${heroGearRotation.value+90}deg`)
const desktopPicturesGearRotation = computed(()=> `${heroGearRotation.value}deg`)
const blueGearRotation = computed(()=> `${-heroGearRotation.value }deg`)
const rotateCount=ref(1)
const secondPartContent = ref(null)

function rotate(){
    heroGearRotation.value += 60;
    if(rotateCount.value === 6){
        rotateCount.value = 1 
    }else{
        rotateCount.value++
    }
}

const rotateStackedGears = ref(false)

onMounted(() => {
    setInterval(() => {
        rotate()
    }, 4000);


    // let observer = new IntersectionObserver((entries) => {
    //     entries.forEach((entry) => {
    //         rotateStackedGears.value = entry.isIntersecting
    //     });
    //     }, {threshold:0.6}
    // );
    // observer.observe(secondPartContent.value);
})

</script>
<style scoped>


.hero-subtext-enter-active{
  transition: all 0.9s ease-in-out 0.3s;
}
.hero-subtext-leave-active {
  transition: all 0.6s ease-in-out;
}

.hero-subtext-enter-from{
    transform: translateY(100%);
}

.hero-subtext-enter-to{
    transform: translateY(0);
}
.hero-subtext-leave-to {
    transform: translateY(-100%);
}

.gear-content-gradient{
    background-image: linear-gradient(180deg, transparent , #041E42 60%);
}
.big-screen-blue-gradient{
    background-image: linear-gradient(180deg, transparent , #041E42 98%);

}
.mobile-pictures-gear-spin{
    transform: rotate(v-bind(mobilePicturesGearRotation));
}
.desktop-pictures-gear-spin{
    transform: rotate(v-bind(desktopPicturesGearRotation));
}
.big-gear-spin{
    transform: rotate(v-bind(blueGearRotation));
}

@media (min-width:48rem) {
    .gear-content-gradient{
        background-image: linear-gradient(180deg, transparent , #041E42 60%);
    }
}
</style>