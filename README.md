# A Barebones Blogging Scaffold with React and Tailwind

---

## What?

This is the source code for [my personal blog](https://yellow-cliff-04a5c980f.7.azurestaticapps.net/) 
with all the artwork and other proprietary stuff removed. It allows you to run a **very** barebones blogging
site provided you have a basic understanding of [React](https://react.dev/), 
[HTML / CSS](https://www.w3schools.com/htmlcss/), [Tailwind](https://tailwindcss.com/) 
and [Markdown](https://www.markdownguide.org/).
Since the code is very simple and was tailored to my personal needs, I expect it'll
mostly be useful for educational purposes.

---
## Why?

I wanted to start a blog, but didn't want to use an existing platform
and instead started thinking about what a minimal "framework" for blogging
tailored to engineers might look like - this is what I came up with.

It turns out one can strip out a lot of features we mostly take for granted
when thinking about content management systems (like a database) and still
end up with something that's usable and easy to update (in my opinion at least).

I also wanted to learn React and step out of my comfort zone of developing
front-end apps using mostly [Angular](https://angular.dev/) and [Bootstrap](https://getbootstrap.com/).

[The very first article](https://yellow-cliff-04a5c980f.7.azurestaticapps.net/articles/using-vanilla-react-as-a-micro-blogging-platform) 
on the blog goes into this topic in more detail.

---

## How?

You'll need to have [NodeJs](https://nodejs.org/en) installed. After cloning this repo,
simply run `npm install` and you should be able to run the site locally
with `npm run dev`.

---

## Authoring Articles

The basic idea behind the app is that articles are stored on disk
as `.md` files, which are retrieved via the `fetch` API and converted
to HTML. This allows for quick article authoring, previewing and publishing
if you're comfortable working with Markdown and don't need or don't want
a rich text editor.

As such, adding articles should be pretty simple:

1. Add a new `ArticleRecord` to the top of the `_articles` array
   in `ArticleService`:

```typescript
private readonly _articles: ArticleRecord[] = [
    {
        title: 'Newest Article',
        slug: 'newest-article',
        fileName: 'New',
        createdAtFriendly: 'June 1st, 2026.',
        category: CategoryService.miscellaneous,
        summary: `A snew article.`,
    },
    // other articles
];
```

2. Add a file named `New.md` to `/public/articles/`
3. Edit the file to your liking.
4. That's it. The article should now show up as the latest article on
   the home page, as well as in the article index, and it should be available
   via a unique URL: `/articles/newest-article`.

---

## Libraries & Tools Used

While it's evident which libraries the project uses from `package.json`,
I feel it's fair and useful to list them here, in no particular order:

- [ReactJs](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vite.dev/)
- [Tailwind](https://tailwindcss.com/)
- [Helmet](https://www.npmjs.com/package/react-helmet)
- [Hot Toast](https://react-hot-toast.com/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [React Feather Icons](https://www.npmjs.com/package/react-feather)

---

## Publishing

Since this project is a simple React app that gets packaged into what is basically
a static website (or, more precisely, a single page web app), you can publish / host
your work almost anywhere.

My preferred way is using [GitHub Actions](https://github.com/features/actions) 
to deploy to an Azure Static Web App every time I update the source code (which includes the articles).
Doing it this way would also allow you to use simple branching to work on
articles or other changes you want to preview but not neccessarily publish
immediately.

---

## Future Updates

The code in this repository is completely separate from the code base
I use for my personal blog - it has all artwork and other proprietary and
non-essential elements removed (I doubt anyone has need of my portrait in their project),
while keeping the core code base intact.

While I don't expect this core code base to change much in the near future,
I will try to update this public repo in case it does. At the time of this writing,
I can not plan for any sort of update schedule.