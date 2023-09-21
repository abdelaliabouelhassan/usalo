<template>
    <div class="min-h-screen">
        <Header />
        <div class="mt-[3.75rem] lg:mt-[4.25rem] ">
            <slot />
        </div>
        <Footer />
    </div>
    
</template>
<script setup>
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
</script>