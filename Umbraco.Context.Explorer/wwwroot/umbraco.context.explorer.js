import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as t, UMB_DOCUMENT_ENTITY_TYPE as o } from "@umbraco-cms/backoffice/document";
const i = (n, e) => {
  e.registerMany([
    {
      type: "globalContext",
      alias: "Our.ContextExplorer.Context",
      name: "Context Explorer Context",
      api: () => import("./context-BPGWs9n-.js")
    },
    {
      type: "headerApp",
      alias: "Our.ContextExplorer.Toggle",
      name: "Context Explorer",
      element: () => import("./toggle-COMKuPz0.js"),
      weight: 0,
      meta: {
        pathname: "context-explorer-toggle"
      }
    },
    {
      type: "headerApp",
      alias: "Our.ContextExplorer.HeaderApp",
      name: "Context Explorer",
      element: () => import("./explorer-DwamY_-a.js"),
      weight: 1,
      meta: {
        pathname: "context-explorer-headerApp"
      }
    },
    {
      type: "section",
      alias: "Our.ContextExplorer.Section",
      name: "Context Explorer",
      meta: {
        label: "Context",
        pathname: "context-explorer-section"
      }
    },
    {
      type: "dashboard",
      alias: "Our.ContextExplorer.dashboard",
      name: "Context Explorer Dashboard",
      element: () => import("./dashboard-CjZfv7Qz.js"),
      weight: -1,
      meta: {
        label: "Context Explorer Dashboard",
        pathname: "context-explorer-dashboard"
      },
      conditions: [
        {
          alias: "Umb.Condition.SectionAlias",
          match: "Our.ContextExplorer.Section"
        }
      ]
    },
    {
      type: "sectionView",
      alias: "Our.ContextExplorer.SectionView",
      name: "Context Explorer View",
      element: () => import("./sectionView-t_xCSepM.js"),
      meta: {
        sections: ["Our.ContextExplorer.Section"],
        label: "Section View",
        pathname: "context-explorer-section-view"
      }
    },
    {
      type: "sectionSidebarApp",
      alias: "Our.ContextExplorer.SectionSidebarApp",
      name: "Context Explorer Sidebar App",
      element: () => import("./sidebarApp-DUk_lFf8.js"),
      meta: {},
      conditions: [
        {
          alias: "Umb.Condition.SectionAlias",
          match: "Our.ContextExplorer.Section"
        }
      ]
    },
    {
      type: "sectionSidebarApp",
      kind: "menu",
      alias: "Our.ContextExplorer.SectionSidebarApp.MenuApp",
      name: "Context Explorer Sidebar Menu App",
      element: () => import("./menuSidebarApp-ZzjAspcL.js"),
      meta: {
        label: "Sidebar menu app",
        menu: "Our.ContextExplorer.Menu"
      },
      conditions: [
        {
          alias: "Umb.Condition.SectionAlias",
          match: "Our.ContextExplorer.Section"
        }
      ]
    },
    {
      type: "menu",
      alias: "Our.ContextExplorer.Menu",
      name: "Context Explorer Menu",
      element: () => import("./menu-1uhUjr0Q.js"),
      meta: {
        label: "Sidebar menu"
      }
    },
    {
      type: "entityAction",
      kind: "default",
      alias: "Our.ContextExplorer.ContentDebugAction",
      name: "Debug Action",
      weight: 10,
      api: () => import("./ContentDebugAction-BoZCHRPq.js"),
      forEntityTypes: [t, o],
      meta: {
        icon: "icon-bug",
        label: "Show Contexts"
      },
      conditions: [
        {
          alias: "Our.ContextExplorer.DebugCondition"
        }
      ]
    },
    {
      type: "condition",
      name: "Context explorer condition",
      alias: "Our.ContextExplorer.DebugCondition",
      api: () => import("./DebugCondition-PEsmDDtj.js")
    },
    {
      type: "userProfileApp",
      alias: "Our.ContextExplorer.ContentDebugAction.UserProfileApp",
      name: "User Profile App",
      element: () => import("./userProfileApp-Cwep-Dyc.js"),
      weight: 100,
      meta: {
        label: "Context explorer",
        pathname: "context explorer"
      },
      conditions: [
        {
          alias: "Our.ContextExplorer.DebugCondition"
        }
      ]
    }
  ]);
};
export {
  i as onInit
};
//# sourceMappingURL=umbraco.context.explorer.js.map
