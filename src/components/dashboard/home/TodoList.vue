<template>
  <div id="tasks-container">
    <div id="signin-options">
      <span :class="['notifications', tasks.length > 0 ? 'blue-ink': 'muted-gray']">
        <fa icon = "bell"/>
        <span id="notifications-counter" v-if="tasks.length != 0">
          {{ tasks.length }}
        </span>
      </span>
      <span id="user-details">
        Tasks
      </span>
      <span class="notifications blue-ink icons" @click="changeIcon">
       <fa icon="plus" v-if="notTakingNotes" />
       <fa icon="minus" v-else />
      </span>
    </div>
    <template v-if="!showSingleTask">
      <template v-if="notTakingNotes && tasks.length == 0">
        <div id="default-note-screen">
          <p class="default-title">Set tasks or reminders</p>
          <p class="muted-gray default-text">
            Do you have any tasks or creative ideas, this tool will be your safe place.
            Click on the plus icon to add new notes.
          </p>
        </div>
      </template>
      <template v-if="!notTakingNotes">
        <div id="note-form">
          <form @submit.prevent="submitTask">
            <div class="input-container">
              <input type="text" v-model="title" placeholder="Title" maxlength="22" id="note-title" required>
              <textarea
                v-model="note" cols="29" rows="5"
                maxlength="80" placeholder="Type here" @input="checkInputLength"></textarea>
              <span class="text-limits">{{ textarea }} / 80</span>
            </div>
            <button class="save-button" type="submit">Save</button>
          </form>
        </div>
      </template>
      <template v-if="notTakingNotes && tasks.length != 0">
        <div class="display-list">
          <div class="task-item" v-for="(task, index) in taskList" :key="index">
            <span :class="['task-initials', task.color]" @click="deleteTask" :id="task._id">
              {{ extractInitials(task.title) }}
            </span>
            <span class="task-details" :id="task._id" @click="displaySingleTask">
              <span class="task-name">{{ capitalizeEachWord(task.title) }}</span>
              <span class="muted-detail">
                {{ sliceString(task.note) }}
              </span>
            </span>
          </div>
        </div>
      </template>
    </template>
    <template v-if="showSingleTask">
      <div class="display-list single-task">
        <span class="single-task-title">{{ capitalizeEachWord(singleTask.title) }}</span>
        <div class="single-task-note">
          {{ singleTask.note }}
        </div>
      </div>
      <button class="close-btn" @click="closeSingleTask">Close</button>
    </template>
  </div>
</template>

<script>
import TaskService from '@/services/task-service';
import FormatText from '@/mixins/format-text';

export default {
  name: 'TodoList',
  created() {
    this.fetchTasks();
  },
  data() {
    return {
      notTakingNotes: true,
      tasks: [],
      colorList: [
        'light-blue',
        'light-red',
        'navy-blue',
        'light-orange',
      ],
      colorIndex: 0,
      textarea: 0,
      title: '',
      note: '',
      showSingleTask: false,
      singleTask: {},
    };
  },
  mixins: [FormatText],
  methods: {
    fetchTasks() {
      TaskService.get()
        .then((response) => {
          this.tasks = response.data;
        });
    },
    formatTaskList(tasks) {
      const data = tasks.map((task, index) => {
        const color = this.addBgColor(index);
        return { ...task, color };
      });
      this.colorIndex = 0;
      return data;
    },
    addBgColor(index) {
      if (index <= 3) {
        const color = this.colorList[this.colorIndex];
        this.colorIndex += 1;
        return color;
      }
      if (index % 4 === 0) {
        this.colorIndex = 0;
      }
      const color = this.colorList[this.colorIndex];
      this.colorIndex += 1;
      return color;
    },
    changeIcon() {
      this.notTakingNotes = !this.notTakingNotes;
      this.showSingleTask = false;
      this.textarea = 0;
    },
    checkInputLength(event) {
      this.textarea = event.target.value.length;
    },
    displaySingleTask(event) {
      const id = event.target.parentNode.id;
      const task = this.tasks.filter((task) => task._id === id)[0];
      this.showSingleTask = true;
      this.singleTask = task;
    },
    closeSingleTask() {
      this.showSingleTask = false;
    },
    deleteTask(event) {
      const srcElement = event.target;
      const id = srcElement.id;
      srcElement.classList.add('delete-task');
      srcElement.textContent = 'X';
      TaskService.delete(id)
        .then((response) => {
          this.tasks = this.tasks.filter((task) => task._id !== response.data._id);
        });
    },
    createTaskObject() {
      const inputData = {
        title: this.title,
        note: this.note,
      };
      return inputData;
    },
    submitTask() {
      const task = this.createTaskObject();
      TaskService.post(task)
        .then((response) => {
          this.notTakingNotes = !this.notTakingNotes;
          this.title = '';
          this.note = '';
          this.tasks.push(response.data);
        });
    },
  },
  computed: {
    taskList() {
      return this.formatTaskList(this.tasks);
    },
  },
};
</script>

<style scoped>
#tasks-container{
  min-height: 100%;
  max-height: 100%;
}
#signin-options{
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.blue-ink{
  color:#04548C;
}
.muted-gray{
  color:#a9a9a9;
}
.notifications {
  width:40px;
  height: 40px;
  border-radius: 5px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: white;
}
.icons:hover{
  cursor: pointer;
}
#notifications-counter{
  position:absolute;
  top:-8px;
  right:-8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  color:white;
  width:25px;
  height: 25px;
  border-radius: 50%;
  background-color: var(--dark-green);
}
#user-details{
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color:rgba(44, 62, 80, 0.8);
}
#default-note-screen{
  width:95%;
  margin-left: auto;
  margin-right: auto;
  margin-top:20px;
}
.default-title{
  font-weight: bold;
  text-align: center;
}
.default-text{
  font-size: 14px;
  text-align: center;
}
#note-form{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.input-container{
  margin-top: 12px;
}
textarea{
  text-align: left;
  border:none;
  background-color: white;
  padding-left: 5px;
  display: block;
}
#note-title{
  border:none;
  width:98%;
  height: 35px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10px;
  padding-left: 5px;
}
.save-button{
  color: white;
  border:none;
  background-color: var(--mono-dark-green);
  width:80px;
  height: 30px;
  margin-right: 10px;
  margin-top: 10px;
}
.text-limits{
  font-size: 13px;
  font-weight: bold;
  color: #a9a9a9;
  display: block;
  float: right;
  margin-top: 10px;
}
.display-list{
  margin-top: 25px;
  height:100%;
  overflow-y: auto;
}
.display-list::-webkit-scrollbar{
  width:10px;
}
.display-list::-webkit-scrollbar-track{
  background-color: #989898;
}
.display-list::-webkit-scrollbar-thumb{
  background-color: #767676;
}
.task-initials{
  display: flex;
  width:50px;
  height: 50px;
  background-color: var(--smoky-white);
  border-radius: 50%;
  padding-top: 2px;
  margin-right: 15px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
}
.task-initials:hover{
  cursor: pointer;
  transform: scale(0.9);
}
.initials{
  font-weight: bolder;
  font-size: 18px;
  font-weight: bold;
}
.task-item{
  width:95%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  margin-bottom:15px;
}
.task-details{
  display: flex;
  flex-direction: column;
}
.task-details:hover{
  cursor: pointer;
}
.task-name{
  font-size: 14px;
  color:rgba(44, 62, 80, 0.9);
  font-weight: bolder;
}
.muted-detail{
  font-size: 13px;
  color:#a9a9a9;
  font-weight: bold;
}
.light-blue{
  background-color: rgba(43, 174, 170, 0.1);
}
.navy-blue{
  background-color:rgba(4, 84, 140, 0.1);
}
.light-orange{
  background-color: rgba(252, 167, 5, 0.1);
}
.light-red{
  background-color:rgba(252, 100, 108, 0.1);
}
.delete-task{
  background-color:rgba(252, 100, 108, 0.7);
  font-size: 16px;
  color: white;
}
.single-task{
  padding-left: 10px;
  padding-right: 10px;
}
.single-task-title{
  font-size: 16px;
  font-weight: bold;
}
.single-task-note{
  margin-top: 15px;
}
.close-btn{
  margin-top: 30px;
  margin-left: 10px;
  border:none;
  height: 30px;
  width: 80px;
  background-color: rgba(252, 100, 108, 0.7);
  color: white;
}
</style>
