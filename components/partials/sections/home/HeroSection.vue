<template>
    <section class="  w-full  bg-usalo-blue " >
        <div class="h-[38.375rem] sm:h-[41rem] md:h-[calc(100vh-3.75rem)]  md:max-h-[55rem] relative overflow-hidden flex flex-col lg:h-[calc(100vh-4.25rem)]" @click="rotate">
            
            <!-- small screen -->
            <div class="absolute w-[222%] aspect-square top-0  left-1/2 -translate-x-1/2  md:hidden">
                <!-- pictures gear -->
                <div class="w-full aspect-square min-w-[63rem] absolute -top-[47rem] xs:-top-[78%] sm:-top-[80%]  left-1/2 -translate-x-1/2 flex justify-center items-center">
                    <img draggable="false" class="select-none w-full aspect-square pictures-gear-spin object-contain transition-[transform] duration-[1.2s] ease-in-out" src="/images/home/pictures-gear-mobile-png.png">
                </div>
                <!-- big gear -->
                <div class="absolute  aspect-square w-full min-w-[63rem] top-[5.5rem] xs:top-[5.5%] sm:top-[3%] left-1/2 -translate-x-1/2 flex justify-center items-center">
                    <img draggable="false" class="select-none w-full aspect-square big-gear-spin object-contain transition-[transform] duration-[1.2s] ease-in-out" src="/images/home/hero-blue-gear-mobile.svg">
                    
                    <div class="h-[34%] xs:h-[35%] sm:h-[24.5%] absolute  top-[20%] pt-6  sm:top-[20%] gear-content-gradient
                        w-screen max-w-[100vw] text-white px-5 left-1/2 -translate-x-1/2  flex flex-col items-center">
                        <img draggable="false" class="select-none w-[15.25rem]" src="/images/logo2.svg" alt="" srcset="">
                        <div class="text-[2rem] text-center mt-14 max-w-md"><span class="font-bold">Uso</span>  i beni solo per il tempo che serve</div>
                    </div>
                </div>
            </div>
            
            <!-- big screen -->
            <div class="hidden md:block absolute h-full w-[280%] lg:w-[190%] xl:w-[152%] aspect-square top-0  left-0  ">
                
                <div class="absolute  aspect-square w-full h-full -left-[65%] lg:-left-[51.5%] xl:-left-[42%] 2xl:-left-[40%]  top-1/2 -translate-y-1/2 flex justify-center items-center z-0">
                    <img draggable="false" class="z-[1] select-none w-full aspect-square big-gear-spin object-contain transition-[transform] duration-[1.2s] ease-in-out " src="/images/home/hero-blue-gear.svg">
                    <div class="z-[2] absolute w-full h-full top-0 left-0 big-screen-blue-gradient"></div>
                    
                    <div class="z-[3] absolute  w-full  h-full 
                          text-white px-5 flex ">
                        <div class="absolute h-full w-[15%] flex flex-col justify-center left-[66%]  
                            lg:left-[52.5%] lg:w-fit xl:left-[43.2%]">
                           <img draggable="false" class="select-none w-[15.25rem] lg:w-[20rem] xl:w-[33.125rem]" src="/images/logo2.svg" alt="" srcset="">
                           <div class="text-[2rem]  xl:text-4xl mt-14 md:mt-8 lg:mt-12 max-w-md md:max-w-none"><span class="font-bold">Uso</span>  i beni solo per il tempo che serve</div>
                        </div>
                    </div>
                </div>

                <div class="w-full aspect-square min-w-[63rem] absolute left-[18%] lg:w-[85%] lg:left-[32%] xl:w-full xl:left-[42%] 2xl:left-[44%]  top-1/2 -translate-y-1/2 flex justify-center items-center">
                    <img draggable="false" class="select-none w-full aspect-square pictures-gear-spin object-contain transition-[transform] duration-[1.2s] ease-in-out" src="/images/home/hero-pictures-gear.webp">
                </div>
            </div>
            

        </div>


        <div class="w-full bg-usalo-blue container h-[33rem] px-1 pt-5 pb-16 sm:pt-6 overflow-hidden md:px-5
                    md:h-[40.875rem] md:py-16" @click="rotateGears=!rotateGears">
            <div class="w-full h-full relative ">
                <div class="font-kyrial-display-pro absolute top-1/2  text-2xl max-w-lg text-center px-5 w-full  left-1/2 -translate-x-1/2 font-thin text-white  
                     md:text-start md:max-w-lg md:top-[37%] md:translate-x-0 md:left-56 lg:max-w-[50rem] lg:text-5xl xl:max-w-[55rem] ">
                    <span>ItalRental ha ideato <span class="font-bold">Usalo!</span> la locazione evoluta per rispondere alle esigenze del mercato.</span>
                    <br class="md:hidden">
                    <span class="transition-opacity duration-700 ease-in-out opacity-0" :class="{'opacity-100':rotateGears}"> e superare i limiti attuali dei servizi di locazione commerciale.</span>
                </div>
                <!-- rotating gears -->
                <div class="w-full h-full absolute ">
                    <div class="absolute w-full h-full left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:translate-x-0 md:left-0" >
                        <img src="/images/home/gear_1.svg" class="opacity-50 w-[14.375rem] xs:w-auto  aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                        lg:h-[25rem]" 
                                :class="{'-rotate-90 w-full xs:h-full md:h-full lg:h-full ':rotateGears,'xs:h-[14.375rem]':!rotateGears }">
                        <img src="/images/home/gear_2.svg" class="opacity-50 w-[14.375rem] xs:w-auto  aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]"
                            :class="{'-rotate-[92deg] w-[82%] xs:h-[82%] md:h-[82%] lg:h-[82%]':rotateGears,'xs:h-[14.375rem] -rotate-[4deg]':!rotateGears}">

                        <img src="/images/home/gear_3.svg" class="opacity-50 w-[14.375rem] xs:w-auto aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]" 
                            :class="{'-rotate-[92deg] w-[66%] xs:h-[66%] md:h-[66%] lg:h-[66%]':rotateGears,'xs:h-[14.375rem] -rotate-[7deg]':!rotateGears}">
                        
                        
                        <img src="/images/home/gear_4.svg" class="opacity-50 w-[14.375rem] xs:w-auto aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]" 
                            :class="{'-rotate-[92deg] w-[52%] xs:h-[52%] md:h-[52%] lg:h-[52%]':rotateGears,'xs:h-[14.375rem] -rotate-[11deg]':!rotateGears}">
                         
                        <img src="/images/home/gear_1.svg" class="opacity-50 w-[14.375rem] xs:w-auto aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-[1.2s] ease-in-out
                                    lg:h-[25rem]" 
                            :class="{'-rotate-[77deg] w-[40%] xs:h-[40%] md:h-[40%] lg:h-[40%]':rotateGears,'xs:h-[14.375rem]':!rotateGears}">
                         
                        
                        
                    </div>
                </div>
                
            </div>



            <!-- <img class="w-[14.375rem] h-[14.375rem]" src="/images/gear.svg" alt="" srcset=""> -->
            

            
        </div>
    </section>
</template>

<script setup>

const mobileRotation = ref(0)
const mobilePicturesGearRotation = computed(()=> `${mobileRotation.value}deg`)
const bigGearRotation = computed(()=> `${-mobileRotation.value }deg`)

function rotate(){
    // if(window.innerWidth < 1024)
    mobileRotation.value += 60;
}

const rotateGears = ref(false)


</script>
<style scoped>

.gear-content-gradient{
    background-image: linear-gradient(180deg, transparent , #041E42 60%);
}
.big-screen-blue-gradient{
    background-image: linear-gradient(180deg, transparent , #041E42 98%);

}
.pictures-gear-spin{
    transform: rotate(v-bind(mobilePicturesGearRotation));
}
.big-gear-spin{
    transform: rotate(v-bind(bigGearRotation));
}

@media (min-width:48rem) {
    .gear-content-gradient{
        background-image: linear-gradient(180deg, transparent , #041E42 60%);
    }
}
</style>