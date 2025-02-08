import { createSlice, nanoid } from "@reduxjs/toolkit";

const tasksInitialState = {
  tasks: [
    { id: nanoid(), text: "Learn HTML and CSS", completed: true },
    { id: nanoid(), text: "Get good at JavaScript", completed: true },
    { id: nanoid(), text: "Master React", completed: false },
    { id: nanoid(), text: "Discover Redux", completed: false },
    { id: nanoid(), text: "Build amazing apps", completed: false },
  ],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        return {
          ...state,
          tasks: state.tasks.concat(action.payload),
        };
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        };
      },
    },

    deleteTask: {
      reducer(state, action) {
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload),
        };
      },
      prepare(idTaskToDelete) {
        return { payload: idTaskToDelete };
      },
    },
    completeTask: {
      reducer(state, action) {
        return {
          ...state,
          tasks: state.tasks.map((task) =>
            action.payload.activeTask.id === task.id
              ? { ...task, completed: action.payload.isComplete }
              : task
          ),
        };
      },
      prepare({ isTaskComplete, task }) {
        return {
          payload: {
            isComplete: isTaskComplete,
            activeTask: task,
          },
        };
      },
    },
  },
});

export const { addTask, deleteTask, completeTask } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
