"use strict"

import * as path from 'path'; 
import { workspace, ExtensionContext } from 'vscode';

import {
  LanguageClient,
  LanguageClientOptions,
  ServerOptions,
  TransportKind
} from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {

  let prologExecutable = workspace.getConfiguration("prolog").executable;
  let plsOption = workspace.getConfiguration("prolog").pls.loadFrom;
  let plsLocalDirectory = workspace.getConfiguration("prolog").pls.localDirectory;
  let script = context.asAbsolutePath(path.join("prolog","run.pl"));
  let prologArgs = [
      "-s",
      script,
      "-g",
      "halt",
      "--",
      plsOption,
      plsLocalDirectory
    ];

  // If the extension is launched in debug mode then the debug server options are used
  // Otherwise the run options are used
  const serverOptions: ServerOptions =  {
    run: { command: prologExecutable, transport: TransportKind.stdio, args: prologArgs },
    debug: { command: prologExecutable, transport: TransportKind.stdio, args: prologArgs },
    };

  // Options to control the language client
  const clientOptions: LanguageClientOptions = {
    // Register the server for prolog documents
    documentSelector: [{ scheme: 'file', language: 'prolog' }],
  };

  // Create the language client and start the client.
  client = new LanguageClient(
    'purePrologLanguageSupport',
    'Pure Prolog Language Support',
    serverOptions,
    clientOptions
  );

  // Start the client. This will also launch the server
  client.start();
}

export function deactivate(): Thenable<void> | undefined {
  if (!client) {
    return undefined;
  }
  return client.stop();
}
