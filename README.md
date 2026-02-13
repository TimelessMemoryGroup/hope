# hope

This is the website for publishing website info to hope_tmg

## Cloudflare Pages Deployment

This repository automatically deploys files from the `/upload` folder to Cloudflare Pages.

### Setup

To enable automatic deployments, you need to configure the following secrets in your GitHub repository settings:

1. `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Pages edit permissions
   - Go to Cloudflare Dashboard → My Profile → API Tokens
   - Create a token with "Cloudflare Pages" template or "Edit Cloudflare Pages" permission

2. `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare Account ID
   - Found in Cloudflare Dashboard → Overview (right sidebar)

### Usage

1. Place your website files in the `/upload` folder
2. Commit and push to the `main` branch
3. The GitHub Action will automatically deploy to Cloudflare Pages

The deployment workflow can also be triggered manually from the Actions tab.

### Local Development

Simply edit files in the `/upload` folder. The `index.html` file serves as the homepage.
