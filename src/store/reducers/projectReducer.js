import {
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_FAILURE
} from "../constants/projects";

const initState = {
  projects: [
    { id: 1, title: "Project 1", content: "Project 1 content" },
    { id: 2, title: "Project 2", content: "Project 2 content" },
    { id: 3, title: "Project 3", content: "Project 3 content" },
    { id: 4, title: "Project 4", content: "Project 4 content" }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return state;
    case CREATE_PROJECT_FAILURE:
      return state;
    default:
      return state;
  }
};

export default projectReducer;
