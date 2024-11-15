# Setting Up Docusaurs
The process of learing of Docusaurus and the base setup of Wondering Admin. 

<!--intro-->

The Docusaurus [getting status](https://docusaurus.io/docs/installation) documentation is a great tool to follow and use. To be able to run and test the site locally you need node.js V18+. To install node.js you can use the isntaller found at [node.js](https://nodejs.org/en/download/package-manager), I used [chocolatey](https://chocolatey.org/install) to installed it. 

## Chocolatey & Node.js
[Chocolatey](https://chocolatey.org/) is a great tool to install program via the command lind. Windows has created their own version of it, while its works pretty good and is great for some programs I have found Chocolatey works better for devlopment tools.

To get started with Chocolatey you can install it with the [downloader here](https://chocolatey.org/install#generic). 

The other option is to use winget to install chocolatey 
```
winget install Chocolatey.Chocolatey
```
That will install Chocolatey, once it is install you can use chocolatey to install node.js with the following command. 
```
choco install node.js
```

## Docusaurus Setup

Now that Node.js is install we can get Docusaurus installed and running locally. 

### Docusaurus install

You can get the basic setup by running the command 
``` bash
#Change my-website to what you called your repo/site 
npx create-docusaurus@latest my-website classic
```
This will download all the basic files in a folder called `my-website`.  To view the site locally run the following:
``` bash
#change my-website to what you called the folder
cd ./my-website

#run to start the website
npm start

#To stop the website from running press ctrl+c
```

### configuring Docusaurus

In `docusaurus.config.js` you will want to change some variables. By 
```js
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
```

## Docusaurus Additional Setup

If you are familiar with JS and React these next steps will be straight forward. 

The homepage is


