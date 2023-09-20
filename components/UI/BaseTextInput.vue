<template>
    <div>
        <input :type="type" 
            class="w-full bg-white py-1.5 px-2.5 border-none font-light transition-[box-shadow] duration-200  focus:ring-light-usalo-blue  focus:ring-1 focus:border-none focus:outline-none"
            v-model="inputValue"
            :placeholder="placeholder"
        >
                
    </div>
</template>
<script setup>

// const props = defineProps(['modelValue','placeholder'])
const props = defineProps({
    modelValue:{
        required:false
    },
    placeholder:{
        required:false
    },
    type: {
        required:false,
        default:'text'
    }  
})
const emit = defineEmits(['update:modelValue'])
const inputValue = ref('')

watch(inputValue , val=>{
    emit('update:modelValue', val)
})

watch(()=>props.modelValue , val=>{
    inputValue.value = val
}, {immediate:true})
</script>