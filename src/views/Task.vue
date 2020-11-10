<template>
  <div class="container mt-5">
    <h1>Desarrollador por: {{myName}}</h1>
    <div class="mt-5 columns is-desktop">
      <div class="column mx-5">
        <b-field label="Tareas">
          <input v-model="newTask.title" placeholder="Nombre" class="input" />
        </b-field>
        <b-field>
          <input type="number" v-model="newTask.time" placeholder="Horas" class="input" />
        </b-field>
        <b-button @click="addTask" type="is-primary">Agregar</b-button>
      </div>
      <div class="column mx-5">
        <ol>
          <li v-for="task in tasks" :key="task.id">
            {{task.title}} | {{task.time}}

          </li>
        </ol>
        <br>
        <h3>Total Horas:  {{ totalTime }}</h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Task',
  data() {
    return {
      myName: 'Carlos Córdova',
      tasks:[],
      newTask: {
        title: '',
        time: 0
      }
    }
  },
  // Local Storage - almacenar variables en las cookies
  created(){
    this.tasks = JSON.parse(localStorage.getItem('tasks'))||[];
  },
  computed:{
    totalTime () {
      let totalTime = 0;
      for (let index = 0; index < this.tasks.length; index++) {
        totalTime += Number(this.tasks[index].time);
      }
      return totalTime;
    }
  },
  methods: {
    addTask(){
      if(!this.newTask.title || !this.newTask.time){
        return;
      }else{
        this.tasks.push({title: this.newTask.title, time: this.newTask.time});
        
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
        
        this.newTask.title = "";
        this.newTask.time = 0;
      }
    },
    cancel(){
      this.newTask.title = '';
      this.newTask.time = 0;
    },
    removeTask(index) {
      this.tasks.splice(index, 1)
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
  }
}
</script>
