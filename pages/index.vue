<template>
    <div >
        <HeroSection />
        <div ref="trigger">
            <SecondSection/>
            <ThirdSection @openPopUp="openPopUp" />
            <FourthSection />
            <FifthSection />
            <SixthSection />
        </div>

        
        <!-- popup modal -->
        <BaseModal :show="openModal" @close="openModal =false">
            <!-- si -->
            <div v-show="popup === 'si'" class="container px-5" data-tf-live="01HAY6S9GPWGK0P80Z3CMWWE32"></div>
            <!-- no -->
            <div v-show="popup === 'no'" class="container px-5" data-tf-live="01HAY759D1263PXCGRKW5HVY9N"></div>
        </BaseModal>
    </div>
</template>

<script setup>
import HeroSection from "@/components/partials/sections/home/HeroSection.vue";
import SecondSection from "~/components/partials/sections/home/SecondSection.vue";
import ThirdSection from "@/components/partials/sections/home/ThirdSection.vue";
import FourthSection from "@/components/partials/sections/home/FourthSection.vue";
import FifthSection from "@/components/partials/sections/home/FifthSection.vue";
import SixthSection from "@/components/partials/sections/home/SixthSection.vue";
import Footer from "@/components/partials/Footer.vue";
import '@splidejs/vue-splide/css';
import BaseModal from '@/components/UI/BaseModal.vue'


import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const trigger = ref(null)
onMounted(() => {
    gsap.registerPlugin(ScrollTrigger)

    const timeline = gsap.timeline(
        {
            scrollTrigger: {
                trigger: trigger.value,
                start: "top top",
                end: "bottom top",
                endTrigger:'#home_second_section',
                scrub: 1,
                pin: true,

            }
        }
    )
})

const openModal = ref(false)
const popup = ref('si')
function openPopUp(name){
    openModal.value = true
    popup.value = name
}
</script>