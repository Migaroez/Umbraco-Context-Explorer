import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as t, UMB_DOCUMENT_ENTITY_TYPE as o } from "@umbraco-cms/backoffice/document";
const r = (n, e) => {
  e.registerMany([
    {
      type: "globalContext",
      alias: "Our.ExtensionExplorer.Context",
      name: "Context Explorer Context",
      api: () => import("./context-CzoDVYt5.js")
    },
    {
      type: "headerApp",
      alias: "Our.ExtensionExplorer.Toggle",
      name: "Context Explorer",
      element: () => import("./toggle-C6D3bXIU.js"),
      weight: 0,
      meta: {
        pathname: "context-explorer-toggle"
      }
    },
    {
      type: "headerApp",
      alias: "Our.ExtensionExplorer.HeaderApp",
      name: "Context Explorer",
      element: () => import("./explorer-BEWy0vo6.js"),
      weight: 1,
      meta: {
        pathname: "context-explorer-headerApp"
      }
    },
    {
      type: "section",
      alias: "Our.ExtensionExplorer.Section",
      name: "Context Explorer",
      meta: {
        label: "Context",
        pathname: "context-explorer-section"
      }
    },
    {
      type: "dashboard",
      alias: "Our.ExtensionExplorer.dashboard",
      name: "Context Explorer Dashboard",
      element: () => import("./dashboard-CkPY0ELr.js"),
      weight: -1,
      meta: {
        label: "Context Explorer Dashboard",
        pathname: "context-explorer-dashboard"
      },
      conditions: [
        {
          alias: "Umb.Condition.SectionAlias",
          match: "Our.ExtensionExplorer.Section"
        }
      ]
    },
    {
      type: "sectionView",
      alias: "Our.ExtensionExplorer.SectionView",
      name: "Context Explorer View",
      element: () => import("./sectionView-WBdF7vuK.js"),
      meta: {
        sections: ["Our.ExtensionExplorer.Section"],
        label: "Section View",
        pathname: "context-explorer-section-view"
      }
    },
    {
      type: "sectionSidebarApp",
      alias: "Our.ExtensionExplorer.SectionSidebarApp",
      name: "Context Explorer Sidebar App",
      element: () => import("./sidebarApp-BrpIoPrT.js"),
      meta: {},
      conditions: [
        {
          alias: "Umb.Condition.SectionAlias",
          match: "Our.ExtensionExplorer.Section"
        }
      ]
    },
    {
      type: "sectionSidebarApp",
      kind: "menu",
      alias: "Our.ExtensionExplorer.SectionSidebarApp.MenuApp",
      name: "Context Explorer Sidebar Menu App",
      element: () => import("./menuSidebarApp-omP9xFsV.js"),
      meta: {
        label: "Sidebar menu app",
        menu: "Our.ExtensionExplorer.Menu"
      },
      conditions: [
        {
          alias: "Umb.Condition.SectionAlias",
          match: "Our.ExtensionExplorer.Section"
        }
      ]
    },
    {
      type: "menu",
      alias: "Our.ExtensionExplorer.Menu",
      name: "Context Explorer Menu",
      element: () => import("./menu-Bar5o21y.js"),
      meta: {
        label: "Sidebar menu"
      }
    },
    {
      type: "entityAction",
      kind: "default",
      alias: "Our.ExtensionExplorer.EntityAction",
      name: "Debug Action",
      weight: 10,
      api: () => import("./EntityAction-VqO6Gcjw.js"),
      forEntityTypes: [t, o],
      meta: {
        icon: "icon-bug",
        label: "Show Extension Explorer"
      },
      conditions: [
        {
          alias: "Our.ExtensionExplorer.DebugCondition"
        }
      ]
    },
    {
      type: "condition",
      name: "Context explorer condition",
      alias: "Our.ExtensionExplorer.DebugCondition",
      api: () => import("./DebugCondition-tksilTbs.js")
    },
    {
      type: "userProfileApp",
      alias: "Our.ExtensionExplorer.EntityAction.UserProfileApp",
      name: "User Profile App",
      element: () => import("./userProfileApp-Cto1eR29.js"),
      weight: 100,
      meta: {
        label: "Context explorer",
        pathname: "context explorer"
      },
      conditions: [
        {
          alias: "Our.ExtensionExplorer.DebugCondition"
        }
      ]
    }
  ]);
};
export {
  r as onInit
};
//# sourceMappingURL=umbraco.context.explorer.js.map
