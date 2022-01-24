<template>
  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Name:
      <input v-model="friendName" type="text"/>
    </label>
    <br/>
    <label>
      Age:
      <input v-model="friendAge" type="number"/>
    </label>
    <br/>
    <button @click="addFriend">Add Friend</button>
    <p>{{ status }}</p>
  </fieldset>
</template>

<script>
import { db } from '@/db';

const defaultAge = 21;

export default {
  name: 'FriendAdder',
  data: () => ({
    status: '',
    friendName: '',
    friendAge: defaultAge,
  }),
  methods: {
    async addFriend() {
      try {
        // Add the new friend!
        const id = await db.friends.add({
          name: this.friendName,
          age: this.friendAge,
        });

        this.status = `Friend ${this.friendName}
          successfully added. Got id ${id}`;

        // Reset form:
        this.friendName = '';
        this.friendAge = defaultAge;
      } catch (error) {
        this.status = `Failed to add
          ${this.friendName}: ${error}`;
      }
    },
  },
};
</script>
