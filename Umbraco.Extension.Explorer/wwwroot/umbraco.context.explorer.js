import { UMB_DOCUMENT_ROOT_ENTITY_TYPE as t, UMB_DOCUMENT_ENTITY_TYPE as o } from "@umbraco-cms/backoffice/document";
const r = (n, e) => {
  e.registerMany([
    {
      type: "globalContext",
      alias: "Our.ExtensionExplorer.Context",
      name: "Context Explorer Context",
      api: () => import("./context-CGWozyDb.js")
    },
    {
      type: "headerApp",
      alias: "Our.ExtensionExplorer.Toggle",
      name: "Context Explorer",
      element: () => import("./toggle-DEvqw7aM.js"),
      weight: 0,
      meta: {
        pathname: "context-explorer-toggle"
      }
    },
    {
      type: "headerApp",
      alias: "Our.ExtensionExplorer.HeaderApp",
      name: "Context Explorer",
      element: () => import("./explorer-CDwkKfuH.js"),
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
      element: () => import("./dashboard-DTd0vK0f.js"),
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
      element: () => import("./sectionView-TB4PtYvw.js"),
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
      element: () => import("./sidebarApp-BH6QDSRa.js"),
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
      element: () => import("./menuSidebarApp-BjjHrrgr.js"),
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
      element: () => import("./menu-CwA_fTIv.js"),
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
      api: () => import("./EntityAction-Jaq34hm7.js"),
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
      api: () => import("./DebugCondition-BWoOKohe.js")
    },
    {
      type: "userProfileApp",
      alias: "Our.ExtensionExplorer.EntityAction.UserProfileApp",
      name: "User Profile App",
      element: () => import("./userProfileApp-CwPYABOT.js"),
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
