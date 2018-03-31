# NodeJS: For building admin-ui Ember app.

set(NODEJS_VERSION 8.11.1)
set(NODEJS_HASH 6617e245fa0f7fbe0e373e71d543fea878315324ab31dc64b4eba10e42d04c11)
set(YARN_VERSION 1.5.1)
set(YARN_HASH 561ac9089c33402abece941bc424cdd4)

ExternalProject_Add(
  nodejs
  EXCLUDE_FROM_ALL 1
  URL https://nodejs.org/dist/v${NODEJS_VERSION}/node-v${NODEJS_VERSION}-linux-x64.tar.xz
  URL_HASH SHA256=${NODEJS_HASH}
  CONFIGURE_COMMAND ""
  BUILD_COMMAND ""
  INSTALL_COMMAND rsync -a -v <SOURCE_DIR>/ ${DEV_INSTALL_PREFIX}/
)

ExternalProject_Add(
  yarn
  EXCLUDE_FROM_ALL 1
  DEPENDS nodejs
  URL https://github.com/yarnpkg/yarn/releases/download/v${YARN_VERSION}/yarn-v${YARN_VERSION}.tar.gz
  URL_HASH MD5=${YARN_HASH}
  CONFIGURE_COMMAND ""
  BUILD_COMMAND ""
  INSTALL_COMMAND rsync -a -v --delete <SOURCE_DIR>/ ${DEV_INSTALL_PREFIX}/yarn/
    COMMAND cd ${DEV_INSTALL_PREFIX}/bin && ln -snf ../yarn/bin/yarn ./yarn
    # Remove the previous bin symlink that was necessary.
    COMMAND rm -f ${DEV_INSTALL_PREFIX}/bin/yarn.js
)
