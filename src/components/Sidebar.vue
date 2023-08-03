<template>
    <aside :class="is_expanded && 'is-expanded'">
        <div class="logo">
            <img src="../assets/vue.svg" alt="Vue">
        </div>
        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="ToggleMenu">
                <span class="material-icons">
                    double_arrow
                </span>
            </button>
        </div>
        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-icons">
                    home
                </span>
                <span class="text">Home</span>
            </router-link>
            <router-link class="button" to="/about">
                <span class="material-icons">
                    visibility
                </span>
                <span class="text">About</span>
            </router-link>
            <router-link class="button" to="/team">
                <span class="material-icons">
                    groups
                </span>
                <span class="text">Team</span>
            </router-link>
            <router-link class="button" to="/contact">
                <span class="material-icons">
                    email
                </span>

                <span class="text">Contact</span>
            </router-link>
        </div>
        <div class="flex"></div>
        <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-icons">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';


const is_expanded = ref(localStorage.getItem('is_expanded') === 'true');

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value;
    localStorage.setItem('is_expanded', is_expanded.value)
}
</script>

<style  scoped>
/* transitions */
aside,
.menu-toggle,
h3,
.material-icons,
.text,
.button {
    transition: 0.3s ease-out;
}

aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 2rem);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
    background-color: var(--dark);
    color: var(--light);
}

aside>* {
    margin-bottom: 1rem;
}

.material-icons {
    font-size: 2rem;
    color: var(--light);
}

.logo {
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.is-expanded {
    width: var(--sidebar-width);
}

.is-expanded .menu-toggle-wrap {
    position: relative;
    top: -3rem;
    display: flex;
    justify-content: flex-end;
}

.menu-toggle:hover .material-icons {
    color: var(--primary);
    transform: translateX(.5rem);
}

.is-expanded .menu-toggle {
    transform: rotate(-180deg);
}

h3 {
    color: var(--grey);
    font-size: 0.875rem;
    margin-bottom: .5rem;
    text-transform: uppercase;
}


h3,
.text {
    opacity: 0;
}

.is-expanded h3,
.is-expanded .menu .button .text {
    opacity: 1;
}

.menu {
    margin: 0 -1rem;
}

.button {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: .5rem 1rem;
}

.button .text {
    color: var(--light);
}

.button:hover {
    background-color: var(--dark-alt);
}

.button:hover .text,
.button:hover .material-icons {
    color: var(--primary);
}

.is-expanded .button .material-icons {
    margin-right: 1rem;
}

.router-link-exact-active {
    background-color: var(--dark-alt);
    border-right: 5px solid var(--primary);
}


.router-link-exact-active .material-icons,
.router-link-exact-active .text {
    color: var(--primary);
}

.flex {
    flex: 1 1 0;
}

@media (max-width:768px) {
    aside {
        position: fixed;
        z-index: 99;
    }
}
</style>