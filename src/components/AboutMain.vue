<template>
    <h3>The app aims to give you superpowers</h3>
    <div class="grid">
        <div></div>
        <div>🎉 <br> deal with everyday distractions</div>
        <div>✅ <br> keep track of all the things</div>
        <div>⭐ <br> finish your personal projects</div>
        <div></div>
    </div>
    <br />
    <div class="grid">
        <div>
            <h5>I was in my late-30s before being diagnosed with ADHD. I started building nearOrbit to help me finish what I
                start. I hope it might help you too 😊</h5>
        </div>
    </div>
    <br />
    <button @click="aboutButtonClick()">🦘 Learn more</button>
</template>
  
<script>
export default {
    name: 'AboutMain',
    props: {
        msg: String
    },
    methods: {
        aboutButtonClick() {
            alert("Not implemented.");
        }
    }
}
</script>