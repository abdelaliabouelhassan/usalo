<template>
    <div >
        <HeroSection />
        <div ref="trigger">
            <SecondSection/>
            <ThirdSection />
            <FourthSection />
            <FifthSection />
            <SixthSection />
        </div>
    </div>
</template>

<script setup>
import HeroSection from "@/components/partials/sections/home/HeroSection.vue";
// import SecondSection from "@/components/partials/sections/home/SecondSection.vue";
import SecondSection from "@/components/partials/sections/home/SecondSection2.vue";
import ThirdSection from "@/components/partials/sections/home/ThirdSection.vue";
import FourthSection from "@/components/partials/sections/home/FourthSection.vue";
import FifthSection from "@/components/partials/sections/home/FifthSection.vue";
import SixthSection from "@/components/partials/sections/home/SixthSection.vue";
import Footer from "@/components/partials/Footer.vue";
import '@splidejs/vue-splide/css';


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
</script>