<template>
    <general-layout>
        <banner src="https://miro.medium.com/max/1600/1*BT6XcpcRF_ZJeAfXlefHBg.gif">
            <h1>AETHER</h1>
            <span>It's time to connect! AETHER, a new way of connecting with friends!</span>
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
                <outline-button @click="this.$refs.LoginModal.show();" class="flex ex-large">LOGIN</outline-button>

                <primary-button @click="this.$refs.RegisterModal.show();" class="flex ex-large">REGISTER</primary-button>
            </div>
        </general-content-block>
    </general-layout>

    <modal ref="LoginModal">
        <div class="header">
            <span>LOGIN</span>
        </div>

        <div class="body">
            <form-wrapper>
                <div class="body">
                    <form-input label="USERNAME OR EMAIL ADDRESS" type="text" />

                    <form-input label="PASSWORD" type="password" />
                </div>
            </form-wrapper>
        </div>

        <div class="footer">
            <text-button @click="$refs.LoginModal.close();">CANCEL</text-button>
            <primary-button>BAN</primary-button>
        </div>
    </modal>

    <modal ref="RegisterModal">
        <div class="header">
            <span>REGISTER</span>
        </div>

        <div class="body">
            <span>This website is not yet ready for use!This website is not yet ready for use!This website is not yet ready for use!This website is not yet ready for use!This website is not yet ready for use!</span>
        </div>

        <div class="footer">
            <text-button @click="$refs.RegisterModal.close();">CANCEL</text-button>
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
    import FormWrapper from "../components/FormWrapper.vue";
    import FormInput from "../components/FormInput.vue";

    export default {
        components: {
            GeneralLayout,
            OutlineButton,
            PrimaryButton,
            Banner,
            GeneralContentBlock,
            Modal,
            TextButton,
            FormWrapper,
            FormInput
        }
    }
</script>