<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <friend-list/>
    <friend-adder/>
    <div class="update-dialog" v-if="prompt">
      <div class="update-dialog__content">
        A new version is found. Refresh to load it?
      </div>
      <div class="update-dialog__actions">
        <button
          class="update-dialog__button update-dialog__button--confirm"
          @click="update"
        >
          Update
        </button>
        <button
          class="update-dialog__button update-dialog__button--cancel"
          @click="prompt = false"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import FriendList from '@/components/FriendList.vue';
import FriendAdder from '@/components/FriendAdder.vue';

export default {
  name: 'App',
  components: {
    FriendAdder,
    FriendList,
  },

  methods: {
    async update() {
      this.prompt = false;
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' });
    },
  },

  data() {
    return {
      prompt: false,
    };
  },

  created() {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.prompt = true;
      });
    }
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.update-dialog {
  position: fixed;
  left: 50%;
  bottom: 64px;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  padding: 12px;
  max-width: 576px;
  color: white;
  background-color: #2c3e50;
  text-align: left;
}

.update-dialog__actions {
  display: flex;
  margin-top: 8px;
}

.update-dialog__button {
  margin-right: 8px;
}

.update-dialog__button--confirm {
  margin-left: auto;
}
</style>
