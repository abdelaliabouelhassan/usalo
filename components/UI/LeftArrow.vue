<template>
<div class="">
    <div class="custom-slide-arrows splide__arrows" style="position: relative">
        <button class="splide__arrow splide__arrow--prev w-12 h-12 flex items-center justify-center text-2xl text-usalo-sky rounded-full border-usalo-sky
                    hover:text-white hover:bg-usalo-sky highlight transition-all duration-150 ease-linear hover:border-usalo-sky">
            <svg class="w-4 h-5" width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M0.369102 3.95406C0.173841 4.14933 0.173841 4.46591 0.369103 4.66117L3.55108 7.84315C3.74635 8.03841 4.06293 8.03841 4.25819 7.84315C4.45345 7.64789 4.45345 7.33131 4.25819 7.13605L1.42976 4.30762L4.25819 1.47919C4.45345 1.28393 4.45345 0.967346 4.25819 0.772084C4.06293 0.576822 3.74635 0.576822 3.55108 0.772084L0.369102 3.95406ZM13.7227 3.80762L0.722656 3.80762L0.722656 4.80762L13.7227 4.80762L13.7227 3.80762Z" />
            </svg>
        </button>
    </div>
</div>
</template>

<style scoped>

.splide__arrow{
    position: relative;
    left: 0;
    right: 0;
    padding: 12px;
    background: white;  
    transform: translateY(0);
    border: 1px solid #418FDE;
}
.splide__arrow:hover{
    background: #418FDE;
}

.splide__arrow--prev svg {
    transform: scaleX(1)  !important;
}
.splide__arrow svg {
    fill: none;
    height: 1.25rem;
    width: 1rem;
}
</style>