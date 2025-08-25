<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h1 class="fw-bold mb-3 heading">Get In Touch</h1>
      <p class="lead text-white">
        Have a project in mind or just want to chat? I'd love to hear from you.
        Send me a message and I'll respond as soon as possible.
      </p>
    </div>

    <div v-if="alertMessage" class="alert mt-4" :class="alertClass" role="alert">
      {{ alertMessage }}
    </div>

    <div class="row g-5">
      <div class="col-lg-6">
        <base-card class="shadow-sm">
          <h5 class="mb-3">Send a Message</h5>
          <p class="text-white">
            Fill out the form below and I'll get back to you within 24 hours.
          </p>

          <form @submit.prevent="handleSubmit">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                v-model="formData.name"
                class="form-control"
                placeholder="Your full name"
                required
              />
            </div>

            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                class="form-control"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                v-model="formData.message"
                class="form-control"
                rows="5"
                placeholder="Tell me about your project or say hello!"
                required
              ></textarea>
            </div>

            <base-button
              class="btn btn-primary w-100"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </base-button>
          </form>
        </base-card>
      </div>

      <div class="col-lg-6">
        <base-card class="shadow-sm mb-4">
          <h5 class="mb-3">Contact Information</h5>
          <p class="text-white">Feel free to reach out through any of these channels.</p>

          <ul class="list-unstyled">
            <li class="mb-3">
              <i class="bi bi-envelope-fill text-primary me-2"></i>
              <strong>Email:</strong> bogdanvaskan450@gmail.com
            </li>
            <li class="mb-3">
              <i class="bi bi-telephone-fill text-primary me-2"></i>
              <strong>Phone:</strong> +30 6948174809
            </li>
            <li>
              <i class="bi bi-geo-alt-fill text-primary me-2"></i>
              <strong>Location:</strong> Athens, Greece
            </li>
          </ul>
        </base-card>

        <base-card class="shadow-sm">
          <h5 class="mb-3">Let's Work Together</h5>
          <p class="text-white">
            I'm always interested in new opportunities and exciting projects.
            Whether you're a company looking to hire, or you have a project idea,
            let's discuss how we can work together.
          </p>
          <div class="d-flex gap-2">
            <base-button to="/my-cv" link="true" mode="outline">View My CV</base-button>
            <base-button to="https://www.linkedin.com/in/bogdan-vaskan-a2764512b/" link="true">LinkedIn Profile</base-button>
          </div>
        </base-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import emailjs from 'emailjs-com';
const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const isSubmitting = ref(false);
const alertMessage = ref('');
const alertClass = ref('alert-success');

const handleSubmit = async () => {
  isSubmitting.value = true;
  alertMessage.value = '';

  if (!formData.name || !formData.email || !formData.message) {
    alertMessage.value = 'Please fill in all fields.';
    alertClass.value = 'alert-danger';
    isSubmitting.value = false;
    return;
  }

  try {
    const result = await emailjs.send(
      'service_crht4x5',
      'template_43jdm9i',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'trF77iGN4vmBPjA0R'
    );

    alertMessage.value = 'Message Sent! Thank you for your message.';
    alertClass.value = 'alert-success';

    formData.name = '';
    formData.email = '';
    formData.message = '';
  } catch (error) {
    console.error(error);
    alertMessage.value = 'Failed to send message. Please try again later.';
    alertClass.value = 'alert-danger';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
