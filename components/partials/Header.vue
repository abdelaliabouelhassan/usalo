<template>
    <header class="fixed top-0 left-0 z-[100] w-full">
        <div class="relative flex flex-col ">
            <div class="z-50 w-full bg-white ">
                <nav class="container px-5 py-[1.125rem] flex items-center justify-between lg:py-3">
                    <div class="lg:hidden"></div>
                    <nuxt-link to="/" class="h-6 lg:h-[2.125rem]">
                        <img class="object-contain h-full" src="/images/logo.svg" alt="" srcset="">
                    </nuxt-link>
                    <button class="w-6 h-6 menu-btn lg:hidden" @click="Toggle">

                            <svg id="menuToggle" class="w-full h-full" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id='path1' d="M1 1H17" stroke="#418FDE" stroke-width="2" stroke-linecap="round"/>
                                <path id='path2' d="M1 7H17" stroke="#418FDE" stroke-width="2" stroke-linecap="round"/>
                                <path id='path3' d="M1 13H17" stroke="#418FDE" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                    </button>
                    <!-- big screen menu links -->
                    <div class="z-40 items-center hidden lg:flex gap-x-6">
                        <!-- <nuxt-link to="/" class="py-2 hover:text-usalo-sky">Home</nuxt-link>
                        <nuxt-link to="/" class="py-2 hover:text-usalo-sky">Chi siamo</nuxt-link>
                        <nuxt-link to="/" class="py-2 hover:text-usalo-sky">USALO! in dettaglio</nuxt-link>
                        <nuxt-link to="/" class="py-2 hover:text-usalo-sky">Sei un fornitore?</nuxt-link> -->
                        <nuxt-link to="/" class=" text-lg font-semibold ring-1 ring-usalo-sky py-2 px-6 
                            transition-[box-shadow] duration-200 ease hover:ring-2 box-content">Contattaci</nuxt-link>
                    </div>
                </nav>
            </div>

            <!-- small screen menu -->
            <div class="z-40 absolute top-[3.75rem] left-0 w-full h-fit flex justify-center transition-all duration-1000 ease-in-out pb-48"
                    :class="{'translate-y-0 ':showMenu, '-translate-y-[calc(100%+3.8rem)]':!showMenu}">
                <!-- white-gear -top-[496px] -top-[1000px]-->
                <div class="absolute bottom-0 z-30 -translate-x-1/2 w-fit h-fit left-1/2">
                    <div class="bg-white menu-gear-background h-[993px] w-[986px] shrink-0 transition-all duration-1000 ease-in-out pt-[3.75rem] box-content"
                        :class="{'rotate-180':showMenu, 'rotate-0':!showMenu}">
                    </div>

                </div>
                <!--small screen menu links -->
                <div class="z-40 flex flex-col items-center w-full transition-opacity duration-700 ease-in-out gap-y-5 py-9"
                    :class="{'opacity-100':showMenu, 'opacity-0 ':!showMenu}">
                    <nuxt-link to="/" class="py-2 hover:text-usalo-sky">Home</nuxt-link>
                    <nuxt-link to="/" class="py-2 hover:text-usalo-sky">Chi siamo</nuxt-link>
                    <nuxt-link to="/" class="py-2 hover:text-usalo-sky">USALO! in dettaglio</nuxt-link>
                    <nuxt-link to="/" class="py-2 hover:text-usalo-sky">Sei un fornitore?</nuxt-link>
                    <nuxt-link to="/" class=" text-lg font-semibold ring-1 ring-usalo-sky py-2 px-6 
                            transition-[box-shadow] duration-200 ease hover:ring-2 box-content">Contattaci</nuxt-link>
                </div>
            </div>


        </div>

    </header>
</template>
<script setup>
import {gsap} from "gsap";
    const showMenu = ref(false)
    function resizeHandler() {
        if(window.innerWidth >=1024 ){
            showMenu.value = false
        }
    }
    function clickHandler(e) {
        let clickedInsideHeader=!!e.target.closest('header')
        if(!clickedInsideHeader){
            showMenu.value = false
        }
    }
    function Toggle() {
      
        const tl = gsap.timeline()
        tl.to('#path1',{duration:0.5,attr:{d:showMenu.value ? 'M1 1H17' : 'M1 7L9 1'}})
        tl.to('#path2',{duration:0.5,attr:{d:showMenu.value ? 'M1 7H17' : 'M9 1L17 7'}},'-=0.5')
        tl.to('#path3',{duration:0.5,attr:{d:showMenu.value ? 'M1 13H17' : 'M9 1V13'}},'-=0.5')
          showMenu.value = !showMenu.value
    }
    onMounted(() => {
        window.addEventListener('resize',resizeHandler)
        window.addEventListener('click',clickHandler)
    })
    onUnmounted(() => {
        window.removeEventListener('resize',resizeHandler)
        window.removeEventListener('click',clickHandler)
    })
</script>
<style scoped>
.menu-gear-background{
    clip-path: path("M14.487 577.537C8.00797 570.915 3.91874 562.301 2.87071 553.068L3.15037 552.575C-1.05007 514.959 -1.05006 476.987 3.15038 439.371C4.22179 430.147 8.31902 421.545 14.7937 414.928C21.2684 408.31 29.7507 404.054 38.8991 402.833L76.047 397.905C83.7238 396.881 90.9567 393.694 96.9108 388.711C102.865 383.729 107.297 377.154 109.697 369.744C116.089 349.998 124.019 330.789 133.413 312.297C136.899 305.341 138.368 297.538 137.65 289.781C136.933 282.024 134.058 274.627 129.355 268.438L106.619 238.588C101.003 231.295 97.9552 222.33 97.9552 213.103C97.9552 203.876 101.003 194.911 106.619 187.618C130.041 157.817 156.829 130.861 186.442 107.291C193.668 101.622 202.569 98.5432 211.732 98.5432C220.895 98.5432 229.795 101.622 237.022 107.291L266.754 130.171C272.89 134.905 280.229 137.799 287.927 138.521C295.625 139.244 303.369 137.765 310.269 134.254C328.74 124.8 347.921 116.82 367.634 110.388C375.003 107.941 381.538 103.452 386.487 97.4379C391.437 91.4235 394.601 84.1268 395.618 76.3849L400.375 39.2133C401.548 29.977 405.761 21.4021 412.342 14.8563C418.923 8.3105 427.492 4.17085 436.684 3.09779C474.046 -1.0327 511.745 -1.0327 549.107 3.0978C558.279 4.19112 566.828 8.32815 573.403 14.8556C579.978 21.383 584.204 29.9287 585.415 39.1429L590.312 76.4552C591.325 84.1902 594.49 91.4798 599.441 97.4835C604.392 103.487 610.928 107.961 618.296 110.388C637.924 116.748 657.015 124.681 675.382 134.113C682.282 137.656 690.037 139.16 697.751 138.45C705.464 137.739 712.82 134.845 718.966 130.101L748.629 107.291C755.871 101.628 764.782 98.5534 773.954 98.5534C783.126 98.5534 792.036 101.628 799.279 107.291C828.903 130.895 855.733 157.848 879.241 187.618C884.886 194.912 887.951 203.893 887.951 213.138C887.951 222.383 884.886 231.364 879.241 238.658L856.435 268.72C851.691 274.904 848.797 282.321 848.091 290.101C847.385 297.881 848.896 305.703 852.447 312.65C861.806 331.109 869.735 350.268 876.163 369.956C878.563 377.365 882.996 383.94 888.95 388.923C894.904 393.905 902.136 397.092 909.813 398.116L947.101 403.114C956.249 404.336 964.732 408.592 971.207 415.21C977.681 421.827 981.778 430.428 982.85 439.652C987.05 477.269 987.05 515.24 982.85 552.857C981.802 562.09 977.712 570.704 971.233 577.326C964.754 583.948 956.259 588.197 947.101 589.395L909.813 594.393C902.139 595.425 894.91 598.615 888.958 603.596C883.005 608.578 878.57 615.149 876.163 622.553C869.706 642.342 861.73 661.596 852.307 680.141C848.821 687.097 847.353 694.901 848.07 702.658C848.788 710.415 851.663 717.812 856.365 724.001L879.241 754.132C884.886 761.427 887.951 770.407 887.951 779.653C887.951 788.898 884.886 797.878 879.241 805.173C855.745 835.017 828.915 862.041 799.279 885.711C792.031 891.363 783.122 894.43 773.954 894.43C764.785 894.43 755.876 891.363 748.629 885.711L718.966 862.901C712.827 858.146 705.475 855.239 697.761 854.516C690.047 853.793 682.288 855.285 675.382 858.818C657.016 868.273 637.926 876.23 618.296 882.613C610.928 885.041 604.392 889.515 599.441 895.518C594.49 901.522 591.325 908.812 590.312 916.547L585.415 953.859C584.213 963.07 579.988 971.612 573.409 978.13C566.831 984.648 558.277 988.767 549.107 989.834C511.75 994.055 474.041 994.055 436.684 989.834C427.435 988.85 418.787 984.757 412.135 978.217C405.483 971.676 401.217 963.07 400.025 953.789L395.268 916.617C394.268 908.869 391.109 901.565 386.157 895.548C381.205 889.53 374.662 885.046 367.284 882.613C347.571 876.182 328.39 868.202 309.918 858.748C303.019 855.237 295.275 853.758 287.577 854.48C279.879 855.203 272.54 858.097 266.404 862.831L236.882 885.218C229.629 890.887 220.706 893.964 211.522 893.964C202.338 893.964 193.416 890.887 186.162 885.218C156.539 861.556 129.73 834.531 106.269 804.68C100.613 797.391 97.541 788.408 97.541 779.16C97.541 769.911 100.613 760.929 106.269 753.639L129.006 724.071C133.739 717.897 136.633 710.497 137.351 702.733C138.07 694.969 136.583 687.159 133.063 680.211C123.722 661.705 115.816 642.498 109.417 622.764C107.04 615.342 102.614 608.754 96.6554 603.768C90.6972 598.782 83.4527 595.603 75.7674 594.604L38.6194 589.606C29.4617 588.408 20.966 584.159 14.487 577.537Z")
}


</style>


