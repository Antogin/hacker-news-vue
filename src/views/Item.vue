<template>
  <section class="container" v-if="item">
    <div class="columns">
      <div class="column">
        <div class="box content">
          <h2 class="subtitle is-4">{{ item.type }}</h2>
          <h1 class="title">
            <a :href="item.url" target="_blank"> {{ item.title }}</a>
          </h1>
        </div>
        <div class="box content">
          <Comment
            :comment="child"
            v-for="child in item.children"
            :key="child.id"
          />
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { getItem } from "./../api/algolia";
import CommentVue from "./../components/Comment";

export default {
  components: {
    Comment: CommentVue,
  },

  data: function () {
    return {
      item: null,
    };
  },
  mounted: function () {
    getItem(this.$route.params.id)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        this.item = data;
      })
      .catch();
  },
};
</script>