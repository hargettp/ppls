FROM mcr.microsoft.com/devcontainers/base:jammy

# Install prolog
RUN apt-get update \
    && apt-get -y install --no-install-recommends software-properties-common
RUN sudo apt-add-repository -y -u ppa:swi-prolog/stable
RUN sudo apt-get install -y swi-prolog

# Install npm + node and related tools
# RUN sudo apt-get install -y npm
RUN curl -fsSL https://deb.nodesource.com/setup_19.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    sudo apt-get install -y node-typescript

USER vscode

# Install VS Code tools
RUN sudo npm install -g @vscode/vsce
RUN sudo npm install -g ovsx

# Install prolog packages
# RUN swipl -g "pack_install( log4p,[interactive(false)] ), halt"
RUN swipl -g "pack_install( prolog_lsp,[interactive(false)] ), halt"