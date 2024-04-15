import { Code } from "./Code";
import dashboard from "../public/dashboard.webp";

export function Steps() {
  const ZeropsYaml = `project:
  name: zerops-solid

services:
  - hostname: solidstatic
    type: nginx@1.22
    nginxConfig: |-
      server {
          listen 80 default_server;
          listen [::]:80 default_server;

          server_name _;
          root /var/www/out;

          location / {
              try_files $uri $uri/ /index.html;
          }

          access_log syslog:server=unix:/dev/log,facility=local1 default_short;
          error_log syslog:server=unix:/dev/log,facility=local1;
      }
    buildFromGit: https://github.com/fxck/zerops-solid-static
    enableSubdomainAccess: true
    minContainers: 1`.trim();
  return (
    <div class="my-8">
      <h1 class="text-3xl font-semibold">Step 1: Go To Zerops Dashboard</h1>
      <img src={dashboard} class="rounded-lg my-6" alt="dashboard image" />
      <p class="text-[#568FCB] text-xl font-medium">
        Go to <a href="https://app.zerops.io/dashboard/projects" target="_blank">Zerops Dashboard</a> and Click on the 'Import Project' button on the sidebar. (Not a user?
        <a href="https://zerops.io/" target="_blank">{" "}Register now</a> )
      </p>
      <div class="mt-16 pb-4">
        <h1 class="text-3xl font-semibold">Step 2: Paste the project Yaml</h1>
        <p class="text-[#568FCB] text-xl font-medium mt-4">
          Copy the YAML code mentioned here and paste it to import this example.
        </p>
        <p class="text-[#568FCB] text-xl font-medium mt-4">
          Alternatively, you can clone zerops-solid-static to your GitHub
          profile and then replace the repository URL in the buildFromGit
          parameter.
        </p>
        <p class="text-[#568FCB] text-xl font-medium mt-3">
          For more information, explore our docs and if you still find yourself
          stuck in the process, join our Discord community.
        </p>
      </div>
      <Code code={ZeropsYaml} />
    </div>
  );
}
