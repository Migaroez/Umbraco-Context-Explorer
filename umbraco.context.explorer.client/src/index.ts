import {UmbEntryPointOnInit} from '@umbraco-cms/backoffice/extension-api';
import {UMB_DOCUMENT_ENTITY_TYPE, UMB_DOCUMENT_ROOT_ENTITY_TYPE } from '@umbraco-cms/backoffice/document';

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {
    _extensionRegistry.registerMany([
        {
            type: 'globalContext',
            alias: 'Our.ExtensionExplorer.Context',
            name: 'Context Explorer Context',
            api: () => import('./Core/context'),
        },
        {
            type: 'headerApp',
            alias: 'Our.ExtensionExplorer.Toggle',
            name: 'Context Explorer',
            element: () => import('./Core/Elements/toggle'),
            weight: 0,
            meta: {
                pathname: 'context-explorer-toggle',
            },
        },
        {
            type: 'headerApp',
            alias: 'Our.ExtensionExplorer.HeaderApp',
            name: 'Context Explorer',
            element: () => import('./Core/Elements/explorer'),
            weight: 1,
            meta: {
                pathname: 'context-explorer-headerApp',
            },
        },
        {
            type: "section",
            alias: "Our.ExtensionExplorer.Section",
            name: "Context Explorer",
            meta: {
                "label": "Context",
                "pathname": "context-explorer-section"
            }
        },
        {
            type: "dashboard",
            alias: "Our.ExtensionExplorer.dashboard",
            name: "Context Explorer Dashboard",
            element: () => import('./Registrations/Elements/dashboard'),
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
            element: () => import('./Registrations/Elements/sectionView'),
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
            element: () => import('./Registrations/Elements/sidebarApp'),
            meta: {
                
            },
            conditions: [
                {
                    alias: 'Umb.Condition.SectionAlias',
                    match: "Our.ExtensionExplorer.Section",
                },
            ],
        },
        {
            type: "sectionSidebarApp",
            kind: "menu",
            alias: "Our.ExtensionExplorer.SectionSidebarApp.MenuApp",
            name: "Context Explorer Sidebar Menu App",
            element: () => import('./Registrations/Elements/menuSidebarApp'),
            meta: {
                label: "Sidebar menu app",
                menu: "Our.ExtensionExplorer.Menu"
            },
            conditions: [
                {
                    alias: 'Umb.Condition.SectionAlias',
                    match: "Our.ExtensionExplorer.Section",
                },
            ],
        },
        {
            type: "menu",
            alias: "Our.ExtensionExplorer.Menu",
            name: "Context Explorer Menu",
            element: () => import('./Registrations/Elements/menu'),
            meta: {
                label: "Sidebar menu"
            }
        },
        {
            type: 'entityAction',
            kind: 'default',
            alias: 'Our.ExtensionExplorer.EntityAction',
            name: 'Debug Action',
            weight: 10,
            api: () => import('./Registrations/Actions/EntityAction'),
            forEntityTypes: [UMB_DOCUMENT_ROOT_ENTITY_TYPE, UMB_DOCUMENT_ENTITY_TYPE],
            meta: {
                icon: 'icon-bug',
                label: 'Show Extension Explorer',
            },
            conditions: [
                {
                    alias: 'Our.ExtensionExplorer.DebugCondition',
                },
            ],
        },
        {
            type: 'condition',
            name: 'Context explorer condition',
            alias: 'Our.ExtensionExplorer.DebugCondition',
            api: () => import('./Core/Conditions/DebugCondition')
        },
        {
            type: 'userProfileApp',
            alias: 'Our.ExtensionExplorer.EntityAction.UserProfileApp',
            name: 'User Profile App',
            element: () => import('./Registrations/Elements/userProfileApp'),
            weight: 100,
            meta: {
                label: 'Context explorer',
                pathname: 'context explorer',
            },
            conditions: [
                {
                    alias: 'Our.ExtensionExplorer.DebugCondition',
                },
            ],
        },
    ])
};
