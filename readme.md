# Founders Pledge FED

- [Repo](https://github.com/telegraphcreative/founderspledge-fed)

- For a full introduction, reference this [Paper Document](https://paper.dropbox.com/doc/Founders-Readme--AYOsRSd1BBn4UVrFh5lrb_WgAQ-m3ZKqiXq01baNWetG9ari).

## Hugo + Tailwind + SASS + PurgeCSS

Powered by Laravel Mix, this site is built using Hugo to efficiently generate static html pages and webpack to handle assets.

## Local Environment

**Setup**

**Install packages**
`yarn install`

**Install Hugo**
`brew install hugo`

**Development Mode**
`yarn do`
Compiles JS, SASS, and HTML to `themes/founders/static/dist` and starts a hugo server at [http://localhost:1313/](http://localhost:1313/)

**Generate Distrubtion Files**
`yarn hugo`
Compiles JS, SASS, and HTML to `public`

`yarn build`
Runs purge on hugo distribution files (so run the hugo command first).

## File Structure

Development files are stored in the Hugo theme, `founders`

**Assets**

| Type        | Path                                   |
| :---------- | :------------------------------------- |
| JS Source   | `./themes/founders/src/js/app.js`      |
| Sass Source | `./themes/founders/src/scss/app.scss`  |
| Fonts       | `./themes/founders/src/assets/fonts`   |
| Favicons    | `./themes/founders/src/assets/favicon` |
| Images      | `./themes/founders/static/img`         |
| Layouts     | `./themes/founders/layouts`            |

**Layouts**

_Basics_

- Base template file: `baseof.html` (`./themes/founders/layouts/_default/baseof.html`)

- Hugo generates pages based on the `.md` files in the `content` directory

- The layout for each page is determined using the frontmatter variable, `layout`.

- Layouts are stored in the `themes/founders/layouts/page` directory

- Build pages using components found in `./themes/founders/layouts/partials`

_Add a page_

1. Run `hugo add new-page-name.md` Hugo will use the filename as the page handle.
2. Add a new layout to the `themes/founders/layouts/page`.
3. Reference the layout in the markdown file (only title and layout are required variables):

```
layout: how-it-works
```

4. Run `yarn do` to start developing, or `yarn hugo` to generate production files in `public`

**Partials**

| Name                    | Path                                                         |
| :---------------------- | :----------------------------------------------------------- |
| Section Header          | `./themes/founders/layouts/partials/section-header`          |
| Sub Section Header      | `./themes/founders/layouts/partials/sub-section-header`      |
| Media Article           | `./themes/founders/layouts/partials/media-article`           |
| Media Article --simple  | `./themes/founders/layouts/partials/media-article--simple`   |
| Media Article --feature | `./themes/founders/layouts/partials/media-article--features` |
| Headsup                 | `./themes/founders/layouts/partials/headsup--inline`         |
| Highlight Card          | `./themes/founders/layouts/partials/highlight-card`          |
| Logo List               | `./themes/founders/layouts/partials/logo-list`               |

### Flip Cards

**Types**

- -resource
- -press
- -feature
- -cta

#### Resource Data Model:

```
{
    "variation": "-resource",
    "icon": "icon-name.svg",
    "name": "Alleviate Poverty",
    "descr": "Giving money directly to those who most need it, so they can use it for what they most need it for",
    "link": {
    "variation": "link -underline",
        "text": "Read the Research",
        "url": "#"
    }
}
```

#### Press Data Model:

```
{
    "variation": "-press",
    "logo": "/dist/assets/img/fpo-logo-01.jpg",
    "descr": "“enables budding tycoons to donate a percentage of their future earnings to good causes, once they sell or list their businesses.”",
    "link": {
    "variation": "link -underline",
        "text": "Read full article",
        "url": "#"
    }
}
```

#### Feature Data Model:

```
{
    "variation": "-feature",
    "icon": "arrow--r.svg",
    "name": "Generous Vaction Time",
    "detail": "London Office Only",
    "descr": "Giving money directly to those who most need it, so they can use it for what they most need it for",
    "link": false
}
```

#### CTA Data Model:

```
{
    "variation": "-cta",
    "name": "Hear from our community.",
    "descr": "Subheading connecting the giving to missions back to the community. Humans doing good for other humans—connectedness.",
    "url": "#"
}
```
