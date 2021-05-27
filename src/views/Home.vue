<template>
    <general-layout>
        <banner src="https://img.wallpapersafari.com/desktop/1680/1050/84/58/5dyBPk.jpg">
            <h1>AETHER</h1>
            <span>Good bye Discord, Hello AETHER</span>
        </banner>
    </general-layout>
</template>

<script>
    import GeneralLayout from "../layouts/GeneralLayout.vue";
    import OutlineButton from "../components/OutlineButton.vue";
    import Banner from "../components/Banner.vue";

    export default {
        components: {
            GeneralLayout,
            OutlineButton,
            Banner
        }
    }
</script>