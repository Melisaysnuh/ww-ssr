
<template>
  <div id="signup">
    <section class="register" v-if="!hasSeenCongrats">
      <h2>Sign up for a new account</h2>
      <div class="register-stepper">
        <div
          class="step"
          :class="{ 'step-active': step === 1, 'step-done': step > 1 }"
        >
          <span class="step-number">1</span>
        </div>
        <div
          class="step"
          :class="{ 'step-active': step === 2, 'step-done': step > 2 }"
        >
          <span class="step-number">2</span>
        </div>
        <div
          class="step"
          :class="{ 'step-active': step === 3, 'step-done': step > 3 }"
        >
          <span class="step-number">3</span>
        </div>
      </div>

      <transition name="slide-fade">
        <section v-show="step === 1">
          <form class="form" method="post" action="#" @submit.prevent="next">
            <div class="form-group flex flex-col">
              <input
                type="text"
                v-model="customer.firstname"
                autocomplete="customer.firstname"
                placeholder="First name"
                required
              />
              <input
                type="text"
                v-model="customer.lastname"
                autocomplete="customer.lastname"
                placeholder="Last name"
                required
              />
              <input
                type="email"
                v-model="customer.email"
                autocomplete="customer.eMail"
                placeholder="Email"
                required
              />
            </div>

            <div class="form-group"></div>
            <div
              class="cta"
              data-style="see-through"
              data-alignment="right"
              data-text-color="custom"
            >
              <p class="cta-color">
                <span class="link_wrap">
                  <input type="submit" value="Next" class="link_text" />
                  <span></span>
                </span>
              </p>
            </div>
          </form>
        </section>
      </transition>
      <transition name="slide-fade">
        <section v-show="step === 2">
          <form class="form" method="post" action="#" @submit.prevent="next">
            <div class="form-group flex flex-col">
              <h3>What type of news are you interested in?</h3>
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  value="languages"
                  v-model="customer.preferences"
                />
                Notify me about new languages
              </label>

              <label class="checkbox-label">
                <input
                  type="checkbox"
                  value="features"

                  v-model="customer.preferences"
                />
                Notify me about new features
              </label>

              <label class="checkbox-label">
                <input
                  type="checkbox"
                  value="offers"
                  v-model="customer.preferences"
                />
                Notify me about exclusive offers
              </label>
            </div>

            <div class="form-group cta-step">
              <div class="cta prev">
                <p class="cta-color">
                  <span class="link_wrap">
                    <a class="link_text" href="#" @click.prevent="prev()"
                      ><span class="arrow-prev"></span>Previous
                    </a>
                  </span>
                </p>
              </div>
              <div class="cta">
                <p class="cta-color">
                  <span class="text"></span>
                  <span class="link_wrap">
                    <input
                      type="submit"
                      value="Next"
                      class="link_text"
                      v-if="customer.preferences.includes('languages')"
                    />

                    <input type="submit" value="Create my account" v-else />
                  </span>
                </p>
              </div>
            </div>
          </form>
        </section>
      </transition>
      <transition name="slide-fade">
        <section v-show="step === 3">
          <form class="form" action="#" @submit.prevent="customerRegister">
            <div class="form-group flex flex-col"><h3>Which languages are you interested in?</h3>
              <label class="checkbox-label"
                >
                <input
                  type="checkbox"
                  value="spanish"
                  v-model="customer.languages"
                />
                Spanish
              </label>

              <label class="checkbox-label">
                <input
                  type="checkbox"
                  value="german"
                  v-model="customer.languages"
                />
                German
              </label>
            </div>

            <div class="form-group cta-step">
              <div class="cta prev">
                <p class="cta-color">
                  <span class="link_wrap">
                    <a class="link_text" href="#" @click.prevent="prev()"
                      ><span class="arrow-prev"></span>Previous
                    </a>
                  </span>
                </p>
              </div>
            </div>
            <div class="register-btn">
              <input type="submit" value="Create my account" />
            </div>
          </form>
        </section>
      </transition>
    </section>
    <section class="congrats register" v-if="hasSeenCongrats">
      <div class="register-icon">
        <img
          class="register-icon-item"
          src="../public/icon.svg"
          alt="web logo"
        />
      </div>
      <h2 class="congrats-title">Thank you !</h2>
      <p class="congrats-subtitle text-black">
        Stay tuned for more!
      </p>
    </section>
  </div>
</template>

<script>
import {submitAPI} from '../services/submitAPI.js';

export default {
  name: 'Signup',
  emits: ['close-signup'],
  data: () => {
    return {
      steps: {},
      step: 1,
      customer: {
        firstname: '',
        lastname: '',
        email: '',
        preferences: [],
        languages: [],
      },
      hasSeenCongrats: false,
      tempCustomer: {
        firstname: '',
        lastname: '',
        email: '',
        preferences: [],
        languages: [],
      },
    };
  },
  methods: {
    async customerRegister(customer) {
      const resp = await submitAPI(customer);
      console.log('resp is ', resp)
      if (resp.status===201)
      {this.hasSeenCongrats = true};
    },

    prev() {
      this.step--;
    },

    next() {
      if (this.step === 2 && !this.customer.preferences.includes('languages')) {
        this.customerRegister(this.customer);
      }
      else {
        this.step++;
      }

    },


  },
};
</script>
