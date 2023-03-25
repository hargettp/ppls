:- use_module(library(prolog_pack)).

:- current_prolog_flag(argv, [directory, LocalDirectory])
  -> (
      format(user_error, "Using PLS from local directory ~w~n",[LocalDirectory]),
      pack_attach(LocalDirectory,[duplicate(replace)])
      )
    ; format(user_error, "Using PLS from installed package~n",[]).

:- use_module(library(prolog_lsp)).

:- run_stdio_language_server.