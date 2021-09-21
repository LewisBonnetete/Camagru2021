const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Gallery.vue') },
      { path: 'profile/:uid', component: () => import('pages/Profile.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'newphoto', component: () => import('pages/NewPhoto.vue') },
      { path: 'details/:uid&:pid', component: () => import('pages/Details.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
