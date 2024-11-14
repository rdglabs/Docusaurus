# Setting Up Docusaurs
The process of learing of Docusaurus and the base setup of Wondering Admin. 

<!--intro-->

The Docusaurus [getting status](https://docusaurus.io/docs/installation) documentation is a great tool to follow and use. To be able to run and test the site locally you need node.js V18+. To install node.js you can use the isntaller found at [node.js](https://nodejs.org/en/download/package-manager), I used [chocolatey](https://chocolatey.org/install) to installed it. 

## Chocolatey & Node.js
[Chocolatey](https://chocolatey.org/) is a great tool to install program via the command lind. Windows has created their own version of it, while its works pretty good and is great for some programs I have found Chocolatey works better for devlopment tools.

To get started with Chocolatey you can install it with the [downloader here](https://chocolatey.org/install#generic). You can also use winget to install chocolatey 
```
winget install Chocolatey.Chocolatey
```
That will install Chocolatey, once it is install you can use chocolatey to install node.js with the following command. 
```
choco install node.js
```

## Docusaurus setup

Going back to the Docusaurus documents you can get the basic setup by running the command 
```
npx create-docusaurus@latest my-website classic
```
