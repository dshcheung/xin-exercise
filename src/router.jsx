import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Todo from './views/Todo.vue';
import VideoIndex from './views/videos/index.vue';
import VideoShow from './views/videos/show.vue';
import ShoppingCart from './views/ShoppingCart.vue';
import ForumIndex from './views/forums/ForumIndex.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo,
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/videos',
      name: 'videos',
      component: VideoIndex,
    },
    {
      path: '/videos/:id',
      name: 'videoShow',
      component: VideoShow,
    },
    {
      path: '/forums',
      name: 'forumsIndex',
      component: ForumIndex,
    },
    // {
    //   path: '/forums/new',
    //   name: 'forumsNew',
    //   component: ForumNew,
    // },
    // {
    //   path: '/forums/:id',
    //   component: ForumShowWrapper,
    //   children: [
    //     {
    //       path: '',
    //       name: 'forumShow',
    //       component: ForumShow,
    //     },
    //     {
    //       path: 'edit',
    //       name: 'forumEdit',
    //       component: ForumEdit,
    //     },
    //   ],
    // },
  ],
});


// /forum index
// /forum/new new
// /forum/:id show
// /form/:id/edit edit

// index
// show
// new
// create
// edit
// update
// delete
