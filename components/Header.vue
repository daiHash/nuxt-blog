<template>
  <header>
    <div class="header-content">
      <div class="header-logo">
        <nuxt-link to="/">
          <h2>Nuxt Blog</h2>
        </nuxt-link>
      </div>

      <div class="header-nav">
        <nav>
          <ul>
            <!-- <li>
              <nuxt-link to="/posts">blog</nuxt-link>
            </li> -->

            <!-- <li>
              <nuxt-link to="/about">about</nuxt-link>
            </li> -->

            <li>
              <nuxt-link to="/admin">admin</nuxt-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {
    height: 80px;
    width: 100%;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
    .header-content {
      display: flex;
      align-items: center;
      width: 85%;
      height: 100%;
      margin: 0 auto;
      .header-logo {
        height: 100%;
        line-height: 80px;
        margin-right: auto;
        a {
          height: 100%;
          h2 {

          }
        }
      }

      .header-nav {
        margin-left: 40px;
        nav {
          ul {
            display: flex;
            li {
              width: auto;
              height: 100%;
              min-width: 100px;
              a {
                width: 100%;
                height: 100%;
                padding-bottom: 2px;
                transition: border-bottom .2s;
                &:hover {
                  border-bottom: 1px solid #000;
                }
                &.nuxt-link-active {
                  border-bottom: 1px solid #000;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

