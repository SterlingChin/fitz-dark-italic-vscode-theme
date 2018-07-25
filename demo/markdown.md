# Markdown Demo

[[TOC]]

## Standard Markdown

### Headers

# This is an h1
## This is an h2
### This is an h3
#### This is an h4
##### This is an h5
###### This is an h6

### Emphasis

*This text will be italic*

**This text will be bold**

***This text will be bold & italic***

You *can **also** combine* them

### Lists

#### Ordered

1. Item 1
1. Item 2
1. Item 3
    1. Item 3a
    1. Item 3b

#### Unordered

- Item 1
- Item 2
  - Item 2a
  - Item 2b

### Images

![GitHub Logo](../images/logo.png)

### Links

[GitHub](https://github.com)

### Block Quotes

As Kanye West said:
> We're living the future so
> the present is our past.

### Inline Code

I think you should use an
`<addr>` element here instead.

### Horizontal Rule

---

## GitHub Flavored Markdown

### Syntax Highlighting

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

or not

    function fancyAlert(arg) {
      if(arg) {
        $.facebox({div:'#foo'})
      }
    }

### Task Lists

- [x] @mentions, #refs, [links](#nowhere), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item

### Tables

| First Header                | Second Header                |
| --------------------------- | ---------------------------- |
| Content from cell 1         | Content from cell 2          |
| Content in the first column | Content in the second column |

### SHA References

16c999e8c71134401a78d4d46435517b2271d6ac
mojombo@16c999e8c71134401a78d4d46435517b2271d6ac
mojombo/github-flavored-markdown@16c999e8c71134401a78d4d46435517b2271d6ac

### Issue References Within a Repository

\#1
mojombo#1
mojombo/github-flavored-markdown#1

### Username @mentions

@sheafitzek

### Automatic Linking for URLs

http://www.github.com/

### Strikethrough

~~This will appear crossed out~~

### Emoji

GitHub supports emoji! :sparkles: :camel: :boom:

## Markdown-it Extensions

### Admonition

!!! note
    note with title
!!! summary summary, abstract, tldr
!!! info info, todo
!!! tip tip, hint
!!! success success, check, done
!!! question question, help, faq
!!! warning warning, attention, caution
!!! failure failure, fail, missing
!!! danger danger, error, bug
!!! example example, snippet
!!! quote quote, cite
    !!! note ""
        nested note, no title

### Enhanced Anchor Link

Go to
[Headers](#Headers)
[Lists](#Lists)

### Abbr

*[HTML]: Hyper Text Markup Language
*[W3C]:  World Wide Web Consortium

The HTML specification is maintained by the W3C.

### Deflist

Apple
:   Pomaceous fruit of plants of the genus Malus in the family Rosaceae.

### Sup / Sub

29^th^, H~2~O

### Checkbox

[ ] unchecked
[x] checked

### Attrs

item **bold red**{style="color:red"}

### Kbd

[[Ctrl+Esc]]

### Underline

_underline_

### Container

::::: container
:::: row
::: col-xs-6 alert alert-success
success text
:::
::: col-xs-6 alert alert-warning
warning text
:::
::::
:::::

### Flow Charts (Mermaid)

```mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
```

### Footnote

Here is a footnote reference,[^1] and another.[^longnote]

[^1]: Here is the footnote.
[^longnote]: Here's one with multiple blocks.
Here is a footnote reference,[1] and another.[2]
