<template>
    <section class="bg-[#EDF1F8] pt-16 lg:pt-20">
        <div class="container px-5">
            <div class="card-background flex justify-center md:justify-start px-9 pb-0 gap-x-5">
                <div class="hidden md:flex w-1/2 h-[22rem] lg:h-[30rem] shrink-0 self-end  justify-center">
                    <img class="h-full object-contain" src="/images/home/mikhail-nilov.webp" alt="" srcset="">
                </div>

                <div class="w-full flex flex-col py-9 lg:py-24 shrink-0 md:w-1/2 md:max-w-[25.625rem]">
                    <h1 class="text-center md:text-start">Scopri se Usalo! fa al caso tuo</h1>
                    <div class="text-xl mt-6 text-center md:text-start lg:text-[1.75rem]">Hai già utilizzato la locazione operativa in passato? <br><br></div>
                    <div class="w-full flex justify-center gap-x-5 mt-8 md:justify-start">
                        <button @click="openPopUp('si')" class="text-xl font-bold bg-white py-4 px-10 transition-[box-shadow] duration-200  hover:ring-usalo-sky hover:ring-1">SI</button>
                        <!-- <button @click="openPopUp('no')" class="text-xl font-bold bg-white py-4 px-10 transition-[box-shadow] duration-200  hover:ring-usalo-sky hover:ring-1">NO</button> -->
                        <button @click="openPopUp('si')" class="text-xl font-bold bg-white py-4 px-10 transition-[box-shadow] duration-200  hover:ring-usalo-sky hover:ring-1">NO</button>

                    </div>
                </div>
            </div>

        </div>

        
        
    </section>
</template>

<script setup>

const emit = defineEmits(['openPopUp'])
function openPopUp(name){
    emit('openPopUp',name)
}
</script>

<style scoped>
.card-background{
    background: radial-gradient(415.52% 159.44% at 3.79% -12.24%, #C9DDF2 0%, #E7F3FF 58.85%, #C9DDF2 100%);
    box-shadow: 0px 24px 30px 0px rgba(0, 0, 0, 0.04), 0px 4px 14px 0px rgba(0, 0, 0, 0.05);
}
</style>