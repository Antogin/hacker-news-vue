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
                    By
                    <a href="#">@{{ item.author }}</a>
                    {{ item.createdAt }} ago &nbsp;
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
      :currentPage="currentPage"
      :total="nbPages"
      :callback="getTop"
    />
  </section>
</template>

<script>
import { getItems } from "./../api/algolia";
import Pagination from "./../components/Pagination";
import formatDistance from "date-fns/formatDistance";
import { ref, onMounted } from "vue";

export default {
  name: "Home",
  components: {
    Pagination: Pagination
  },
  setup() {
    let items = ref([]);
    let currentPage = ref(0);
    let nbPages = ref(0);

    const getItemsCallBack = (type, page) =>
      getItems(type, page)
        .then(data => {
          items.value = data.hits.map(hit => {
            return {
              ...hit,
              createdAt: formatDistance(new Date(), new Date(hit.created_at))
            };
          });

          nbPages = data.nbPages;
          currentPage = page;
        })
        .catch();

    onMounted(getItemsCallBack("show_hn", 0));

    return {
      items,
      currentPage,
      nbPages,
      getItemsCallBack
    };
  }
};
</script>
