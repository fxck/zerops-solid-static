# Zerops + Nextjs - Static

![Header Image](public/ZeropsNextjs.png)

A Static Next.js example for Zerops that you can deploy in 2 steps on zerops.

**Features**

- Solid.js
- Tailwind
- Prettier

## Instructions to Deploy on Zerops

1. Navigate to the Zerops Dashboard and locate the import project button on the sidebar.

2. Paste the Project Yaml

```yaml
project:
  name: zerops-nextjs

services:
  - hostname: nextstatic
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
    buildFromGit: https://github.com/fxck/zerops-next-static
    enableSubdomainAccess: true
    minContainers: 1
```

If you still find yourself stuck in the process join our [Discord community](https://discord.gg/5ptAqtpyvh).
