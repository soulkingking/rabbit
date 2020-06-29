<template>
  <div>
    <!-- <el-row>
            <el-col v-for="i in 1000" :key="i">{{i}}</el-col>
    </el-row>-->
    {{ msg }}
  </div>
</template>

<script>

export default {
  name: "RecTemplate",
  data() {
    return {
      msg: "推荐看板"
    };
  },
  computed: {},
  methods: {
   
  },
  created() {

  }
};
</script>
