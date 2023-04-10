// Создаём приложение Vue
const app = Vue.createApp({})

// Определяем новый глобальный компонент с именем button-counter
app.component('portfolio-item', {
  data() {
    return {
    }
  },
  template: `
            <div class="portfolio-col" data-cat="one-page">
              <div class="portfolio__item" data-modal="#modal_project_manycam-nv">
                <div class="portfolio__image portfolio__image_new-manycam"></div>
                <div class="portfolio__content">
                  <div class="portfolio__cat">Category: One page</div>
                  <div class="portfolio__title">
                    New version ManyCam
                    <time class="portfolio__date" datetime="2022-01-01 20:00">2022</time>
                  </div>
                </div>
              </div>
            </div>
            `
});

app.mount('#works')