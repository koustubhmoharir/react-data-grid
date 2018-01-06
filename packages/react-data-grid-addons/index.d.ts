// Type definitions for react-data-grid 1.0.4
// Project: https://github.com/adazzle/react-data-grid.git
// Definitions by: Simon Gellis <https://github.com/SupernaviX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

/// <reference types="react" />

declare namespace AdazzleReactDataGridPlugins {
    // TODO: refine types for these addons
    export namespace Editors {
        export class AutoComplete extends React.Component<any, {}> { }
        export class DropDownEditor extends React.Component<any, {}> { }
        export class SimpleTextEditor extends React.Component<any, {}> { }
        export class CheckboxEditor extends React.Component<any, {}> { }
    }
    export namespace Formatters {
        export class ImageFormatter extends React.Component<any, {}> { }
        export class DropDownFormatter extends React.Component<any, {}> { }
    }
    export class Toolbar extends React.Component<any, any> {}
    // TODO: re-export the react-contextmenu typings once those exist
    // https://github.com/vkbansal/react-contextmenu/issues/10
    export namespace Menu {
        export class ContextMenu extends React.Component<any, {}> { }
        export class MenuHeader extends React.Component<any, {}> { }
        export class MenuItem extends React.Component<any, {}> { }
        export class SubMenu extends React.Component<any, {}> { }
        export const monitor: {
            getItem(): any
            getPosition(): any
            hideMenu(): void
        };
        export function connect(Menu: any): any;
        export function ContextMenuLayer(
            identifier: any,
            configure?: (props: any) => any
        ): (Component: any) => any
    }

    export namespace Data {
        export const Selectors: {
            getRows: (state: {rows: any[], filters:{ [key: string]: any }}) => any[],
            getSelectedRowsByKey: any
        }
    }
}

declare module "react-data-grid-sk-addons" {
    import Plugins = AdazzleReactDataGridPlugins;
    import Editors = Plugins.Editors;
    import Formatters = Plugins.Formatters;
    import Toolbar = Plugins.Toolbar;
    import Menu = Plugins.Menu;
    import Data = Plugins.Data;

    // ES6 named exports
    export {
        Editors,
        Formatters,
        Toolbar,
        Menu,
        Data
    }

    // attach to window
    global {
        interface Window {
            ReactDataGridPlugins: {
                Editors: typeof Editors
                Formatters: typeof Formatters
                Toolbar: typeof Toolbar
                Menu: typeof Menu
            }
        }
    }
}
