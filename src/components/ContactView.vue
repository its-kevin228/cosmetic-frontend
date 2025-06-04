<template>
    <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 md:px-8">
        <h1 class="text-4xl md:text-5xl font-black mb-8 text-gray-800">Contactez-nous</h1>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <!-- Formulaire de contact -->
            <div>
                <form @submit.prevent="submitForm" class="space-y-6">
                    <div>
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-1">Nom</label>
                        <input type="text" id="name" v-model="form.name"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                            required>
                    </div>

                    <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" v-model="form.email"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                            required>
                    </div>

                    <div>
                        <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                        <select id="subject" v-model="form.subject"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                            required>
                            <option value="" disabled>Sélectionnez un sujet</option>
                            <option value="question">Question sur un produit</option>
                            <option value="commande">Question sur une commande</option>
                            <option value="partenariat">Proposition de partenariat</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" v-model="form.message" rows="5"
                            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-300 focus:border-orange-300"
                            required></textarea>
                    </div>

                    <div>
                        <button type="submit"
                            class="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 hover:bg-orange-400 transition duration-300 font-semibold"
                            :disabled="isSubmitting">
                            {{ isSubmitting ? 'Envoi en cours...' : 'Envoyer le message' }}
                        </button>
                    </div>

                    <div v-if="formSubmitted" class="p-4 bg-green-100 text-green-800 rounded-md">
                        Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
                    </div>
                </form>
            </div>

            <!-- Informations de contact -->
            <div class="bg-gray-50 p-8 rounded-xl">
                <h2 class="text-2xl font-bold mb-6 text-gray-800">Nos coordonnées</h2>

                <div class="space-y-6">
                    <div class="flex items-start">
                        <div class="bg-orange-100 p-3 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-1">Adresse</h3>
                            <p class="text-gray-600">15 Rue Avenue<br>Lomé, Togo</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="bg-orange-100 p-3 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-1">Téléphone</h3>
                            <p class="text-gray-600">+228 93 15 88 01</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="bg-orange-100 p-3 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-1">Email</h3>
                            <p class="text-gray-600">contact@cosmetics.com</p>
                        </div>
                    </div>

                    <div class="flex items-start">
                        <div class="bg-orange-100 p-3 rounded-full mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-500" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <h3 class="text-lg font-medium mb-1">Horaires</h3>
                            <p class="text-gray-600">Lun - Ven: 9h - 18h<br>Sam: 10h - 16h<br>Dim: Fermé</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

function submitForm() {
    isSubmitting.value = true;

    // Simuler un appel d'API
    setTimeout(() => {
        // Réinitialiser le formulaire
        form.name = '';
        form.email = '';
        form.subject = '';
        form.message = '';

        isSubmitting.value = false;
        formSubmitted.value = true;

        // Masquer le message de succès après 5 secondes
        setTimeout(() => {
            formSubmitted.value = false;
        }, 5000);
    }, 1500);
}
</script>