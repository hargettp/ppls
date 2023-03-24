:- pack_install(prolog_lsp, [upgrade(true)]).

:- use_module(library(prolog_lsp)).

% :- log4p:set_log_level(debug, _).
% :- jsonrpc_logging:enable_jsonrpc_logging(logs).
% :- jsonrpc_logging:enable_jsonrpc_tracing.
:- run_stdio_language_server.