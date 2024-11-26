---
slug: settling-on-docusaurus
title: Settling on Docusaurus
authors: [gillespr]
tags: [github, docusaurus]
---

# Settling on Docusaurus

What I wanted from this site and why did I select Docusaurus and Github Pages maybe...

<!-- truncate -->

As I mention in my last post I am wanting to document my process that I took to learning and implementing azure and terraform, along with sharing my scripts. I also have a small homelab setup. The usually process that happens is; I set something up, get it working as intended, don't do anything with it for a few months. Then when something needs fixed or updated I have to "remember" what I all did. With this site I am hoping that when something needs fixed/changed/updated I don't have to spend hours relearning it and can complete the change in a couple minutes. Lofty goals. 

## The Search

I have used other documentation methods, simple text docs, onenote, [bookstack](https://www.bookstackapp.com/), [wordpress](https://wordpress.com), [mkdocs](https://mkdocs.org), to name some. In a previous position I had setup bookstack for company documentation and my current job we have confluence, both use/support Markdown, I really enjoy using markdown for documentation. Since I find selecting `insert table` and then formatting it to be slightly cumbersome, while it can look nicer I just want to do that with this site. Plus code display is easy with markdown. 

I first started searching on the best and cost effect away to host the site. It didn't take to long to find that github will host static website with their github pages. Bonus it is built on repositories so you get all the benefits of git. I went though [Github pages class](https://github.com/skills/github-pages) messing around with the platform they have by default, [jekyll](https://jekyllrb.com/). After going though that class I started messing around. The first thing I started trying to do was to figure out how to apply a theme. To Google I go!!

During my searching I came across a post on reddit, one person was talking about how they switched away from Jekyll to [Docusaurus](https://docusaurus.io). He mentioned that everytime there was a major version change he would have to fix something. I thought that would be annoying and wouldn't want to deal that. So I started look into Docusaurus.  After looking into it and comparing it, I liked it enough to try it. It takes markdown files and generates static pages from them. It can do the blog and document structure, it seems to have a lot of plugins and other features that I may use someday. One thing I didn't want to do was mess with permissions or structure that comes with bookstack (On a side note, if you are looking for an application to publish a KB at your work, look at [bookstack](https://bookstackapp.com).  It can do internal and external very easy and had great layout). The other deciding factor I wanted for this site was a low cost to host it. Which Github Pages can host the docusaurus.  

## Hosting
Now off to figuring out how to host the docusaurus site with ideally no cost, like github pages. At first I didn't think it was possible since I figured github would lock it to using justs their platform but after a single google search found it the docusaurus [documentation](https://docusaurus.io/docs/deployment#choosing-a-hosting-provider) shows that a lot places can host docusaurus. Github Pages and cloudflare pages jumped out to me, the azure static web app one peaked my interest also. I liked Github Pages due to it all being contained and I can continue to further my knowledge and experience with GitHub. Cloudflare since I use it for DNS, tunnel, their [1.1.1.1](https://1.1.1.1). At the end of the day I am currently on github pages but could easily switch to cloudflare pages. Technically at the moment of typing this I have it deployed to both...

## Bye!
That its for now. Going forward will probably be more technically since I want to document the process I went though getting Docusaurus working, plus I have some powershell scripts ready to be published. 

Bye!
