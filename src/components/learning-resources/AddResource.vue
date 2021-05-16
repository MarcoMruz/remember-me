<template>
  <BaseDialog v-if="showDialog" title="Invalid input" @close="confirmError">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>Please check all inputs, if they are with text in them</p>
    </template>
    <template #actions>
      <BaseButton @click="confirmError">Okay</BaseButton>
    </template>
  </BaseDialog>

  <BaseCard>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" v-model="title" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          rows="3"
          type="text"
          id="description"
          name="description"
          v-model="description"
        />
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" v-model="link" />
      </div>

      <div>
        <BaseButton type="submit" @click.prevent="handleSubmit"
          >Add resource</BaseButton
        >
      </div>
    </form>
  </BaseCard>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      link: '',
      showDialog: false
    };
  },

  methods: {
    handleSubmit() {
      if (
        this.title.trim() === '' ||
        this.description.trim() === '' ||
        this.link.trim() === ''
      ) {
        this.showDialog = true;
        return;
      }

      this.addResource(this.title, this.description, this.link);
    },

    confirmError() {
      this.showDialog = false;
    }
  },

  inject: ['addResource']
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
