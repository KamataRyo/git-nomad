# git-nomad

[![NPM Version][npm-image]][npm-url]

git-nomad provides your geolocation to git commit message.

## install

### globally

```
$ npm i -g git-nomad
```

### locally
```
$ npm i git-nomad
```

## usage

```
$ git nomad -m"Update something"
$ git nomad --message "Update something"
```

Those commands work as well as `$ git commit -m"Update something @lat, long"`.

`lat` and `long` represent your location when you make commit.

## Notes:

- OSX Only so far

## Acknowledgement
Inspired by [git-whereami](https://github.com/evantahler/git-whereami).

Dependes on [WhereAmI](https://github.com/robmathers/WhereAmI), the OSX geolocation commandline tool.

[npm-image]: https://img.shields.io/npm/v/git-nomad.svg
[npm-url]: https://npmjs.org/package/git-nomad
