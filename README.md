# Pure Prolog Language Support

A VS Code Extension for Prolog, leveraging a [pure Prolog language server](https://github.com/hargettp/prolog_lsp).

Currently this extension supports (SWI-Prolog)[https://swi-prolog.org], and may leverage features native to that implementation. Pull requests are welcome for those that wish to adapt it to support other Prolog implementations.

Currently supports the following features, both for the current project source, system libraries, and any installed [packages](https://www.swi-prolog.org/pack/list).

* Document symbols
* Workspace symbols
* Hover info
* Go To Reference / Find All References
* Go To Definition(s)
* Auto-completion

This extension is still in an alpha state, and is actively used for developing the Prolog Language Server behind it, please expect bugs and imperfections. If the extension stops working, simply reload the VS Code window. Worst case, check for a rogue `swipl` process running in the background, and use your operating system's tools to quit it.

