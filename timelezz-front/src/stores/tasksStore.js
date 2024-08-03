import { defineStore } from "pinia";

export const useTasksStore = defineStore('taskStore', {
    state: () => ({
        tasks: [{
            id: 1,
            date: '2024-08-02',
            title: 'Revisar informes financieros',
            description: 'Revisar y aprobar los informes financieros del Q2.'
        },
        {
            id: 2,
            date: '2024-08-03',
            title: 'Planificar reunión de equipo',
            description: 'Organizar y agendar la reunión semanal del equipo.'
        }]
        , filter: ''
    }

    )
    ,
    getters: {
        getFilteredTasks() {
            return this.filter ? this.tasks.filter(task => task.title.toLowerCase().includes(this.filter) || task.description.toLowerCase().includes(this.filter)) : this.tasks
        }
    },
    actions: {
        addTask(newTask) {
            this.tasks.push(newTask)
        },
        deleteTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id != taskId)
        },
        setFilter(filter) {

            this.filter = filter.toLowerCase()
        }

    }
})