# POC Contentful 

## Setup
Run the following commands to run the application 

1.  Create and enter the correct credentials in a `.env` file, see `.env.example` for an example
2.  Run `npm install` or `npm i`, the current node version is v18.20.2 and npm v10.5.0 
3.  Run `npm run dev`, this commands does the following: 
       1.  The command `npm run graphql-codegen:generate` generates the queries and the interfaces for the application, the environment `local` is getting pulled from Contentful 


## Import / Export 
Contentful has a CLI where you can perform certain action on spaces and environment, following the documentation for installing the CLI. 

Read the following [docs](https://www.contentful.com/developers/docs/tutorials/cli/installation/)

After the CLI is configured and setup correctly navigate to `contentful-cli-config/config.json`

Enter the following command `contentful space export --config export-config.json`, the exported data is exported to the `/output` folder,

For importing the content enter the correct properties that needs to be imported in `import-config.json` and execute the following command `contentful space import --config import-config.json`

See the [docs](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/) for more properties
