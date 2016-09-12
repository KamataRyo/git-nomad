# git-nomad

[![NPM Version][npm-image]][npm-url]


*git-nomad* provides your location to git commit message.
Inspired by [git-whereami][github-git-whereami-url].

## install
```
$ npm i -g git-nomad
```

## usage

```
$ git nomad -m"Update something"
$ git nomad --message "Update something"
```
Those commands works as well `$ git commit -m"Update something @lat, long"`.
`lat` and `long` represent your location when you make commit.

## Notes:

- OSX Only


[npm-image]: https://img.shields.io/npm/v/git-nomad.svg
[npm-url]: https://npmjs.org/package/git-nomad
[github-git-whereami-url]:(https://github.com/evantahler/git-whereami)
