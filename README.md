# Pure Prolog Language Support

A VS Code Extension for Prolog, leveraging a [pure Prolog language server](https://github.com/hargettp/prolog_lsp).

Currently this extension supports [SWI-Prolog](https://swi-prolog.org), and may leverage features native to that implementation. Pull requests are welcome for those that wish to adapt it to support other Prolog implementations.

Currently supports the following features, both for the current project source, system libraries, and any installed [packages](https://www.swi-prolog.org/pack/list).

* Document symbols
* Workspace symbols
* Hover info
* Go To Reference / Find All References
* Go To Definition(s)
* Auto-completion

This extension is still in an alpha state, and is actively used for developing the Prolog Language Server behind it, please expect bugs and imperfections. If the extension stops working, simply reload the VS Code window. Worst case, check for a rogue `swipl` process running in the background, and use your operating system's tools to quit it.

## Getting Started

This extension relies upon both an installation of SWI-Prolog, but also the Prolog Language Server. 

The recommended path for installing the latter is to run `swipl` in a terminal, then run `pack_install(prolog_lsp)`.

Alternatively, one can clone the Git repository for the Prolog Language Server to a local directory from <https://github.com/hargettp/prolog_lsp>.

Once these installations are complete, ensure these settings are configured in VS Code (filter for `prolog` to find easily):

* `Prolog: Executable` - this should be the full path to the installed `swipl` executable for running Prolog applications
* `Prolog > Pls : Load From` - if PLS installed as a package, leave the default `From a globablly installed package` as the selection; if cloned to a local directory, choose `From a local directory`
* `Prolog > Pls: Local Directory` - only needed if chose `From a local directory` in the previous setting, but if so should be set to the directory where PLs was cloned.

After changing these settings, reload the VS Code window, and look for "Pure Prolog Language Server" in the Output window. Note that there may be a few errors logged on startup, usually reflecting syntax errors in SWI-Prolog system libraries. These are benign.

