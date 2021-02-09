<template>
  <section class="container">
    <div class="columns">
      <div class="column">
        <div class="content">
          <article
            v-for="item in items"
            :key="item.objectID"
            class="post mb-3 box"
          >
            <h4>
              <a :href="item.url" target="_blank">
                {{ item.title }}
              </a>
            </h4>
            <div class="media">
              <div class="media-content">
                <div class="content">
                  <p>
                    <a href="#">@{{ item.author }}</a> 34 minutes ago &nbsp;
                    <span class="tag">
                      <router-link :to="`/item/${item.objectID}`">
                        comments
                      </router-link>
                    </span>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <span class="has-text-grey-light"
                  ><i class="fa fa-comments"></i> {{ item.points }}</span
                >
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getTop } from "./../api/algolia";
export default {
  name: "Home",
  components: {},
  data: function () {
    return {
      items: [],
    };
  },
  mounted: function () {
    getTop()
      .then((d) => d.json())
      .then((data) => {
        this.items = data.hits;
        console.log(data.hits[0]);
      })
      .catch();
  },
};
</script>
