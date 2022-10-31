---
title: "How to set Hugo RSS feed"
date:  2022-10-30
enableToc: true
openToc: true
tags: ["knowledge", "howto", "RSS", "Hugo"]
type: knowledge-note
---

# How to set Hugo RSS feed

## 🗒️Task:
Add RSS feed to your Hugo web site.

## 📝Instructions:
1.  Grab a copy of [that template](https://github.com/gohugoio/hugo/blob/master/tpl/tplimpl/embedded/templates/_default/rss.xml), and paste it into your site at `layouts/_default/rss.xml`.
2. Add `index.rss` file to the content root folder.
3. Paste a code into the `index.rss` file:
```html
<!-- /layouts/_default/rss.xml -->
<rss version="2.0"
    xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>{{ if eq  .Title  .Site.Title }}{{ .Site.Title }}{{ else }}{{ with .Title }}{{.}} on {{ end }}{{ .Site.Title }}{{ end }}</title>
        <link>{{ .Permalink }}</link>
        <description>Recent content {{ if ne  .Title  .Site.Title }}{{ with .Title }}in {{.}} {{ end }}{{ end }}on {{ .Site.Title }}</description>
        <generator>Hugo -- gohugo.io</generator>{{ with .Site.LanguageCode }}
        <language>{{.}}</language>{{end}}{{ with .Site.Author.email }}
        <managingEditor>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</managingEditor>{{end}}{{ with .Site.Author.email }}
        <webMaster>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</webMaster>{{end}}{{ with .Site.Copyright }}
        <copyright>{{.}}</copyright>{{end}}{{ if not .Date.IsZero }}
        <lastBuildDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</lastBuildDate>{{ end }}
    {{ with .OutputFormats.Get "RSS" }}
        {{ printf "<atom:link href=%q rel=\"self\" type=%q />" .Permalink .MediaType | safeHTML }}
    {{ end }}
    {{ range where (where .Site.Pages ".Section" "blog") "Kind" "page" }}
    <item>
<title>{{ .Title }}</title>
<link>{{ .Permalink }}</link>
<pubDate>{{ .Date.Format "Mon, 02 Jan 2006 15:04:05 -0700" | safeHTML }}</pubDate>
      {{ with .Site.Author.email }}<author>{{.}}{{ with $.Site.Author.name }} ({{.}}){{end}}</author>{{end}}
      <guid>{{ .Permalink }}</guid>
<description>{{- .Content | html -}}</description>
</item>
    {{ end }}
  </channel>
</rss>
```

## Outcome:
RSS feed file will be added to the output folder with the list of all your pages.

## 📖Further reading
[Tips for Customizing Hugo RSS Feeds | Ben Congdon (benjamincongdon.me)](https://benjamincongdon.me/blog/2020/01/14/Tips-for-Customizing-Hugo-RSS-Feeds/)

---
Template: [[templates/knowledge_note_how_to]]