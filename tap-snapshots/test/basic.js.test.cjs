/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/basic.js TAP basic > .git/description 1`] = `
description

`

exports[`test/basic.js TAP basic > git config 1`] = `
Object {
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP basic > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP basic > output 1`] = `
What is your full name? What is your email address? What is your website? git repo url: description of tmp-test-basic: 
`

exports[`test/basic.js TAP basic > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "description": "description",
  "files": Array [],
  "license": "ISC",
  "name": "tmp-test-basic",
  "repository": "https://github.com/basic/bar",
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP basic > readme 1`] = `
# tmp-test-basic

description

`

exports[`test/basic.js TAP git-without-origin-0 > git config 1`] = `
Object {
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP git-without-origin-0 > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP git-without-origin-0 > output 1`] = `
git repo url: description of foo: 
`

exports[`test/basic.js TAP git-without-origin-0 > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "description": "",
  "files": Array [],
  "license": "ISC",
  "name": "foo",
  "repository": "https://github.com/git-without-origin/bar",
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP git-without-origin-0 > readme 1`] = `
# foo
`

exports[`test/basic.js TAP git-without-origin-1 > git config 1`] = `
Object {
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP git-without-origin-1 > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP git-without-origin-1 > output 1`] = `
git repo url: description of foo: 
`

exports[`test/basic.js TAP git-without-origin-1 > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "description": "",
  "files": Array [],
  "license": "ISC",
  "name": "foo",
  "repository": "https://github.com/git-without-origin/bar",
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP git-without-origin-1 > readme 1`] = `
# foo
`

exports[`test/basic.js TAP github-user-setting > git config 1`] = `
Object {
  "github.user": "foo",
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP github-user-setting > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP github-user-setting > output 1`] = `
git repo url: (https://github.com/foo/foo) description of foo: 
`

exports[`test/basic.js TAP github-user-setting > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "description": "",
  "files": Array [],
  "license": "ISC",
  "name": "foo",
  "repository": "https://github.com/github-user-setting/bar",
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP github-user-setting > readme 1`] = `
# foo
`

exports[`test/basic.js TAP pre-existing-package, has files > description 1`] = `
Buffer <6465 7363 7269 6265 2074 6865 2074 6869 6e67 730a  describe.the.things.>
`

exports[`test/basic.js TAP pre-existing-package, has files > git config 1`] = `
Object {
  "github.user": "foo",
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP pre-existing-package, has files > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP pre-existing-package, has files > output 1`] = `
git repo url: (https://github.com/foo/foo) 
`

exports[`test/basic.js TAP pre-existing-package, has files > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "bin": "bin/foo.js",
  "description": "describe the things",
  "files": Array [
    "bin/foo.js",
    "doesnt-exist",
    "index.js",
  ],
  "license": "ISC",
  "name": "foo",
  "repository": "https://github.com/foo/foo",
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "tap": Object {
    "check-coverage": true,
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP pre-existing-package, has files > readme 1`] = `
# foo
`

exports[`test/basic.js TAP pre-existing-package, obj bin > description 1`] = `
Buffer <6465 7363 7269 6265 2074 6865 2074 6869 6e67 730a  describe.the.things.>
`

exports[`test/basic.js TAP pre-existing-package, obj bin > git config 1`] = `
Object {
  "github.user": "foo",
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP pre-existing-package, obj bin > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP pre-existing-package, obj bin > output 1`] = `
git repo url: (https://github.com/foo/foo) 
`

exports[`test/basic.js TAP pre-existing-package, obj bin > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "bin": Object {
    "foo": "bin/foo.js",
  },
  "description": "describe the things",
  "files": Array [
    "bin/",
  ],
  "license": "ISC",
  "name": "foo",
  "repository": "https://github.com/foo/foo",
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "tap": Object {
    "check-coverage": true,
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP pre-existing-package, obj bin > readme 1`] = `
# foo
`

exports[`test/basic.js TAP pre-existing-package, string bin > description 1`] = `
Buffer <6465 7363 7269 6265 2074 6865 2074 6869 6e67 730a  describe.the.things.>
`

exports[`test/basic.js TAP pre-existing-package, string bin > git config 1`] = `
Object {
  "github.user": "foo",
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP pre-existing-package, string bin > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP pre-existing-package, string bin > output 1`] = `
git repo url: (https://github.com/foo/foo) 
`

exports[`test/basic.js TAP pre-existing-package, string bin > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "bin": "bin/foo.js",
  "description": "describe the things",
  "files": Array [
    "bin/",
  ],
  "license": "ISC",
  "name": "foo",
  "repository": "https://github.com/foo/foo",
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "tap": Object {
    "check-coverage": true,
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP pre-existing-package, string bin > readme 1`] = `
# foo
`

exports[`test/basic.js TAP saved-configs-and-readme-0 > .git/description 1`] = `
description

`

exports[`test/basic.js TAP saved-configs-and-readme-0 > git config 1`] = `
Object {
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP saved-configs-and-readme-0 > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP saved-configs-and-readme-0 > output 1`] = `
null
`

exports[`test/basic.js TAP saved-configs-and-readme-0 > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "description": "description",
  "files": Array [],
  "license": "ISC",
  "name": "foo",
  "repository": Object {
    "type": "git",
    "url": "git+https://github.com/oc-0/bar",
  },
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP saved-configs-and-readme-0 > readme 1`] = `
# foo

description
  
`

exports[`test/basic.js TAP saved-configs-and-readme-1 > .git/description 1`] = `
description

`

exports[`test/basic.js TAP saved-configs-and-readme-1 > git config 1`] = `
Object {
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP saved-configs-and-readme-1 > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP saved-configs-and-readme-1 > output 1`] = `
null
`

exports[`test/basic.js TAP saved-configs-and-readme-1 > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "description": "description",
  "files": Array [],
  "license": "ISC",
  "name": "foo",
  "repository": Object {
    "type": "git",
    "url": "git+https://github.com/oc-1/bar",
  },
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP saved-configs-and-readme-1 > readme 1`] = `
# foo

description
  
`

exports[`test/basic.js TAP saved-configs-and-readme-2 > .git/description 1`] = `
description

`

exports[`test/basic.js TAP saved-configs-and-readme-2 > git config 1`] = `
Object {
  "user.email": "email@address.com",
  "user.fullname": "full-name",
  "user.website": "https://my-website.com",
}
`

exports[`test/basic.js TAP saved-configs-and-readme-2 > license 1`] = `
The ISC License

Copyright (c) full-name and Contributors

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR
IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

`

exports[`test/basic.js TAP saved-configs-and-readme-2 > output 1`] = `
null
`

exports[`test/basic.js TAP saved-configs-and-readme-2 > package.json 1`] = `
Object {
  "author": "full-name <email@address.com> (https://my-website.com)",
  "description": "description",
  "files": Array [],
  "license": "ISC",
  "name": "foo",
  "repository": Object {
    "type": "git",
    "url": "git://some-other-place/blerg.git",
  },
  "scripts": Object {
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
    "preversion": "npm test",
    "snap": "tap",
    "test": "tap",
  },
  "version": "0.0.0",
}
`

exports[`test/basic.js TAP saved-configs-and-readme-2 > readme 1`] = `
# foo

description
  
`
