<template>
    <div class="search">
        <Gallery :galleries="images" :isFav="true"/>
    </div>
    <ModalsContainer />
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { ModalsContainer } from 'vue-final-modal'

import Gallery from '../components/Gallery/Gallery.vue'

export default {
    name: "Favorites",
    components: {
        Gallery,
        ModalsContainer
    },
    setup(){
        const store =  useStore();

        const images = computed(() => {
            const res = store.getters.getSavedImages;
            return res 
        })
        
        return {
            images,
        }
    },
}
</script>

<style lang="scss" scoped>
.search {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    position: relative;
}
.btn {
    position: absolute;
    bottom: 5%;
    right: 5%;
}
@media (max-width: 1000px) {
    .btn {
        display: none;
    }
}
</style>
