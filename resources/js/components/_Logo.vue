<template>
    <div class="logo">
        <h1>
            <a href="/">
                <img :src="logo" alt="福岡・天神のマツエク＆ネイル"
                     style="width: 110px; height: auto;">
            </a>
        </h1>
    </div>
</template>

<script>
    import logo from '../../../public/storage/logo/logo.png';

    export default {
        data() {
            return {
                logo
            };
        },
    };
</script>
