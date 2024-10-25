import {UmbEntryPointOnInit} from '@umbraco-cms/backoffice/extension-api';
import {UMB_DOCUMENT_ENTITY_TYPE, UMB_DOCUMENT_ROOT_ENTITY_TYPE } from '@umbraco-cms/backoffice/document';

export const onInit: UmbEntryPointOnInit = (_host, _extensionRegistry) => {
    _extensionRegistry.registerMany([
        {
            type: 'globalContext',
            alias: 'Our.ContextExplorer.Context',
            name: 'Context Explorer Context',
            api: () => import('./context'),
        },
        {
            type: 'headerApp',
            alias: 'Our.ContextExplorer.Toggle',
            name: 'Context Explorer',
            element: () => import('./toggle'),
            weight: 0,
            meta: {
                pathname: 'context-explorer-toggle',
            },
        },
        {
            type: 'headerApp',
            alias: 'Our.ContextExplorer.HeaderApp',
            name: 'Context Explorer',
            element: () => import('./explorer'),
            weight: 1,
            meta: {
                pathname: 'context-explorer-headerApp',
            },
        },
        {
            type: "section",
            alias: "Our.ContextExplorer.Section",
            name: "Context Explorer",
            meta: {
                "label": "Context",
                "pathname": "context-explorer-section"
            }
        },
        {
            type: "dashboard",
            alias: "Our.ContextExplorer.dashboard",
            name: "Context Explorer Dashboard",
            element: () => import('./dashboard'),
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
            element: () => import('./sectionView'),
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
            element: () => import('./sidebarApp'),
            meta: {
                
            },
            conditions: [
                {
                    alias: 'Umb.Condition.SectionAlias',
                    match: "Our.ContextExplorer.Section",
                },
            ],
        },
        {
            type: "sectionSidebarApp",
            kind: "menu",
            alias: "Our.ContextExplorer.SectionSidebarApp.MenuApp",
            name: "Context Explorer Sidebar Menu App",
            element: () => import('./menuSidebarApp'),
            meta: {
                label: "Sidebar menu app",
                menu: "Our.ContextExplorer.Menu"
            },
            conditions: [
                {
                    alias: 'Umb.Condition.SectionAlias',
                    match: "Our.ContextExplorer.Section",
                },
            ],
        },
        {
            type: "menu",
            alias: "Our.ContextExplorer.Menu",
            name: "Context Explorer Menu",
            element: () => import('./menu'),
            meta: {
                label: "Sidebar menu"
            }
        },
        {
            type: 'entityAction',
            kind: 'default',
            alias: 'Our.ContextExplorer.ContentDebugAction',
            name: 'Debug Action',
            weight: 10,
            api: () => import('./ContentDebugAction'),
            forEntityTypes: [UMB_DOCUMENT_ROOT_ENTITY_TYPE, UMB_DOCUMENT_ENTITY_TYPE],
            meta: {
                icon: 'icon-bug',
                label: 'Show Contexts',
            },
            conditions: [
                {
                    alias: 'Our.ContextExplorer.DebugCondition',
                },
            ],
        },
        {
            type: 'condition',
            name: 'Context explorer condition',
            alias: 'Our.ContextExplorer.DebugCondition',
            api: () => import('./DebugCondition')
        },
        {
            type: 'userProfileApp',
            alias: 'Our.ContextExplorer.ContentDebugAction.UserProfileApp',
            name: 'User Profile App',
            element: () => import('./userProfileApp'),
            weight: 100,
            meta: {
                label: 'Context explorer',
                pathname: 'context explorer',
            },
            conditions: [
                {
                    alias: 'Our.ContextExplorer.DebugCondition',
                },
            ],
        },
    ])
};
