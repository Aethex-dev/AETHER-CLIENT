<template>
    <general-layout>
        <banner src="https://www.windowscentral.com/sites/wpcentral.com/files/styles/large/public/field/image/2021/02/guilded-egg-nation-2.jpg">
            <h1>AETHER</h1>
            <span>It's time to drop Discord and get Aether!</span>
        </banner>

        <general-content-block>
            <div class="row center">
                <h2>Welcome to Aether</h2>
            </div>

            <p>What's Aether? Aether is the next adition to voice and chat platform featuring a fully fledged forums, event manager, front page creator and MORE!</p>

            <div class="row center">
                <h2>Get Started!</h2>
            </div>

            <div class="row center">
                <outline-button class="flex ex-large">LOGIN</outline-button>

                <primary-button class="flex ex-large">REGISTER</primary-button>
            </div>
        </general-content-block>
    </general-layout>

    <modal ref="Modal">
        <div class="header">
            <span>NOTICE</span>
        </div>

        <div class="body">
            <span>This website is not yet ready for use!</span>
        </div>

        <div class="footer">
            <text-button @click="$refs.Modal.close();">CANCEL</text-button>
            <primary-button>BAN</primary-button>
        </div>
    </modal>
</template>

<script>
    import GeneralLayout from "../layouts/GeneralLayout.vue";
    import OutlineButton from "../components/OutlineButton.vue";
    import PrimaryButton from "../components/PrimaryButton.vue";
    import TextButton from "../components/TextButton.vue";
    import Banner from "../components/Banner.vue";
    import GeneralContentBlock from "../components/GeneralContentBlock.vue";
    import Modal from "../components/Modal.vue";

    export default {
        components: {
            GeneralLayout,
            OutlineButton,
            PrimaryButton,
            Banner,
            GeneralContentBlock,
            Modal,
            TextButton
        }
    }
</script>