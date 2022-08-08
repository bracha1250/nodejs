<template >
  
    <h1>{{ msg }}</h1>
    <div>{{i=!null}}</div>
  <span :title="m">brachi</span>
  <span  v-if="d">cvbnm,</span>
 <ol>
  <li v-for="to in todos" :key="to.id">{{to.t}} </li>
   </ol> 
   <h1 :style="{color:color}"> Hello</h1>
    <button v-on:click="color='blue'">change color</button>
    <form  @submit="s()" action="  ">
    <button>submit</button>
    </form>
<select v-model="select">
  <option v-for="to in todos" :value="to.t" :key="to.id">{{to.t}}</option>
</select>
<span>{{select}}</span>
    <div>
       <input type="text" v-model="m">
    {{m}}
    </div>
   <div>colorlength{{colorlength}}</div>
   <div>{{count}}</div>
  <button @click="c()">add</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  props: ["initcolor"],
  data () {
    return {
     count:this.initcolor?this.initcolor:0,
      i: "wow!!!!!!!!!!!!!!!",
      m:'welcpm',
      d:false,
      select:"A",
      todos:[
        {t:'fghj'},
        {t:'dfdfhjg'},
      ],
       color:"red",
       vd:"d"
    }
   
    },
    methods:{
      c(){
        this.count++
      },
      s(){
        console.log("gfhgj");
      }
    }
    
}
</script>


