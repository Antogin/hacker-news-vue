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

    <Pagination
      :currentPage="pages.current"
      :total="pages.nbPages"
      :callback="getTop"
    />
  </section>
</template>

<script>
import { getTop } from "./../api/algolia";
import Pagination from "./../components/Pagination";
export default {
  name: "Home",
  components: {
    Pagination: Pagination
  },
  data: function() {
    return {
      items: [],
      pages: {
        current: 0,
        nbPages: 0
      }
    };
  },
  methods: {
    getTop: function(page) {
      getTop(page)
        .then(data => {
          this.items = data.hits;
          this.pages = {
            nbPages: data.nbPages,
            current: page
          };
          console.log(data);
        })
        .catch();
    }
  },
  mounted: function() {
    getTop()
      .then(data => {
        this.items = data.hits;
        this.pages = {
          nbPages: data.nbPages,
          current: 0
        };
        console.log(data);
      })
      .catch();
  }
};
</script>
