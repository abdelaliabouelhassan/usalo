<template>
    <div class="min-h-screen">
        <Header />
        <slot />
    </div>
    
</template>
<script setup>
import Header from "@/components/partials/Header.vue";
</script>