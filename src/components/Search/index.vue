<template>
  <div class="form-content">
    <form class="form">
      <div class="form-block">
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          style="color: #4A5568;"
        >
          <path d="M22.8596 22.1821L15.8614 15.1838C17.315 13.5699 18.2084 11.442 18.2084 9.10414C18.2083 4.08416 14.1242 0 9.10418 0C4.08416 0 0 4.08416 0 9.10418C0 14.1242 4.08416 18.2084 9.10418 18.2084C11.442 18.2084 13.5699 17.315 15.1839 15.8614L22.1821 22.8596C22.2756 22.9532 22.3983 23 22.5209 23C22.6435 23 22.766 22.9532 22.8597 22.8596C23.0468 22.6724 23.0468 22.3692 22.8596 22.1821ZM9.10418 17.25C4.61294 17.25 0.958363 13.5959 0.958363 9.10418C0.958363 4.61249 4.61294 0.958318 9.10418 0.958318C13.5954 0.958318 17.25 4.61244 17.25 9.10418C17.25 13.5959 13.5954 17.25 9.10418 17.25Z" fill="black"/>
        </svg>
        <input
          class="input"
          placeholder="Поиск"
          style="width: calc(100% - 3.5rem);"
          @input="handleInputChange"
          v-model="searchQuery"
        />
      </div>
    </form>
  </div>
</template>
  
<script lang="ts">
  import { defineComponent, ref } from "vue";
  import { useStore } from 'vuex'

  import { debounce } from "../../utils/utils";

  export default defineComponent({
      name: "SearchBar",
      setup() {
        const store = useStore();
        const searchQuery = ref("");
  
        const handleInputChange = debounce((evt: Event) => {
          const element = evt.target as HTMLInputElement;
          const searchQuery = element.value;
          
          store.dispatch("searchImages", searchQuery);
        }, 400);
    
        return {
          handleInputChange,
          searchQuery
        };
      }
    });
</script>
  
<style lang="scss" scoped>

  .form-content {
    height: 240px;
    width: 100%;
    background: url(../../assets/search-bg.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 576px) {
        height: 140px;
      }
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .form-block{
    position: relative;
    height: 70px;
    max-width: 886px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .icon {
    position: absolute;
    top: 35%;
    right: 20px;
    cursor: pointer;
  }
  .input{
    padding: 10px 10px 10px 30px;
    font-size: 24px;
    border: none;
    outline: none;
  }
  </style>