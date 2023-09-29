<template>
    <ul class="gallery-list" v-if="galleries">
        <li class="gallery-item" v-for="gallery in galleries" :key="gallery.id">
            <img class="gallery-img" 
                :src="gallery.urls?.regular" 
                alt="Gallery image"
                @click="isFav ? null : openModal(gallery)"
            >
        </li>
    </ul>
    <span v-else>Пусто</span>
</template>

<script>
import { useModal } from 'vue-final-modal'
import { useStore } from 'vuex'
import MyModal from '../Modal/Modal.vue'

export default {
    props: {
        galleries: {
            type: Array,
            required: true
        },
        isFav: {
            type: Boolean,
            required: true
        }
    },
    setup() {
        const store = useStore();

        const { open } = useModal({
            component: MyModal,
        })

        const openModal = async (gallery) => {
            store.dispatch('makeActiveImage', {})
            open(gallery)
            
            store.dispatch('makeActiveImage', gallery)
        }

        return {
            openModal
        }
    },
}

</script>

<style scoped>

.gallery-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1485px;
  list-style: none;
  gap: 10px;
  width: 100%;
  padding: 0;
}

.gallery-item {
  width: 476px;
  margin: 0px;
  cursor: pointer;
}
.gallery-img {
    max-width: 476px;
    width: 100%;
    height: 453px;
    object-fit: cover;
}

@media (max-width: 1000px) {
  .gallery-list {
    flex-direction: column;
    flex-wrap: wrap;
    max-width: 400px;
  }

  .gallery-item {
    width: 100%;
  }
}
</style>