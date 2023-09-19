<template>
    <div class="">
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
    </div>
</template>

<script setup>
import HeroSection from "@/components/partials/sections/home/HeroSection.vue";
import SecondSection from "@/components/partials/sections/home/SecondSection.vue";
import ThirdSection from "@/components/partials/sections/home/ThirdSection.vue";
import FourthSection from "@/components/partials/sections/home/FourthSection.vue";
import FifthSection from "@/components/partials/sections/home/FifthSection.vue";
import '@splidejs/vue-splide/css';
</script>