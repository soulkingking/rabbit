<template>
  <div>
    <!-- <el-row>
            <el-col v-for="i in 1000" :key="i">{{i}}</el-col>
    </el-row>-->
    {{ msg }}
  </div>
</template>

<script>
import { getLine } from "@/api/line";
export default {
  name: "RecTemplate",
  data() {
    return {
      msg: "推荐看板"
    };
  },
  computed: {},
  methods: {
    async getLineData() {
      let res = await getLine();
      console.log(res);
    }
  },
  created() {
    this.getLineData();
  }
};
</script>
