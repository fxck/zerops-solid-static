# Zerops x Solid - Static

Solid is a declarative Javascript library for creating fast, dynamic web apps with server-side rendering. [Zerops](https://zerops.io) simplifies deployment, offering automatic scaling, optional caching, logging integrations, and easy setup for additional services, letting you focus on development without infrastructure hassles.

![solid](https://github.com/zeropsio/recipe-shared-assets/blob/main/covers/svg/cover-solid.svg)

<br/>

## Deploy to Zerops

You can either click the deploy button to deploy directly on Zerops, or manually copy the [import yaml](https://github.com/zeropsio/recipe-solid-static/blob/main/zerops-project-import.yml) to the import dialog in the Zerops app.

[![Deploy on Zerops](https://github.com/zeropsio/recipe-shared-assets/blob/main/deploy-button/green/deploy-button.svg)](https://app.zerops.io/recipe/solid-static)

<br/>
<br/>

## Recipe features
- Latest Solid version running on a load balanced **Zerops Node.js** service.

<br/>

## Production vs. development
This recipe is ready for production as is, and will scale horizontally by adding more containers in case of high traffic surges. If you want to achieve the highest baseline reliability and resiliace, start with at least two containers (add `minContainers: 2` in recipe YAML in the `app` service section, or change the minimum containers in "Automatic Scaling configuration" section of service detail).

Additionally for you might want to consider:
- Using **Zerops Redis** service for caching
- Setting up [Winston](https://github.com/winstonjs/winston) for advanced and structured logging

<br/>

## Changes made over the default installation
If you want to modify your existing Remix app to efficiently run on Zerops, there are no changes needed in the codebase on top of the standard installation, just add [zerops.yml](https://github.com/zeropsio/recipe-solid-nodejs/blob/main/zerops.yml) to your repository.

<br/>
<br/>

Need help setting your project up? Join [Zerops Discord community](https://discord.com/invite/WDvCZ54).
