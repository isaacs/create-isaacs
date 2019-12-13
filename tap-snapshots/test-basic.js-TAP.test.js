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
  "user.fullname": "full-name",
  "user.email": "email@address.com",
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
  "name": "tmp-test-basic",
  "version": "0.0.0",
  "description": "description",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
}
`

exports[`test/basic.js TAP basic > readme 1`] = `
# tmp-test-basic

description

`

exports[`test/basic.js TAP git-without-origin-0 > git config 1`] = `
Object {
  "user.fullname": "full-name",
  "user.email": "email@address.com",
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
  "name": "foo",
  "version": "0.0.0",
  "description": "",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
}
`

exports[`test/basic.js TAP git-without-origin-0 > readme 1`] = `
# foo
`

exports[`test/basic.js TAP git-without-origin-1 > git config 1`] = `
Object {
  "user.fullname": "full-name",
  "user.email": "email@address.com",
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
  "name": "foo",
  "version": "0.0.0",
  "description": "",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
}
`

exports[`test/basic.js TAP git-without-origin-1 > readme 1`] = `
# foo
`

exports[`test/basic.js TAP github-user-setting > git config 1`] = `
Object {
  "user.fullname": "full-name",
  "user.email": "email@address.com",
  "user.website": "https://my-website.com",
  "github.user": "foo",
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
  "name": "foo",
  "version": "0.0.0",
  "description": "",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
}
`

exports[`test/basic.js TAP github-user-setting > readme 1`] = `
# foo
`

exports[`test/basic.js TAP pre-existing-package > description 1`] = `
Buffer <64 65 73 63 72 69 62 65 20 74 68 65 20 74 68 69 6e 67 73 0a>
`

exports[`test/basic.js TAP pre-existing-package > git config 1`] = `
Object {
  "user.fullname": "full-name",
  "user.email": "email@address.com",
  "user.website": "https://my-website.com",
  "github.user": "foo",
}
`

exports[`test/basic.js TAP pre-existing-package > license 1`] = `
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

exports[`test/basic.js TAP pre-existing-package > output 1`] = `
git repo url: (https://github.com/foo/foo) 
`

exports[`test/basic.js TAP pre-existing-package > package.json 1`] = `
Object {
  "name": "foo",
  "version": "0.0.0",
  "description": "describe the things",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
}
`

exports[`test/basic.js TAP pre-existing-package > readme 1`] = `
# foo
`

exports[`test/basic.js TAP saved-configs-and-readme-0 > .git/description 1`] = `
description

`

exports[`test/basic.js TAP saved-configs-and-readme-0 > git config 1`] = `
Object {
  "user.fullname": "full-name",
  "user.email": "email@address.com",
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
  "name": "foo",
  "version": "0.0.0",
  "description": "description",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
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
  "user.fullname": "full-name",
  "user.email": "email@address.com",
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
  "name": "foo",
  "version": "0.0.0",
  "description": "description",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
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
  "user.fullname": "full-name",
  "user.email": "email@address.com",
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
  "name": "foo",
  "version": "0.0.0",
  "description": "description",
  "author": "full-name <email@address.com> (https://my-website.com)",
  "license": "ISC",
  "scripts": Object {
    "test": "tap",
    "snap": "tap",
    "preversion": "npm test",
    "postversion": "npm publish",
    "prepublishOnly": "git push origin --follow-tags",
  },
  "tap": Object {
    "check-coverage": true,
  },
}
`

exports[`test/basic.js TAP saved-configs-and-readme-2 > readme 1`] = `
# foo

description
  
`
