# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Nix channel to use.
  channel = "stable-24.05";

  # Packages to install.
  packages = [
    pkgs.nodejs_20
    # Use steam-run to provide a standard FHS environment for Cypress.
    pkgs.steam-run
    pkgs.xorg.libXvfb
    # Provides the Xvfb command required by Cypress.
    pkgs.xorg.xorgserver
  ];

  # Environment variables.
  env = {};

  idx = {
    # VS Code extensions.
    extensions = [
      "dbaeumer.vscode-eslint"
      "esbenp.prettier-vscode"
      "styled-components.vscode-styled-components"
      "cypress.io.cypress"
      "editorconfig.editorconfig"
    ];

    # Web previews.
    previews = {
      enable = true;
      previews = {
        web = {
          command = ["npm" "run" "dev"];
          manager = "web";
        };
      };
    };

    # Workspace lifecycle hooks.
    workspace = {
      onCreate = {
        install-deps = "npm install";
        default.openFiles = [ "src/App.tsx" "package.json" ".idx/dev.nix" ];
      };
      onStart = {
        start-dev-server = "npm run dev";
      };
    };
  };
}
