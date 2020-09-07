import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from '../store/index';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "Home",
      component: Home,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: "/profile",
      name: 'profile',
      component: () =>
        import('../views/Profile.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: 'login',
      component: () =>
        import('../views/Login.vue'),
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: "/register",
      name: 'register',
      component: () =>
        import('../views/Register.vue'),
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: "/todos",
      name: 'todos',
      component: () =>
        import('../views/Todos.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/todo",
      name: 'todo',
      component: () =>
        import('../views/Todo.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/todos/:id",
      name: 'todoItem',
      component: () =>
        import('../views/NotePage.vue'),
      meta: {
        requiresAuth: true
      }
    },
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next('/login')
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (store.getters.isLoggedIn) {
      next('/todos');
    } else {
      next();
    }
  } else {
    next()
  }
});

export default router;