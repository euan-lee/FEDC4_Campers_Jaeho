export const ROUTES = {
  MAIN: '/',
  NOT_FOUND: '/not-found',
  AUTH: '/auth',
  SEARCH: '/search',
  CREATE_POST: '/createpost',
  MY_PROFILE: '/my',
  USER_EDIT: '/my/:id',
  USER_PROFILE: '/profile/:userId',
  USER_LIST: '/user',
  CHAT_LIST: '/chat',
  CHAT: '/chat/:chatId',
  FOLLOW_BY_USER_ID: (userId: string) => `/follow/${userId}`,
  FOLLOWER_BY_USER_ID: (userId: string) => `/follower/${userId}`,
};
