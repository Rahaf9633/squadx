<template>
  <section class="faq-area">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <div class="faq__content-wrap">
            <div class="section__title text-start">
              <span class="sub-title tg__animate-text">Get your answer</span>
              <h3 class="title">Frequently asked questions</h3>
              <p>
                a list of questions that people often ask
              </p>
            </div>
            <div class="faq__wrapper">
              <div class="accordion" id="accordionExample">
                <div
                  v-for="(item, i) in faq_data"
                  :key="i"
                  class="accordion-item"
                  @click="handleMouseOver(i)"
                >
                  <h2 class="accordion-header" :id="`heading-${item.id}`">
                    <button
                      :class="`accordion-button ${item.active ? '' : 'collapsed'}`"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#collapse-${item.id}`"
                      :aria-expanded="item.active ? 'true' : 'false'"
                      :aria-controls="`collapse-${item.id}`"
                    >
                      <span class="count">{{ i + 1 }}</span> {{ item.title }}
                    </button>
                  </h2>
                  <div
                    :id="`collapse-${item.id}`"
                    :class="`accordion-collapse collapse ${item.active ? 'show' : ''}`"
                    :aria-labelledby="`heading-${item.id}`"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      {{ item.desc }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="services__images">
            <div
              v-for="(s, i) in service_images"
              :key="i"
              :class="`services__images-item ${activeIndex === i ? 'active' : ''}`"
            >
              <img :src="s" alt="img" />
              <nuxt-link to="https://discord.gg/Szr3GBhjBD" class="services__link">
                <i class="flaticon-next"></i>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const activeIndex = ref<number | null>(0);

const handleMouseOver = (index: number) => {
  activeIndex.value = index;
};

// service images
const service_images: string[] = [
  "/images/others/services_img01.jpg",
  "/images/others/services_img02.jpg",
  "/images/others/services_img03.jpg",
  "/images/others/services_img04.jpg",
  "/images/others/services_img01.jpg",
  "/images/others/services_img02.jpg",
  "/images/others/services_img03.jpg",
];
// faq data type
type IFaq = {
  id: string;
  active?: boolean;
  title: string;
  desc: string;
};
// faq data
const faq_data: IFaq[] = [
  {
    id: "one",
    active: true,
    title: " What are the steps to purchasing a ticket?",
    desc: "Go to Tickets and Click on Buy Ticket Now Button, choose the amount of tickets that you want but make sure to check out the suitable play time for you and your team",
  },
  {
    id: "two",
    title: " How do I get a FREE Ticket?",
    desc: "by participating in 😳︱yala-n3d channel in the Discord Server",
  },
  {
    id: "three",
    title: "What should I do if I encounter issues during the ticket purchase?",
    desc: "Contact one of the Managers in the Discord Server 📞d3m-support channel or send us message Contact@squadX.org",
  },
  {
    id: "four",
    title: " What are the payment methods?",
    desc: "Credit/Debit Card, and Cryptocurrencies",
  },
  {
    id: "five",
    title: "Can I buy multiple tickets in one transaction?",
    desc: "Yes, for most events",
  },
  {
    id: "six",
    title: "Can I get a refund if all rooms are busy?",
    desc: "It varies by situation and payment process",
  },
  {
    id: "seven",
    title: "Do you have a Blueprint?",
    desc: "Yes, there is so much to add beginning from Launchpad the Q1, and ending with the workshops.",
  },
];
</script>
