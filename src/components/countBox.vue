<template>
    <div class="count-box">
      <button  class="minus" @click="add(-1)">-</button>
      <input :value="value" class="inp" type="text">
      <button class="add" @click="add(+1)">+</button>
    </div>
  </template>

<script>

export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {

    }
  },
  methods: {
    add (k) {
      if (k < 0 & this.count <= 0) {
        return
      }
      this.$emit('input', this.value + k)
    }
  }
}
</script>

  <style lang="less" scoped>
  .count-box {
    width: 110px;
    display: flex;
    .add, .minus {
      width: 30px;
      height: 30px;
      outline: none;
      border: none;
      background-color: #efefef;
    }
    .inp {
      width: 40px;
      height: 30px;
      outline: none;
      border: none;
      margin: 0 5px;
      background-color: #efefef;
      text-align: center;
    }
  }
  </style>
