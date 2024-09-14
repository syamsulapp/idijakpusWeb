<template>
  <section
    :class="`contact section-padding pt-${
      styleType === '4' ? '0' : '50'
    } style-6`"
  >
    <template v-if="styleType === '5'">
      <div class="section-head text-center mb-100 style-5">
        <h2 class="mb-20">
          {{ "Hubungi" }}
          <span>{{ "Kami" }}</span>
        </h2>
        <b
          ><h5>
            {{ "Kantor Pusat :" }}
          </h5></b
        >
        <br />
        <h4 class="fw-normal mb-10 color-000">{{ contactInfoData.address }}</h4>
      </div>
      <div class="text-center mb-100">
        <h2 class="ltspc-20 text-uppercase fs-1 lh-1 mb-50 mt-30 color-blue5">
          {{ contactInfoData.phone }}
        </h2>
        <h4 class="fw-normal mb-20 color-000">
          {{ contactInfoData.email }}<br /><a
            href="mailto:simfonicare@idijakpus.or.id"
            >{{ "simfonicare@idijakpus.or.id" }}</a
          >
        </h4>
      </div>
    </template>
    <div class="container">
      <div class="content">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <form class="form" method="post" @submit="handlerSubmitContact">
              <p class="text-center text-danger fs-12px mb-30">
                {{ this.handlerMessageErrorForms }}:
              </p>
              <p
                class="text-center text-danger fs-12px mb-15"
                v-for="error in errors"
              >
                {{ error.message }}
              </p>
              <br />
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      :placeholder="'Masukan Email'"
                      v-model="formContact.contact_email"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group mb-20">
                    <input
                      type="subject"
                      name="subject"
                      class="form-control"
                      :placeholder="'Masukan Subject Pesan *'"
                      v-model="formContact.contact_subject"
                    />
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <textarea
                      rows="10"
                      name="message"
                      class="form-control"
                      :placeholder="'tulis isi pesannya?'"
                      v-model="formContact.contact_content"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 text-center">
                  <div class="form-check d-inline-flex mt-30 mb-30"></div>
                </div>
                <div class="col-lg-12 text-center">
                  <input
                    type="submit"
                    :value="rtl ? 'ارسل طلبك' : 'Kirim'"
                    :class="`btn rounded-pill ${
                      styleType === '4'
                        ? 'bg-blue4 text-white fs-12px'
                        : 'blue5-3Dbutn hover-blue2 sm-butn'
                    } fw-bold text-light`"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contactInfo from "../../../data/Contact/form.json";
import contactInfoRTL from "../../../data/Contact/form-rtl.json";
import apis from "../../api";

export default {
  props: ["rtl", "styleType"],
  computed: {
    contactInfoData() {
      return this.rtl ? contactInfoRTL : contactInfo;
    },
    handlerMessageErrorForms() {
      return this.contact.data.message;
    },
  },
  data() {
    return {
      formContact: {
        contact_email: "",
        contact_subject: "",
        contact_content: "",
      },
      contact: {
        isLoading: false,
        data: {},
      },
      errors: [],
    };
  },
  methods: {
    handleFormOptionChange(e) {
      this.formContact.option = e.target.value;
    },

    async handlerSubmitContact(e) {
      e.preventDefault();
      //consume api with async methods
      try {
        this.contact.isLoading = true;
        const { data } = await apis.contact.submit(this.formContact);
        this.contact.data = data;
        alert("terimakasih telah menghubungi kami");
      } catch (error) {
        console.log(error.response.data);
        this.contact.data = error.response.data;
        this.errors = error.response.data.errors;
        this.errors.forEach((i) => {
          // loop all error validation present to alert pop up
          alert(i["message"]); //can use i.message atau i['message']
        });
      } finally {
        // finally can run after do after our state success or error
        this.contact.isLoading = false;
      }
    },
  },
};
</script>
