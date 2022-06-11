<template>
    <!--div class="content">
        <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
        <b-collapse id="collapse-1" class="mt-2">
            <b-card>
                <b-button size="sm">Toggle Inner Collapse</b-button>
                <b-button size="sm">Toggle Inner Collapse</b-button>
                <b-button size="sm">Toggle Inner Collapse</b-button>
                <b-button size="sm">Toggle Inner Collapse</b-button>
            </b-card>
        </b-collapse>
    </div-->
    <b-navbar toggleable type="dark" variant="dark">
        <b-navbar-brand class="navtitle" href="#">{{ $route.name }}</b-navbar-brand>
        <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
        </b-navbar-toggle>

        <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-item :to="{ name: 'Shit about ZorbSMP'}">Shit about ZorbSMP</b-nav-item>
            <b-nav-item :to="{ name: 'Shit about Phase 5'}">Shit about Phase 5</b-nav-item>
            <b-nav-item :to="{ name: 'Gallery', params: { phase: '5' }}">Gallery Phase 5</b-nav-item>
            <b-nav-item :to="{ name: 'Raccoon'}">Raccoon</b-nav-item>
            <b-nav-item :to="{ name: 'Shit about Zorb'}">Shit about Zorb</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
    export default {
        name: "BurgerComponent",
    }
</script>

<style scoped>

.navtitle {
    text-transform: capitalize;
}

</style>