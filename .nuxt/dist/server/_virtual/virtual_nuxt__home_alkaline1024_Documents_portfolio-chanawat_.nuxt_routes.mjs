function handleHotUpdate(_router, _generateRoutes) {
}
const _routes = [
  {
    name: "blog",
    path: "/blog",
    component: () => import("../pages/blog.vue.mjs")
  },
  {
    name: "index",
    path: "/",
    component: () => import("../pages/index.vue.mjs")
  },
  {
    name: "resume",
    path: "/resume",
    component: () => import("../pages/resume.vue.mjs")
  },
  {
    name: "contact",
    path: "/contact",
    component: () => import("../pages/contact.vue.mjs")
  },
  {
    name: "projects",
    path: "/projects",
    component: () => import("../pages/projects.vue.mjs")
  }
];
export {
  _routes as default,
  handleHotUpdate
};
//# sourceMappingURL=virtual_nuxt__home_alkaline1024_Documents_portfolio-chanawat_.nuxt_routes.mjs.map
