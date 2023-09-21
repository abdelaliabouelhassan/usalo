<template>
    <section class="container bg-slat px-5 py-16 lg:py-20 ">
        <div class="flex flex-col lg:flex-row">
            <div class="w-full bg-usalo-blue text-white py-8 px-[2rem] lg:py-11  ">
                <div class="w-full h-full flex flex-col lg:justify-center gap-x-5 max-w-md mx-auto lg:max-w-[29rem]">
                    <h1 class="">Lasciaci i tuoi dati per essere contattato</h1>
                    <div class="text-lg mt-6 lg:text-xl font-light">Lorem ipsum dolor sit.</div>
                </div>
            </div>
            <form @submit.prevent="submitForm" class="w-full bg-[#EDF1F8]  py-8 px-[2rem] lg:py-11">
                <div class="flex flex-col max-w-md mx-auto gap-y-4 lg:max-w-[22.5rem]">
                    <div class="flex flex-col gap-y-2">
                        <label class="font-bold text-lg lg:text-xl">Nome e cognome</label>
                        <BaseTextInput placeholder="Es. Mario Rossi" v-model="formData.fullname" />
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <label class="font-bold text-lg lg:text-xl">Azienda</label>
                        <BaseTextInput placeholder="Es. Azienda S.P.A." v-model="formData.agency" />
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <label class="font-bold text-lg lg:text-xl">Telefono</label>
                        <BaseTextInput type="tel" placeholder="Ee. 328 123 4567" v-model="formData.telephone" />
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <label class="font-bold text-lg lg:text-xl">E-mail</label>
                        <BaseTextInput type="email" placeholder="Es. nomecognome@azienda.it" v-model="formData.email" />
                    </div>
                    <div class="flex flex-col gap-y-2">
                        <div class="font-bold text-lg lg:text-xl">Sono un:</div>
                        <div class="w-full flex justify-center gap-x-3 md:justify-start">
                            <button @click="formData.userType = 'client'" class="w-full text-xl bg-white py-4 px-6  
                                    transition-[box-shadow_background-color] duration-200  hover:shadow-[inset_0_-4px_0_0_#aaa] hover:bg-[#F2EBEB] "
                                    :class="{'!shadow-[inset_0_-2px_0_0_#041E42]':formData.userType === 'client', 'shadow-[inset_0_-2px_0_0_#aaa]':formData.userType !== 'client'}">
                                Cliente
                            </button>
                            <button @click="formData.userType = 'supplier'" class="w-full text-xl bg-white py-4 px-6
                                    transition-[box-shadow_background-color] duration-200  hover:shadow-[inset_0_-4px_0_0_#aaa] hover:bg-[#F2EBEB] "
                                    :class="{'!shadow-[inset_0_-2px_0_0_#041E42]':formData.userType === 'supplier', 'shadow-[inset_0_-2px_0_0_#aaa]':formData.userType !== 'supplier'}">
                                Fornitore
                            </button>
                        </div>
                         <button type="submit" class="uppercase w-full text-white font-bold text-2xl bg-usalo-blue py-4 px-10 mt-10 
                                    transition-[background-color] duration-200  hover:bg-light-usalo-blue">
                                invia dati
                        </button>
                    </div>
                </div>
                

            </form>
        </div>
    </section>
</template>
<script setup>
import BaseTextInput from "@/components/UI/BaseTextInput.vue";
const formData = reactive({
    fullname:'',
    agency:'',
    telephone:'',
    email:'',
    userType:'client',

})
function submitForm(){

}

watch(()=>formData.userType , val=>{
    console.log(val);
})
</script>
<style scoped>
.ggg{
    background: rgb(171, 171, 171);
}
</style>