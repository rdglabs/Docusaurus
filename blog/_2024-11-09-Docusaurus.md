---
slug: docusaurus
title: Docusaurus
authors: [gillespr]
tags: [github, docusaurus]
---

# Docusaurus on Github Pages

What I wanted from this site and why did I select Docusaurus and Github Pages

<!-- truncate -->

As I mention in my last post I am wanting to document my process I took to learning and implementing azure and terraform, along with share my scripts. I also have a small homelab setup. The usually process that happens is; I set something up, get it working as intended, don't do anything with it for a few months. Then when something needs fixed or updated I have to "remember" what I all did. With this site I am hoping that when something needs fixed/changed/updated I don't have to spend hours relearning it and can complete the change in a couple minutes. Lofty goals. 

## Docusaurus

I have used other documentation methods, simple text docs, onenote, [bookstack](https://www.bookstackapp.com/), [wordpress](https://wordpress.com), [mkdocs](https://mkdocs.org), to name some. In a previous position I had setup bookstack for company documentation and my current job we have confluence, both use/support Markdown, I really enjoy using markdown for documentation. I find selecting `insert table` and then formatting it  to be cumbersome, while it can look nicer I just want to do that with this site. I came across Docusaurus via a post on reddit and after looking into it I like it enough to try it. It takes markdown files and generate static pages from them. It can do the blog and document structure, it seems to have a lot of plugins and other features, that I have not done anything with yet. Maybe one day. I didn't want to mess with permissions or structure that comes with bookstack. On a side note, if you are looking for application to publish an KB at your work, look at [bookstack](https://bookstackapp.com). It can do internal and external very easy and had good layout. The other deciding factor I wanted for this site was low cost to host it. 

## Hosting
I actually come across github pages before finding docusaurus. I was going though [Github pages class](https://github.com/skills/github-pages) messing around with the set up they have by default, using [jekyll](https://jekyllrb.com/). After going though that class I was tested it out and trying to figure out how to apply a theme. During this time I found a reddit post talking about Docusaurus and comparing it to Jekyll. After some quick researching into it decided to use it 

Now off to figuring out how to host the docusaurus site with ideally no cost, like github pages. At first I didn't think it was possible but later did figure out 