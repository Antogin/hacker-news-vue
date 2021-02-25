<template>
  <article class="media">
    <figure class="media-left">
      <p class="image is-64x64">
        <button class="button is-small" v-on:click="collapse = !collapse">
          {{ collapse ? "expand" : "collapse" }}
        </button>
      </p>
    </figure>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>{{ comment.author }}</strong>
          <br />
          {{ strip(comment.text) }}
          <br />
          <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
        </p>
      </div>

      <div v-if="!collapse">
        <Comment
          class="media"
          :comment="child"
          v-for="child in comment.children"
          :key="child.id"
        />
      </div>
      <!-- <figure class="media-left">
          <p class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Sean Brown</strong>
              <br />
              Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque
              habitant morbi tristique senectus et netus et malesuada fames ac
              turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis
              leo feugiat.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </div>

          <article class="media">
            Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu
            lorem cursus ullamcorper sit amet nec massa.
          </article>

          <article class="media">
            Morbi vitae diam et purus tincidunt porttitor vel vitae augue.
            Praesent malesuada metus sed pharetra euismod. Cras tellus odio,
            tincidunt iaculis diam non, porta aliquet tortor.
          </article>
        </div>
      </article>

      <article class="media">
        <figure class="media-left">
          <p class="image is-48x48">
            <img src="https://bulma.io/images/placeholders/96x96.png" />
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Kayli Eunice </strong>
              <br />
              Sed convallis scelerisque mauris, non pulvinar nunc mattis vel.
              Maecenas varius felis sit amet magna vestibulum euismod malesuada
              cursus libero. Vestibulum ante ipsum primis in faucibus orci
              luctus et ultrices posuere cubilia Curae; Phasellus lacinia non
              nisl id feugiat.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
            </p>
          </div>
        </div>
      </article> -->
    </div>
  </article>
</template>

<script>
export default {
  name: "Comment",

  props: ["comment"],
  data: function() {
    return {
      collapse: false
    };
  },
  methods: {
    strip: function(value) {
      const div = document.createElement("div");
      div.innerHTML = value;
      const text = div.textContent || div.innerText || "";
      return text;
    }
  }
};
</script>
