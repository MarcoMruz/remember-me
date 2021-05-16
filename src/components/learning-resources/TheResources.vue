<template>
  <BaseCard>
    <BaseButton :mode="activeStored" @click="setSelectedTab('StoredResources')"
      >Stored resources</BaseButton
    >
    <BaseButton :mode="activeAddResource" @click="setSelectedTab('AddResource')"
      >Add resource</BaseButton
    >
  </BaseCard>

  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
  components: {
    StoredResources,
    AddResource
  },

  computed: {
    activeStored() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },

    activeAddResource() {
      return this.selectedTab === 'AddResource' ? null : 'flat';
    }
  },

  data() {
    return {
      selectedTab: 'StoredResources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official guide',
          description: 'The official VueJS documentation',
          link: 'https://vuejs.org'
        },

        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google...',
          link: 'https://google.org'
        }
      ]
    };
  },

  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.removeResource
    };
  },

  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },

    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link
      };

      this.storedResources.push(newResource);
      this.selectedTab = 'StoredResources';
    },

    removeResource(id) {
      const index = this.storedResources.findIndex(res => res.id === id);

      this.storedResources.splice(index, 1);
    }
  }
};
</script>
