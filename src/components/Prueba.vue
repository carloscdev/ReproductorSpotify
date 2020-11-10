<template>
  <div class="hello">   
    <p v-if="showValue">Platzi Music</p>
    <p v-else>Es Falso</p>
    <ul>
      <li v-for="item in items" :key="item.id">{{item}}</li>
    </ul>
    Mi nombre es : {{name}} {{lastName}} - {{fullName}}<br>
    <input type="text" v-model="name"> <br>
    <input type="text" v-model="lastName"> <br>
    <a :href="url" target="_blank" rel="noreferrer">Mi Twitter</a>
    <hr>
    {{formattedName}}
    <button @click="format">Formatear</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      showValue: true,
      items: [1, 2, 3],
      name: 'Carlos',
      lastName: 'Córdova',
      url: 'https://twitter.com/carloscdev',
      formattedName: ''
    }
  },
  computed:{
    fullName() {
      return `${this.name} - ${this.lastName}`
    }
  },
  watch: {
    name(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },
  props: {
    msg: String
  },
  methods: {
    format() {
      this.formattedName = this.name.split(' ').join('-').toUpperCase()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
