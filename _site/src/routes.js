import Home from "./components/Home.vue";
// Lazy load syntax
const About = resolve => {
  require.ensure(["./components/About.vue"], () => {
    resolve(require("./components/About.vue"));
  });
};
const Knives = resolve => {
  require.ensure(["./components/Knives.vue"], () => {
    resolve(require("./components/Knives.vue"));
  });
};
const Life = resolve => {
  require.ensure(["./components/Life.vue"], () => {
    resolve(require("./components/Life.vue"));
  });
};
const Process = resolve => {
  require.ensure(["./components/Process.vue"], () => {
    resolve(require("./components/Process.vue"));
  });
};
const Local = resolve => {
  require.ensure(["./components/Local.vue"], () => {
    resolve(require("./components/Local.vue"));
  });
};
const Privacy = resolve => {
  require.ensure(["./components/Privacy.vue"], () => {
    resolve(require("./components/Privacy.vue"));
  });
};
const Build = resolve => {
  require.ensure(["./components/Build.vue"], () => {
    resolve(require("./components/Build.vue"));
  });
};

export const routes = [
  {
    path: "/",
    component: Home,
    name: "Home"
  },
  {
    path: "/about",
    component: About,
    name: "About"
  },
  {
    path: "/knives",
    component: Knives,
    name: "Knives"
  },
  {
    path: "/process",
    component: Process,
    name: "Process"
  },
  {
    path: "/local",
    component: Local,
    name: "Local"
  },
  // {
  //   path: '/life',
  //   component: Life,
  //   name: 'Life'
  // },
  {
    path: "/privacy",
    component: Privacy,
    name: "Privacy"
  },
  {
    path: "/build",
    component: Build,
    name: "Build"
  },
  {
    path: "*", // catch wildcards (I.E. 404's)
    redirect: "/"
  }
];
