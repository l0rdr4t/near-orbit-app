<template>
    <div>
        It wasn't until I was in my late-30s before being diagnosed with ADHD.
    </div>
    <div>
        <h3>The app aims to give you the following superpowers:</h3>
        <ul style="list-style-type:none;">
            <li>🎉 deal with everyday distractions</li>
            <li>✅ keep track of the things you have to do</li>
            <li>👽 help you make real progress on your personal projects</li>
        </ul>
    </div>
    <div>
        I started building nearOrbit to help me finish what I start. I hope it might help you too 😊
    </div>
    <div>
        <button @click="aboutButtonClick()">🦘 Learn more</button>
    </div>
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