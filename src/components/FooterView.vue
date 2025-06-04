<template>
    <footer class="bg-transparent py-8 text-center">
        <div class="container mx-auto px-4">
            <!-- Logo minimaliste -->
            <div class="mb-6">
                <span class="text-2xl font-light text-gray-700">cosmé</span>
                <span class="text-2xl font-bold text-orange-500">tics</span>
            </div>

            <!-- Réseaux sociaux avec effets avancés -->
            <div class="card">
                <ul>
                    <!-- TikTok -->
                    <li class="iso-pro">
                        <span></span>
                        <span></span>
                        <span></span>
                        <a href="#">
                            <i class="fab fa-tiktok svg"></i>
                        </a>
                        <div class="text">TikTok</div>
                    </li>

                    <!-- Facebook -->
                    <li class="iso-pro">
                        <span></span>
                        <span></span>
                        <span></span>
                        <a href="#">
                            <i class="fab fa-facebook-f svg"></i>
                        </a>
                        <div class="text">Facebook</div>
                    </li>

                    <!-- WhatsApp -->
                    <li class="iso-pro">
                        <span></span>
                        <span></span>
                        <span></span>
                        <a href="#">
                            <i class="fab fa-whatsapp svg"></i>
                        </a>
                        <div class="text">WhatsApp</div>
                    </li>
                </ul>
            </div>

            <!-- Ligne séparatrice subtile -->
            <div class="h-px bg-gray-200 w-24 mx-auto mb-6"></div>

            <!-- Liens minimaux -->
            <div class="flex justify-center space-x-6 mb-6">
                <a href="#"
                    class="text-gray-500 hover:text-orange-500 text-xs uppercase tracking-wider transition-colors duration-200">
                    Confidentialité
                </a>
                <a href="#"
                    class="text-gray-500 hover:text-orange-500 text-xs uppercase tracking-wider transition-colors duration-200">
                    Conditions
                </a>
                <a href="#"
                    class="text-gray-500 hover:text-orange-500 text-xs uppercase tracking-wider transition-colors duration-200">
                    Contact
                </a>
            </div>

            <!-- Copyright discret -->
            <p class="text-gray-400 text-xs">
                &copy; {{ new Date().getFullYear() }} cosmétics. Tous droits réservés.
            </p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'EnhancedSocialFooter'
}
</script>

<style scoped>
.card {
    max-width: fit-content;
    margin: 0 auto 2rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    gap: 1rem;
    backdrop-filter: blur(15px);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.192),
        inset 0 0 5px rgba(255, 255, 255, 0.274), 0 5px 5px rgba(0, 0, 0, 0.164);
    transition: 0.5s;
    background: rgba(255, 255, 255, 0.05);
}

.card:hover {
    animation: ease-out 5s;
    background: rgba(173, 173, 173, 0.05);
}

.card ul {
    padding: 1rem;
    display: flex;
    list-style: none;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
}

.card ul li {
    cursor: pointer;
}

.svg {
    transition: all 0.3s;
    padding: 1rem;
    height: 60px;
    width: 60px;
    border-radius: 100%;
    color: rgb(255, 174, 0);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
        inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
    display: flex;
    align-items: center;
    justify-content: center;
}

.text {
    opacity: 0;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.3s;
    color: rgb(255, 174, 0);
    background-color: rgba(255, 255, 255, 0.3);
    position: absolute;
    z-index: 9999;
    box-shadow: -5px 0 1px rgba(153, 153, 153, 0.2),
        -10px 0 1px rgba(153, 153, 153, 0.2),
        inset 0 0 20px rgba(255, 255, 255, 0.3),
        inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.082);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.iso-pro {
    transition: 0.5s;
    position: relative;
}

.iso-pro:hover a>.svg {
    transform: translate(15px, -15px);
    border-radius: 100%;
}

.iso-pro:hover .text {
    opacity: 1;
    transform: translate(25px, -2px) skew(-5deg);
}

.iso-pro:hover .svg {
    transform: translate(5px, -5px);
}

.iso-pro span {
    opacity: 0;
    position: absolute;
    color: rgb(255, 174, 0);
    border-color: rgb(255, 174, 0);
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.3),
        inset 0 0 5px rgba(255, 255, 255, 0.5), 0 5px 5px rgba(0, 0, 0, 0.164);
    border-radius: 50%;
    transition: all 0.3s;
    height: 60px;
    width: 60px;
}

.iso-pro:hover span {
    opacity: 1;
}

.iso-pro:hover span:nth-child(1) {
    opacity: 0.2;
}

.iso-pro:hover span:nth-child(2) {
    opacity: 0.4;
    transform: translate(5px, -5px);
}

.iso-pro:hover span:nth-child(3) {
    opacity: 0.6;
    transform: translate(10px, -10px);
}

/* Adaptations des couleurs des icônes */
.fa-tiktok:hover {
    color: #000000;
}

.fa-facebook-f:hover {
    color: #1877f2;
}

.fa-whatsapp:hover {
    color: #25D366;
}
</style>