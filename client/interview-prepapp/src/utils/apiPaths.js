export const BASE_URL = "http://localhost:8080";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/auth/register",
    LOGIN: "/auth/login",
    GET_PROFILE: "/auth/profile",
  },

  IMAGE: {
    UPLOAD_IMAGE: "/auth/upload-image",
  },

  AI: {
    GENERATE_QUESTIONS: "/ai/generate-questions",
    GENERATE_EXPLANATION: "/ai/generate-explanation",
  },

  SESSION: {
    CREATE: "/sessions/create",
    GET_ALL: "/sessions/my-sessions",
    GET_ONE: (id) => `/sessions/${id}`,
    DELETE: (id) => `/sessions/${id}`,
  },

  QUESTION: {
    ADD_TO_SESSION: "/questions/add",
    PIN: (id) => `/questions/${id}/pin`,
    UPDATE_NOTE: (id) => `/questions/${id}/note`,
  },
};
