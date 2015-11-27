



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>janl/mustache.js</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="janl/mustache.js" name="twitter:title" /><meta content="mustache.js - Minimal templating with {{mustaches}} in JavaScript" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/11321?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/11321?v=3&amp;s=400" property="og:image" /><meta content="janl/mustache.js" property="og:title" /><meta content="https://github.com/janl/mustache.js" property="og:url" /><meta content="mustache.js - Minimal templating with {{mustaches}} in JavaScript" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTcwNDgwNTpkMWZmYTM4YjVkYzk5YTZlYmEyMzkxYTY3ZjJmODgwNzplODk3MGFkYjIzYWRlNmExNGYxODA2Yjk2MGM4NmUyZjdiMzMzNzhjODY4NDE4Zjk0MTZmYTk2NGNhMmExYjg4--6d92c4097705ac62b6d041907393ba01427cb2cd">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="B75CD775:26AF:BA172C6:5657F033" name="octolytics-dimension-request_id" /><meta content="1704805" name="octolytics-actor-id" /><meta content="jiaoyilun" name="octolytics-actor-login" /><meta content="1324a993a2b856423fbe25f9bb2ab9ebc3540295cf3cbebc63d0846b248927d9" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, files#disambiguate" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged In">
    <meta class="js-ga-set" name="dimension4" content="New repo nav">




    <meta name="is-dotcom" content="true">
        <meta name="hostname" content="github.com">
    <meta name="user-login" content="jiaoyilun">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="35c197c69238cd5f4a7448f9cdc87058f5651e5a" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-3698fb0adc53fda9a2672a02c3fa3b20b89480f2a47ce38216b21cf3eb5b4750.css" integrity="sha256-Npj7CtxT/amiZyoCw/o7ILiUgPKkfOOCFrIc8+tbR1A=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-912fc0b3ba75b656d2d1687e8be122647344ab57d955de8f6635ee88161cf450.css" integrity="sha256-kS/As7p1tlbS0Wh+i+EiZHNEq1fZVd6PZjXuiBYc9FA=" media="all" rel="stylesheet" />
    
    
    


    <meta http-equiv="x-pjax-version" content="ea5f350928a02058c50a6aed5b15b966">

      
  <meta name="description" content="mustache.js - Minimal templating with {{mustaches}} in JavaScript">
  <meta name="go-import" content="github.com/janl/mustache.js git https://github.com/janl/mustache.js.git">

  <meta content="11321" name="octolytics-dimension-user_id" /><meta content="janl" name="octolytics-dimension-user_login" /><meta content="326688" name="octolytics-dimension-repository_id" /><meta content="janl/mustache.js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="326688" name="octolytics-dimension-repository_network_root_id" /><meta content="janl/mustache.js" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/janl/mustache.js/commits/master.atom" rel="alternate" title="Recent Commits to mustache.js:master" type="application/atom+xml">

  </head>


  <body class="logged_in   env-production windows vis-public">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/janl/mustache.js/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/janl/mustache.js/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
      </div>

      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item">
      <span class="js-socket-channel js-updatable-content"
        data-channel="notification-changed:jiaoyilun"
        data-url="/notifications/header">
      <a href="/notifications" aria-label="You have no unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:read" data-hotkey="g n">
          <span class="mail-status all-read"></span>
          <span class="octicon octicon-bell"></span>
</a>  </span>

  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus left"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>


  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="janl/mustache.js">This repository</span>
  </div>
    <a class="dropdown-item" href="/janl/mustache.js/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-s js-menu-target" href="/jiaoyilun"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@jiaoyilun" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/1704805?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu  dropdown-menu-sw">
        <div class=" dropdown-header header-nav-current-user css-truncate">
            Signed in as <strong class="css-truncate-target">jiaoyilun</strong>

        </div>


        <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/jiaoyilun" data-ga-click="Header, go to profile, text:your profile">
            Your profile
          </a>
        <a class="dropdown-item" href="/stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

          <div class="dropdown-divider"></div>

          <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
            Settings
          </a>

          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="35c197c69238cd5f4a7448f9cdc87058f5651e5a" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="55TLv40/pdnl2ZnfYdsn/ULrBsvWWIclhCHXoGJw7ku+BgbTYA0AqwidkG20P1/dGO5ThdgSzdwo5JSVmYWr7Q==" /></div>
            <button class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
              Sign out
            </button>
</form>
      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>

      

      


    <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="35c197c69238cd5f4a7448f9cdc87058f5651e5a" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="BkDd0uWfHuC1eK4QGeprXNNNrPB/bzzdmtsNzvESazdpVr5k1uvVqyFGFXlR708W9WpZ3xrtDwtcXi0J53gqYw==" /></div>      <input id="repository_id" name="repository_id" type="hidden" value="326688" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/janl/mustache.js/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:files#disambiguate">
            <span class="js-select-button">
              <span class="octicon octicon-eye"></span>
              Watch
            </span>
          </a>
          <a class="social-count js-social-count" href="/janl/mustache.js/watchers">
            376
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header">
              <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-eye"></span>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <span class="select-menu-item-icon octicon octicon-check"></span>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <span class="octicon octicon-mute"></span>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/janl/mustache.js/unstar" class="js-toggler-form starred js-unstar-button" data-form-nonce="35c197c69238cd5f4a7448f9cdc87058f5651e5a" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="MUUBtqx0ZLb8h38ibNeTTCTSDUQvJ3o3jw8Py1mTPIro2gg0NnFJzreTaB/CVZv4RFNrxVgoOEiDhh+his4Gkg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar janl/mustache.js"
        data-ga-click="Repository, click unstar button, action:files#disambiguate; text:Unstar">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/janl/mustache.js/stargazers">
          8,564
        </a>
</form>
    <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/janl/mustache.js/star" class="js-toggler-form unstarred js-star-button" data-form-nonce="35c197c69238cd5f4a7448f9cdc87058f5651e5a" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="HF41n92B6wnn9ESdQ5slBCJLN9/Eb/5n827XooLQhnd/HbYlmtUeRHjARnnQUH/veWhugRa1CzwDawWnUnVclg==" /></div>
      <button
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star janl/mustache.js"
        data-ga-click="Repository, click star button, action:files#disambiguate; text:Star">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/janl/mustache.js/stargazers">
          8,564
        </a>
</form>  </div>

  </li>

  <li>
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/janl/mustache.js/fork" class="btn-with-count" data-form-nonce="35c197c69238cd5f4a7448f9cdc87058f5651e5a" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Q0ZyBU1tGDADWGGQou0DMyBbW/LREENnEDgu5PlBAVIpH3be6JiHCmEr8vPKgEDIzDthlzvp/McJslv7tPZ8lg==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:files#disambiguate; text:Fork"
                title="Fork your own copy of janl/mustache.js to your account"
                aria-label="Fork your own copy of janl/mustache.js to your account">
              <span class="octicon octicon-repo-forked"></span>
              Fork
            </button>
</form>
    <a href="/janl/mustache.js/network" class="social-count">
      1,743
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo"></span>
  <span class="author"><a href="/janl" class="url fn" itemprop="url" rel="author"><span itemprop="title">janl</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/janl/mustache.js" data-pjax="#js-repo-pjax-container">mustache.js</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/janl/mustache.js/issues/counts">

  <a href="/janl/mustache.js" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /janl/mustache.js">
    <span class="octicon octicon-code"></span>
    Code
</a>
    <a href="/janl/mustache.js/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /janl/mustache.js/issues">
      <span class="octicon octicon-issue-opened"></span>
      Issues
      <span class="counter">13</span>

</a>
  <a href="/janl/mustache.js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /janl/mustache.js/pulls">
    <span class="octicon octicon-git-pull-request"></span>
    Pull requests
    <span class="counter">30</span>

</a>
    <a href="/janl/mustache.js/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /janl/mustache.js/wiki">
      <span class="octicon octicon-book"></span>
      Wiki
</a>
  <a href="/janl/mustache.js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /janl/mustache.js/pulse">
    <span class="octicon octicon-pulse"></span>
    Pulse
</a>
  <a href="/janl/mustache.js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /janl/mustache.js/graphs">
    <span class="octicon octicon-graph"></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container repo-container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
<span id="js-show-full-navigation"></span>

  <div class="repository-meta js-details-container">
  <span class="repository-meta-content">
        Minimal templating with {{mustaches}} in JavaScript
        <a href="http://mustache.github.com/" rel="nofollow">http://mustache.github.com/</a>
  </span>

</div>


<div class="overall-summary overall-summary-bottomless">

  <div class="stats-switcher-viewport js-stats-switcher-viewport">
    <div class="stats-switcher-wrapper">
    <ul class="numbers-summary">
      <li class="commits">
        <a data-pjax href="/janl/mustache.js/commits/master">
            <span class="octicon octicon-history"></span>
            <span class="num text-emphasized">
              672
            </span>
            commits
        </a>
      </li>
      <li>
        <a data-pjax href="/janl/mustache.js/branches">
          <span class="octicon octicon-git-branch"></span>
          <span class="num text-emphasized">
            12
          </span>
          branches
        </a>
      </li>

      <li>
        <a data-pjax href="/janl/mustache.js/releases">
          <span class="octicon octicon-tag"></span>
          <span class="num text-emphasized">
            31
          </span>
          releases
        </a>
      </li>

      <li>
        
  <a href="/janl/mustache.js/graphs/contributors">
    <span class="octicon octicon-organization"></span>
    <span class="num text-emphasized">
      79
    </span>
    contributors
  </a>
      </li>
    </ul>

      <div class="repository-lang-stats">
        <ol class="repository-lang-stats-numbers">
          <li>
              <a href="/janl/mustache.js/search?l=javascript">
                <span class="color-block language-color" style="background-color:#f1e05a;"></span>
                <span class="lang">JavaScript</span>
                <span class="percent">82.2%</span>
              </a>
          </li>
          <li>
              <a href="/janl/mustache.js/search?l=html">
                <span class="color-block language-color" style="background-color:#e44b23;"></span>
                <span class="lang">HTML</span>
                <span class="percent">10.1%</span>
              </a>
          </li>
          <li>
              <a href="/janl/mustache.js/search?l=ruby">
                <span class="color-block language-color" style="background-color:#701516;"></span>
                <span class="lang">Ruby</span>
                <span class="percent">6.2%</span>
              </a>
          </li>
          <li>
              <a href="/janl/mustache.js/search?l=bash">
                <span class="color-block language-color" style="background-color:#89e051;"></span>
                <span class="lang">Shell</span>
                <span class="percent">1.5%</span>
              </a>
          </li>
        </ol>
      </div>
    </div>
  </div>

</div>

  <div class="repository-lang-stats-graph js-toggle-lang-stats" title="Click for language details">
    <span class="language-color" aria-label="JavaScript 82.2%" style="width:82.2%; background-color:#f1e05a;" itemprop="keywords">JavaScript</span>
    <span class="language-color" aria-label="HTML 10.1%" style="width:10.1%; background-color:#e44b23;" itemprop="keywords">HTML</span>
    <span class="language-color" aria-label="Ruby 6.2%" style="width:6.2%; background-color:#701516;" itemprop="keywords">Ruby</span>
    <span class="language-color" aria-label="Shell 1.5%" style="width:1.5%; background-color:#89e051;" itemprop="keywords">Shell</span>
  </div>

<include-fragment src="/janl/mustache.js/show_partial?partial=tree%2Frecently_touched_branches_list"></include-fragment>

  <div class="file-navigation in-mid-page file-navigation-new">
  <div class="right">
    <div class="btn-group">
      
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/janl/mustache.js/new/master" class="button_to js-new-blob-form" data-form-nonce="35c197c69238cd5f4a7448f9cdc87058f5651e5a" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="c5Oxo9/k9fyfwBsfRhr0M59LbyBhaQ22gB8fcFaQNl7eBvlmX26OM5plKRVFwXvgn3J9mT0Ncl8CWfJYxcpCvg==" /></div>
    <button class="btn btn-sm tooltipped tooltipped-n js-new-blob-submit" type="submit"
      data-disable-with="working…" aria-label="Fork this project and create a new file">
      New file
    </button>
</form>


      <a href="/janl/mustache.js/find/master"
        class="btn btn-sm empty-icon right js-show-file-finder"
        data-pjax
        data-hotkey="t"
        data-ga-click="Repository, find file, location:repo overview">
        Find file
      </a>
    </div>
      <div class="file-navigation-options" data-multiple>

        <div class="file-navigation-option">
          <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/users/set_protocol" class="js-set-user-protocol-preference" data-form-nonce="35c197c69238cd5f4a7448f9cdc87058f5651e5a" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="yovZ/kK72CCvruqUxwIL1qHWlTG/B1nq62fgjMmj5C+/e1MywZhj1SRMN9gfMAxRURlKSTqPdM8f3xAcSE04GA==" /></div>
            <input type="hidden" name="protocol_type" value="clone">

            <div class="select-menu js-menu-container js-select-menu">
              <div class="input-group js-select-button js-zeroclipboard-container">
                <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="input-monospace input-mini js-zeroclipboard-target js-url-field" value="https://github.com/janl/mustache.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
</div>

              </div>

              <div class="select-menu-modal-holder">
                <div class="select-menu-modal js-menu-content" aria-hidden="true">
                  <div class="select-menu-header">
                    <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
                    <span class="select-menu-title">Choose a clone URL</span>
                  </div>

                  <div class="select-menu-list js-navigation-container" role="menu">
                      <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                        <span class="select-menu-item-icon octicon octicon-check"></span>
                        <div class="select-menu-item-text">
                          <input type="radio" name="protocol_selector" value="http" checked>
                          <span class="select-menu-item-heading">
                            HTTPS
                            (recommended)
                          </span>
                            <span class="description">
                              Clone with Git or checkout with SVN using the repository's web address.
                            </span>
                          <span class="js-select-button-text hidden-select-button-text">
                            <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone HTTPS, location:repo overview">
    HTTPS
  </button>
</div>
<input type="text" class="input-monospace input-mini js-zeroclipboard-target js-url-field" value="https://github.com/janl/mustache.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
</div>

                          </span>
                        </div>
                      </div>
                      <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                        <span class="select-menu-item-icon octicon octicon-check"></span>
                        <div class="select-menu-item-text">
                          <input type="radio" name="protocol_selector" value="ssh" >
                          <span class="select-menu-item-heading">
                            SSH
                            
                          </span>
                            <span class="description">
                              Clone with an SSH key and passphrase from your GitHub settings.
                            </span>
                          <span class="js-select-button-text hidden-select-button-text">
                            <div class="input-group-button">
  <button type="button" class="btn btn-sm select-menu-button js-menu-target" data-ga-click="Repository, clone SSH, location:repo overview">
    SSH
  </button>
</div>
<input type="text" class="input-monospace input-mini js-zeroclipboard-target js-url-field" value="git@github.com:janl/mustache.js.git" readonly>
<div class="input-group-button">
  <button aria-label="Copy to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
</div>

                          </span>
                        </div>
                      </div>
                  </div>
                  <div class="select-menu-list" role="menu">
                    <a class="select-menu-item select-menu-action" href="https://help.github.com/articles/which-remote-url-should-i-use" target="_blank">
                      <span class="select-menu-item-icon octicon octicon-question"></span>
                      <div class="select-menu-item-text">
                        Learn more about clone URLs
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
</form>        </div>

        <div class="file-navigation-option">
    <a href="github-windows://openRepo/https://github.com/janl/mustache.js" class="btn btn-sm tooltipped tooltipped-s tooltipped-multiline" aria-label="Save janl/mustache.js to your computer and use it in GitHub Desktop.">
      <span class="octicon octicon-desktop-download"></span>
    </a>
</div>


        <div class="file-navigation-option">
          <a href="/janl/mustache.js/archive/master.zip"
             class="btn btn-sm"
             rel="nofollow"
             data-ga-click="Repository, download zip, location:repo overview">
            Download ZIP
          </a>
        </div>
      </div>
  </div>

  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/0.4.x"
               data-name="0.4.x"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="0.4.x">
                0.4.x
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/fix_commonjs"
               data-name="fix_commonjs"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="fix_commonjs">
                fix_commonjs
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/gh-pages"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="gh-pages">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/greenkeeper-chai-3.4.0"
               data-name="greenkeeper-chai-3.4.0"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="greenkeeper-chai-3.4.0">
                greenkeeper-chai-3.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/greenkeeper-eslint-1.5.1"
               data-name="greenkeeper-eslint-1.5.1"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="greenkeeper-eslint-1.5.1">
                greenkeeper-eslint-1.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/greenkeeper-mocha-2.3.3"
               data-name="greenkeeper-mocha-2.3.3"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="greenkeeper-mocha-2.3.3">
                greenkeeper-mocha-2.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/greenkeeper-pin"
               data-name="greenkeeper-pin"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="greenkeeper-pin">
                greenkeeper-pin
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/helpers"
               data-name="helpers"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="helpers">
                helpers
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/janl/mustache.js/tree/master"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/new-build-system"
               data-name="new-build-system"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="new-build-system">
                new-build-system
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/parser-rewrite"
               data-name="parser-rewrite"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="parser-rewrite">
                parser-rewrite
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/janl/mustache.js/tree/with-js-extras"
               data-name="with-js-extras"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="with-js-extras">
                with-js-extras
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v2.2.0"
                 data-name="v2.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.2.0">v2.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v2.1.3"
                 data-name="v2.1.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.3">v2.1.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v2.1.2"
                 data-name="v2.1.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.2">v2.1.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v2.1.1"
                 data-name="v2.1.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.1">v2.1.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v2.1.0"
                 data-name="v2.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.1.0">v2.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v2.0.0"
                 data-name="v2.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v2.0.0">v2.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v1.2.0"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v1.1.0"
                 data-name="v1.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.1.0">v1.1.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/v1.0.0"
                 data-name="v1.0.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="v1.0.0">v1.0.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.8.2"
                 data-name="0.8.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8.2">0.8.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.8.1"
                 data-name="0.8.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8.1">0.8.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.8.0"
                 data-name="0.8.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8.0">0.8.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.3"
                 data-name="0.7.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.3">0.7.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.2"
                 data-name="0.7.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.2">0.7.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.1"
                 data-name="0.7.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.1">0.7.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.7.0"
                 data-name="0.7.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7.0">0.7.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.6.0"
                 data-name="0.6.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.6.0">0.6.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.2"
                 data-name="0.5.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.2">0.5.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.2-vsc"
                 data-name="0.5.2-vsc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.2-vsc">0.5.2-vsc</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.1"
                 data-name="0.5.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.1">0.5.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.1-vsc"
                 data-name="0.5.1-vsc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.1-vsc">0.5.1-vsc</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.5.0-vsc"
                 data-name="0.5.0-vsc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5.0-vsc">0.5.0-vsc</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.4.2"
                 data-name="0.4.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.2">0.4.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.4.1"
                 data-name="0.4.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.1">0.4.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.4.0"
                 data-name="0.4.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4.0">0.4.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.3.0"
                 data-name="0.3.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3.0">0.3.0</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2.3"
                 data-name="0.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.3">0.2.3</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2.2"
                 data-name="0.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.2">0.2.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2.1"
                 data-name="0.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.1">0.2.1</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.2"
                 data-name="0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2">0.2</a>
            </div>
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/janl/mustache.js/tree/0.1"
                 data-name="0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1">0.1</a>
            </div>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>


    <a href="/janl/mustache.js/pull/new/master" class="btn btn-sm btn-primary" data-pjax data-ga-click="Repository, new pull request, location:repo overview">
      New pull request
    </a>

  <div class="breadcrumb">
    
  </div>
</div>





  <div class="commit-tease js-details-container">
    <span class="right">
      Latest commit
      <a class="commit-tease-sha" href="/janl/mustache.js/commit/34ebd1cb1aa714b2dd8c87491b8940bf4f8973c1" data-pjax>
        34ebd1c
      </a>
      <time datetime="2015-11-23T11:17:48Z" is="relative-time">Nov 23, 2015</time>
    </span>


    <span class="commit-author-section">
      <img alt="@dasilvacontin" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1260830?v=3&amp;s=40" width="20" />
      <a href="/dasilvacontin" class="user-mention" rel="contributor">dasilvacontin</a>
    </span>

        <a href="/janl/mustache.js/commit/34ebd1cb1aa714b2dd8c87491b8940bf4f8973c1" class="message" data-pjax="true" title="Merge pull request #530 from janl/improve-html-escaping

Improve HTML escaping">Merge pull request</a> <a href="https://github.com/janl/mustache.js/pull/530" class="issue-link" title="Improve HTML escaping">#530</a> <a href="/janl/mustache.js/commit/34ebd1cb1aa714b2dd8c87491b8940bf4f8973c1" class="message" data-pjax="true" title="Merge pull request #530 from janl/improve-html-escaping

Improve HTML escaping">from janl/improve-html-escaping</a>
          <span class="hidden-text-expander inline">
            <a href="#" class="js-details-target">…</a>
          </span>
    </span>

      <div class="commit-desc"><pre class="text-small">Improve HTML escaping</pre></div>
  </div>


<div class="file-wrap">
  <a href="/janl/mustache.js/tree/34ebd1cb1aa714b2dd8c87491b8940bf4f8973c1" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <table class="files js-navigation-container js-active-navigation-container" data-pjax>


    <tbody>
      <tr class="warning include-fragment-error">
        <td class="icon"><span class="octicon octicon-alert"></span></td>
        <td class="content" colspan="3">Failed to load latest commit information.</td>
      </tr>

        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/tree/master/bin" class="js-directory-link js-navigation-open" id="c1111bd512b29e821b120b86446026b8-a59ce583e0fcd1026412df0cc8c3d66a3fb4ec37" title="bin">bin</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/cbcd788b0cf1438fc7bf70d720044813ccc2c12f" class="message" data-pjax="true" title="Linting CLI tool.

Also minor .eslintrc change to be able to use `process.exit()`,
instead of having to `throw new Error()` to exit the process.">Linting CLI tool.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-15T08:54:24Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/tree/master/hooks" class="js-directory-link js-navigation-open" id="4e819c837d54a6ed09abc77a8560a66f-c53711d10c4e2ccff1d8e3cfbd44c9175bd01c73" title="hooks">hooks</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="https://github.com/janl/mustache.js/issues/462" class="issue-link" title="make 'hooks/install-hooks.sh' more verbose">#462</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-08-10T07:02:43Z" is="time-ago">Aug 10, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/tree/master/spec/_files" class="js-directory-link js-navigation-open" id="cd5c81c3067100de65f857739bc82fd6-3cc7a5d7b6cc09e825f17438250b94b0db7d49bc" title="This path skips through empty directories"><span class="simplified-path">spec/</span>_files</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/ca42511e21c8e8760ee2ea8949c92b61fbf5717b" class="message" data-pjax="true" title="Merge pull request #177 from subzey/master

BOM as whitespace test case">Merge pull request</a> <a href="https://github.com/janl/mustache.js/pull/177" class="issue-link" title="BOM as whitespace test case">#177</a> <a href="/janl/mustache.js/commit/ca42511e21c8e8760ee2ea8949c92b61fbf5717b" class="message" data-pjax="true" title="Merge pull request #177 from subzey/master

BOM as whitespace test case">from subzey/master</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-09T14:53:01Z" is="time-ago">May 9, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/tree/master/test" class="js-directory-link js-navigation-open" id="098f6bcd4621d373cade4e832627b4f6-92e922fc829f37dd5159f691ce15c6d49ae340ab" title="test">test</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/378bcca8a5cfe4058f294a3dbb78e8755e8e0da5" class="message" data-pjax="true" title="Improve HTML escaping.

This closes a couple of potential exploit scenarios.
Backtick (`) for older IEs and equals (=) for unquoted attributes.

Refs https://github.com/wycats/handlebars.js/commit/83b8e846a3569bd366cf0b6bdc1e4604d1a2077e
Closes https://github.com/janl/mustache.js/pull/388">Improve HTML escaping.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-11-17T08:14:32Z" is="time-ago">Nov 17, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-directory"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/tree/master/wrappers" class="js-directory-link js-navigation-open" id="d0f511719ab495b7fabd1e190a5451c9-7f3c2c28ad1bc73e494fc28b0738db871ece3850" title="wrappers">wrappers</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/500fd5d825fb7a353b82e593ecd2719cf06e691e" class="message" data-pjax="true" title="Updated qooxdoo templates.">Updated qooxdoo templates.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2014-02-06T14:25:40Z" is="time-ago">Feb 6, 2014</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/.eslintrc" class="js-directory-link js-navigation-open" id="1dc6ee56b778cd91e0327b52aaeaa1b9-06a83601540a839bad3fe8b1e1f4bce6905a9199" title=".eslintrc">.eslintrc</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/cbcd788b0cf1438fc7bf70d720044813ccc2c12f" class="message" data-pjax="true" title="Linting CLI tool.

Also minor .eslintrc change to be able to use `process.exit()`,
instead of having to `throw new Error()` to exit the process.">Linting CLI tool.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-15T08:54:24Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/.gitignore" class="js-directory-link js-navigation-open" id="a084b794bc0759e7a6b77810e01874f2-6ad717ee4c49fe1df74cdadda23d6530c97fc4d7" title=".gitignore">.gitignore</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/cb14bb2dd6bd547a529cdc11aa895a9fbbe1fa4f" class="message" data-pjax="true" title="don&#39;t push auto-generated browser render test">don't push auto-generated browser render test</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-05-19T17:45:35Z" is="time-ago">May 19, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/.gitmodules" class="js-directory-link js-navigation-open" id="8903239df476d7401cf9e76af0252622-9e2fdf850b93a9a96b987c2616407798d16fe36b" title=".gitmodules">.gitmodules</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/5e583585744be0601df701065500b7b40472d157" class="message" data-pjax="true" title="Include submodule for Mustache specifications.">Include submodule for Mustache specifications.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-03-16T09:24:17Z" is="time-ago">Mar 16, 2013</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/.travis.yml" class="js-directory-link js-navigation-open" id="354f30a63fb0907d4ad57269548329e3-241e84a83fd46877df4d39ae51da6d47a75c41ea" title=".travis.yml">.travis.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/d1019d298cef23dc50451f20b6bc6b22d21d1303" class="message" data-pjax="true" title="npm 2.x and node v4 on Travis

Use latest v2 release of npm as the just released v3 doesnt seem to be node v0.8 compliant atm.

And test on node v4 for obvious reasons.">npm 2.x and node v4 on Travis</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-09-18T06:56:56Z" is="time-ago">Sep 18, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/.zuul.yml" class="js-directory-link js-navigation-open" id="76b2596360a5d338d6cd7132af537418-b2efeea0e428fa98a8d2217e973fe686d6971480" title=".zuul.yml">.zuul.yml</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/ac447ec05321a4d46156f000e3480a242434f230" class="message" data-pjax="true" title="Remove IE8 from zuul test runs">Remove IE8 from zuul test runs</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-07T08:42:26Z" is="time-ago">Oct 7, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/CHANGELOG.md" class="js-directory-link js-navigation-open" id="4ac32a78649ca5bdd8e0ba38b7006a1e-b89eb44b16475f5c63f9d138b03c3a138f97e8c0" title="CHANGELOG.md">CHANGELOG.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/b04249a4d6aebe019509451adb2aa7a000ecd5a3" class="message" data-pjax="true" title="Fix heading size in 2.2.0 CHANGELOG

I&#39;m sorry. :see_no_evil:">Fix heading size in 2.2.0 CHANGELOG</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-15T10:21:29Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/LICENSE" class="js-directory-link js-navigation-open" id="9879d6db96fd29134fc802214163b95a-4df7d1aae6fbbdf501a9409827e88412d3030530" title="LICENSE">LICENSE</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/1b1d261c139c7cea51170830d9d9f5ebd0f1696d" class="message" data-pjax="true" title="update copyright">update copyright</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-04-18T11:10:53Z" is="time-ago">Apr 18, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/MIGRATING.md" class="js-directory-link js-navigation-open" id="b5d6af46ef11467d703d942392759fa8-28d51569ef1dacbb6b9c6612dcba943c72fb1b0c" title="MIGRATING.md">MIGRATING.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/08c2f57c4107b94603111e2f88586fd5e602481a" class="message" data-pjax="true" title="added migration guide for v2">added migration guide for v2</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-03-30T11:25:44Z" is="time-ago">Mar 30, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/README.md" class="js-directory-link js-navigation-open" id="04c6e90faac2675aa89e2176d2eec7d8-4151b175aa20a5cdc132119ea1c2e7b71c4acbea" title="README.md">README.md</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/53b1c955f94308eb4f78216557a901c988e09a1a" class="message" data-pjax="true" title="Merge pull request #500 from imagentleman/patch-1

Removed html syntax highlighting on README.md example">Merge pull request</a> <a href="https://github.com/janl/mustache.js/pull/500" class="issue-link" title="Removed html syntax highlighting on README.md example ">#500</a> <a href="/janl/mustache.js/commit/53b1c955f94308eb4f78216557a901c988e09a1a" class="message" data-pjax="true" title="Merge pull request #500 from imagentleman/patch-1

Removed html syntax highlighting on README.md example">from imagentleman/patch-1</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-11-05T07:58:51Z" is="time-ago">Nov 5, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/Rakefile" class="js-directory-link js-navigation-open" id="52c976fc38ed2b4e3b1192f8a8e24cff-c019087322190900ee90bc47104f034cbc729c53" title="Rakefile">Rakefile</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/207b76a880913f9e3ffb2c9f4921d50226563139" class="message" data-pjax="true" title="Fix some Rake tasks, cleanup Rakefile">Fix some Rake tasks, cleanup Rakefile</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2013-11-04T18:13:59Z" is="time-ago">Nov 4, 2013</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/bower.json" class="js-directory-link js-navigation-open" id="0a08a7565aba4405282251491979bb6b-3a92948a966f44a83f0ea08a73cb83448e7825b5" title="bower.json">bower.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/981fbeb84f908c67496a66f4d57cb56e59d79dd0" class="message" data-pjax="true" title="Remove moot `version` property from bower.json

Per bower/bower.json-spec@a325da3">Remove moot `version` property from bower.json</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-06-10T22:39:29Z" is="time-ago">Jun 10, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/mustache.js" class="js-directory-link js-navigation-open" id="634d226b45dfff37e6e48538dbfe4cb0-cad9ebb0a038df6881940a5938be2da1c87c1178" title="mustache.js">mustache.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/378bcca8a5cfe4058f294a3dbb78e8755e8e0da5" class="message" data-pjax="true" title="Improve HTML escaping.

This closes a couple of potential exploit scenarios.
Backtick (`) for older IEs and equals (=) for unquoted attributes.

Refs https://github.com/wycats/handlebars.js/commit/83b8e846a3569bd366cf0b6bdc1e4604d1a2077e
Closes https://github.com/janl/mustache.js/pull/388">Improve HTML escaping.</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-11-17T08:14:32Z" is="time-ago">Nov 17, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/mustache.js.nuspec" class="js-directory-link js-navigation-open" id="96f4d633a8c27aff5548d421b6798b96-5b8d6a258079ab6e3c7736e505a17700eafdf5b9" title="mustache.js.nuspec">mustache.js.nuspec</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/aac23a542c6cb7cd17a8b995fdc0406486cd3a23" class="message" data-pjax="true" title=":ship: bump to version 2.2.0"><img class="emoji" title=":ship:" alt=":ship:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a2.png" height="20" width="20" align="absmiddle"> bump to version 2.2.0</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-15T10:15:57Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/mustache.min.js" class="js-directory-link js-navigation-open" id="9ac084da0ca52626dcf0aeafb84b6794-f81cb0cf36a3e77b40ec95ad28dc89789e5fb72f" title="mustache.min.js">mustache.min.js</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/aac23a542c6cb7cd17a8b995fdc0406486cd3a23" class="message" data-pjax="true" title=":ship: bump to version 2.2.0"><img class="emoji" title=":ship:" alt=":ship:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f6a2.png" height="20" width="20" align="absmiddle"> bump to version 2.2.0</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-15T10:15:57Z" is="time-ago">Oct 15, 2015</time></span>
          </td>
        </tr>
        <tr class="js-navigation-item">
          <td class="icon">
            <span class="octicon octicon-file-text"></span>
            <img alt="" class="spinner" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </td>
          <td class="content">
            <span class="css-truncate css-truncate-target"><a href="/janl/mustache.js/blob/master/package.json" class="js-directory-link js-navigation-open" id="b9cfc7f2cdf78a7f4b91a753d10865a2-a80b121a6fbfbff9275ac2cad399ad860824a0d2" title="package.json">package.json</a></span>
          </td>
          <td class="message">
            <span class="css-truncate css-truncate-target">
                  <a href="/janl/mustache.js/commit/dadbe203d5b3f66d7ea8f0443139a1973baa1143" class="message" data-pjax="true" title="Unpin chai and eslint versions

greenkeeper.io will let us know if the minor/patch bumps break our code, so go wild.">Unpin chai and eslint versions</a>
            </span>
          </td>
          <td class="age">
            <span class="css-truncate css-truncate-target"><time datetime="2015-10-30T18:41:56Z" is="time-ago">Oct 30, 2015</time></span>
          </td>
        </tr>
    </tbody>
  </table>

</div>


  <div id="readme" class="boxed-group flush clearfix announce instapaper_body md">
    <h3>
      <span class="octicon octicon-book"></span>
      README.md
    </h3>

    <article class="markdown-body entry-content" itemprop="mainContentOfPage"><h1><a id="user-content-mustachejs---logic-less-mustache-templates-with-javascript" class="anchor" href="#mustachejs---logic-less-mustache-templates-with-javascript" aria-hidden="true"><span class="octicon octicon-link"></span></a>mustache.js - Logic-less {{mustache}} templates with JavaScript</h1>

<blockquote>
<p>What could be more logical awesome than no logic at all?</p>
</blockquote>

<p><a href="https://travis-ci.org/janl/mustache.js"><img src="https://camo.githubusercontent.com/e6c7320ff09bfa8f82f98ad51159b99d749936d5/68747470733a2f2f7472617669732d63692e6f72672f6a616e6c2f6d757374616368652e6a732e7376673f6272616e63683d6d6173746572" alt="Build Status" data-canonical-src="https://travis-ci.org/janl/mustache.js.svg?branch=master" style="max-width:100%;"></a> <a href="https://gitter.im/janl/mustache.js"><img src="https://camo.githubusercontent.com/da2edb525cde1455a622c58c0effc3a90b9a181c/68747470733a2f2f6261646765732e6769747465722e696d2f4a6f696e253230436861742e737667" alt="Gitter chat" data-canonical-src="https://badges.gitter.im/Join%20Chat.svg" style="max-width:100%;"></a></p>

<p><a href="http://github.com/janl/mustache.js">mustache.js</a> is an implementation of the <a href="http://mustache.github.com/">mustache</a> template system in JavaScript.</p>

<p><a href="http://mustache.github.com/">Mustache</a> is a logic-less template syntax. It can be used for HTML, config files, source code - anything. It works by expanding tags in a template using values provided in a hash or object.</p>

<p>We call it "logic-less" because there are no if statements, else clauses, or for loops. Instead there are only tags. Some tags are replaced with a value, some nothing, and others a series of values.</p>

<p>For a language-agnostic overview of mustache's template syntax, see the <code>mustache(5)</code> <a href="http://mustache.github.com/mustache.5.html">manpage</a>.</p>

<h2><a id="user-content-where-to-use-mustachejs" class="anchor" href="#where-to-use-mustachejs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Where to use mustache.js?</h2>

<p>You can use mustache.js to render mustache templates anywhere you can use JavaScript. This includes web browsers, server-side environments such as <a href="http://nodejs.org/">node</a>, and <a href="http://couchdb.apache.org/">CouchDB</a> views.</p>

<p>mustache.js ships with support for both the <a href="http://www.commonjs.org/">CommonJS</a> module API and the <a href="https://github.com/amdjs/amdjs-api/wiki/AMD">Asynchronous Module Definition</a> API, or AMD.</p>

<p>And this will be your templates after you use Mustache:</p>

<p><a href="https://cloud.githubusercontent.com/assets/288977/8779228/a3cf700e-2f02-11e5-869a-300312fb7a00.gif" target="_blank"><img src="https://cloud.githubusercontent.com/assets/288977/8779228/a3cf700e-2f02-11e5-869a-300312fb7a00.gif" alt="'stache" style="max-width:100%;"></a></p>

<h2><a id="user-content-install" class="anchor" href="#install" aria-hidden="true"><span class="octicon octicon-link"></span></a>Install</h2>

<p>You can get Mustache via npm.</p>

<div class="highlight highlight-source-shell"><pre>$ npm install mustache --save</pre></div>

<p>or install with bower:</p>

<div class="highlight highlight-source-shell"><pre>$ bower install --save mustache</pre></div>

<h2><a id="user-content-command-line-tool" class="anchor" href="#command-line-tool" aria-hidden="true"><span class="octicon octicon-link"></span></a>Command line tool</h2>

<p>mustache.js is shipped with a node based command line tool. It might be installed as a global tool on your computer to render a mustache template of some kind</p>

<div class="highlight highlight-source-shell"><pre>$ npm install -g mustache

$ mustache dataView.json myTemplate.mustache <span class="pl-k">&gt;</span> output.html</pre></div>

<p>also supports stdin.</p>

<div class="highlight highlight-source-shell"><pre>$ cat dataView.json <span class="pl-k">|</span> mustache - myTemplate.mustache <span class="pl-k">&gt;</span> output.html</pre></div>

<p>or as a package.json <code>devDependency</code> in a build process maybe?</p>

<div class="highlight highlight-source-shell"><pre>$ npm install mustache --save-dev</pre></div>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>scripts<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>build<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>mustache dataView.json myTemplate.mustache &gt; public/output.html<span class="pl-pds">"</span></span>
  }
}</pre></div>

<div class="highlight highlight-source-shell"><pre>$ npm run build</pre></div>

<p>The command line tool is basically a wrapper around <code>Mustache.render</code> so you get all the features.</p>

<p>If your templates use partials you should pass paths to partials using <code>-p</code> flag:</p>

<div class="highlight highlight-source-shell"><pre>$ mustache -p path/to/partial1.mustache -p path/to/partial2.mustache dataView.json myTemplate.mustache</pre></div>

<h2><a id="user-content-who-uses-mustachejs" class="anchor" href="#who-uses-mustachejs" aria-hidden="true"><span class="octicon octicon-link"></span></a>Who uses mustache.js?</h2>

<p>An updated list of mustache.js users is kept <a href="http://wiki.github.com/janl/mustache.js/beard-competition">on the Github wiki</a>. Add yourself or your company if you use mustache.js!</p>

<h2><a id="user-content-contributing" class="anchor" href="#contributing" aria-hidden="true"><span class="octicon octicon-link"></span></a>Contributing</h2>

<p>mustache.js is a mature project, but it continues to actively invite maintainers. You can help out a high-profile project that is used in a lot of places on the web. There is <a href="https://github.com/janl/mustache.js/issues">plenty</a> of <a href="https://github.com/janl/mustache.js/pulls">work</a> to do. No big commitment required, if all you do is review a single <a href="https://github.com/janl/mustache.js/pulls">Pull Request</a>, you are a maintainer. And a hero.</p>

<h3><a id="user-content-your-first-contribution" class="anchor" href="#your-first-contribution" aria-hidden="true"><span class="octicon octicon-link"></span></a>Your First Contribution</h3>

<ul>
<li>review a <a href="https://github.com/janl/mustache.js/pulls">Pull Request</a></li>
<li>fix an <a href="https://github.com/janl/mustache.js/issues">Issue</a></li>
<li>update the <a href="https://github.com/janl/mustache.js#usage">documentation</a></li>
<li>make a website</li>
<li>write a tutorial</li>
</ul>

<hr>

<h2><a id="user-content-usage" class="anchor" href="#usage" aria-hidden="true"><span class="octicon octicon-link"></span></a>Usage</h2>

<p>Below is a quick example how to use mustache.js:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">var</span> view <span class="pl-k">=</span> {
  title<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Joe<span class="pl-pds">"</span></span>,
  <span class="pl-en">calc</span><span class="pl-k">:</span> <span class="pl-k">function</span> () {
    <span class="pl-k">return</span> <span class="pl-c1">2</span> <span class="pl-k">+</span> <span class="pl-c1">4</span>;
  }
};

<span class="pl-k">var</span> output <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(<span class="pl-s"><span class="pl-pds">"</span>{{title}} spends {{calc}}<span class="pl-pds">"</span></span>, view);</pre></div>

<p>In this example, the <code>Mustache.render</code> function takes two parameters: 1) the <a href="http://mustache.github.com/">mustache</a> template and 2) a <code>view</code> object that contains the data and code needed to render the template.</p>

<h2><a id="user-content-templates" class="anchor" href="#templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Templates</h2>

<p>A <a href="http://mustache.github.com/">mustache</a> template is a string that contains any number of mustache tags. Tags are indicated by the double mustaches that surround them. <code>{{person}}</code> is a tag, as is <code>{{#person}}</code>. In both examples we refer to <code>person</code> as the tag's key. There are several types of tags available in mustache.js, described below.</p>

<p>There are several techniques that can be used to load templates and hand them to mustache.js, here are two of them:</p>

<h4><a id="user-content-include-templates" class="anchor" href="#include-templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Include Templates</h4>

<p>If you need a template for a dynamic part in a static website, you can consider including the template in the static HTML file to avoid loading templates separately. Here's a small example using <code>jQuery</code>:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">html</span>&gt;
&lt;<span class="pl-ent">body</span> <span class="pl-e">onload</span>=<span class="pl-s"><span class="pl-pds">"</span>loadUser<span class="pl-pds">"</span></span>&gt;
&lt;<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>target<span class="pl-pds">"</span></span>&gt;Loading...&lt;/<span class="pl-ent">div</span>&gt;
<span class="pl-s1">&lt;<span class="pl-ent">script</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>template<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>x-tmpl-mustache<span class="pl-pds">"</span></span>&gt;</span>
<span class="pl-s1">Hello {{ name }}<span class="pl-k">!</span></span>
<span class="pl-s1">&lt;/<span class="pl-ent">script</span>&gt;</span>
&lt;/<span class="pl-ent">body</span>&gt;
&lt;/<span class="pl-ent">html</span>&gt;</pre></div>

<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">loadUser</span>() {
  <span class="pl-k">var</span> template <span class="pl-k">=</span> $(<span class="pl-s"><span class="pl-pds">'</span>#template<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>();
  <span class="pl-smi">Mustache</span>.<span class="pl-c1">parse</span>(template);   <span class="pl-c">// optional, speeds up future uses</span>
  <span class="pl-k">var</span> rendered <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(template, {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Luke<span class="pl-pds">"</span></span>});
  $(<span class="pl-s"><span class="pl-pds">'</span>#target<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(rendered);
}</pre></div>

<h4><a id="user-content-load-external-templates" class="anchor" href="#load-external-templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Load External Templates</h4>

<p>If your templates reside in individual files, you can load them asynchronously and render them when they arrive. Another example using <code>jQuery</code>:</p>

<div class="highlight highlight-source-js"><pre><span class="pl-k">function</span> <span class="pl-en">loadUser</span>() {
  $.<span class="pl-en">get</span>(<span class="pl-s"><span class="pl-pds">'</span>template.mst<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">template</span>) {
    <span class="pl-k">var</span> rendered <span class="pl-k">=</span> <span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(template, {name<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Luke<span class="pl-pds">"</span></span>});
    $(<span class="pl-s"><span class="pl-pds">'</span>#target<span class="pl-pds">'</span></span>).<span class="pl-en">html</span>(rendered);
  });
}</pre></div>

<h3><a id="user-content-variables" class="anchor" href="#variables" aria-hidden="true"><span class="octicon octicon-link"></span></a>Variables</h3>

<p>The most basic tag type is a simple variable. A <code>{{name}}</code> tag renders the value of the <code>name</code> key in the current context. If there is no such key, nothing is rendered.</p>

<p>All variables are HTML-escaped by default. If you want to render unescaped HTML, use the triple mustache: <code>{{{name}}}</code>. You can also use <code>&amp;</code> to unescape a variable.</p>

<p>If you want <code>{{name}}</code> <em>not</em> to be interpreted as a mustache tag, but rather to appear exactly as <code>{{name}}</code> in the output, you must change and then restore the default delimiter. See the <a href="https://github.com/janl/mustache.js#set-delimiter">"Set Delimiter'</a> section for more information about custom delimiters.</p>

<p>View:</p>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Chris<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span>company<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>&lt;b&gt;GitHub&lt;/b&gt;<span class="pl-pds">"</span></span>
}</pre></div>

<p>Template:</p>

<pre><code>* {{name}}
* {{age}}
* {{company}}
* {{{company}}}
* {{&amp;company}}
{{=&lt;% %&gt;=}}
* {{company}}
&lt;%={{ }}=%&gt;
</code></pre>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>* Chris
*
* <span class="pl-c1">&amp;lt;</span>b<span class="pl-c1">&amp;gt;</span>GitHub<span class="pl-c1">&amp;lt;</span>/b<span class="pl-c1">&amp;gt;</span>
* &lt;<span class="pl-ent">b</span>&gt;GitHub&lt;/<span class="pl-ent">b</span>&gt;
* &lt;<span class="pl-ent">b</span>&gt;GitHub&lt;/<span class="pl-ent">b</span>&gt;
* {{company}}</pre></div>

<p>JavaScript's dot notation may be used to access keys that are properties of objects in a view.</p>

<p>View:</p>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: {
    <span class="pl-s"><span class="pl-pds">"</span>first<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Michael<span class="pl-pds">"</span></span>,
    <span class="pl-s"><span class="pl-pds">"</span>last<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Jackson<span class="pl-pds">"</span></span>
  },
  <span class="pl-s"><span class="pl-pds">"</span>age<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>RIP<span class="pl-pds">"</span></span>
}</pre></div>

<p>Template:</p>

<div class="highlight highlight-text-html-basic"><pre>* {{name.first}} {{name.last}}
* {{age}}</pre></div>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>* Michael Jackson
* RIP</pre></div>

<h3><a id="user-content-sections" class="anchor" href="#sections" aria-hidden="true"><span class="octicon octicon-link"></span></a>Sections</h3>

<p>Sections render blocks of text one or more times, depending on the value of the key in the current context.</p>

<p>A section begins with a pound and ends with a slash. That is, <code>{{#person}}</code> begins a <code>person</code> section, while <code>{{/person}}</code> ends it. The text between the two tags is referred to as that section's "block".</p>

<p>The behavior of the section is determined by the value of the key.</p>

<h4><a id="user-content-false-values-or-empty-lists" class="anchor" href="#false-values-or-empty-lists" aria-hidden="true"><span class="octicon octicon-link"></span></a>False Values or Empty Lists</h4>

<p>If the <code>person</code> key does not exist, or exists and has a value of <code>null</code>, <code>undefined</code>, <code>false</code>, <code>0</code>, or <code>NaN</code>, or is an empty string or an empty list, the block will not be rendered.</p>

<p>View:</p>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>person<span class="pl-pds">"</span></span>: <span class="pl-c1">false</span>
}</pre></div>

<p>Template:</p>

<div class="highlight highlight-text-html-basic"><pre>Shown.
{{#person}}
Never shown!
{{/person}}</pre></div>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>Shown.</pre></div>

<h4><a id="user-content-non-empty-lists" class="anchor" href="#non-empty-lists" aria-hidden="true"><span class="octicon octicon-link"></span></a>Non-Empty Lists</h4>

<p>If the <code>person</code> key exists and is not <code>null</code>, <code>undefined</code>, or <code>false</code>, and is not an empty list the block will be rendered one or more times.</p>

<p>When the value is a list, the block is rendered once for each item in the list. The context of the block is set to the current item in the list for each iteration. In this way we can loop over collections.</p>

<p>View:</p>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>stooges<span class="pl-pds">"</span></span>: [
    { <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Moe<span class="pl-pds">"</span></span> },
    { <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Larry<span class="pl-pds">"</span></span> },
    { <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Curly<span class="pl-pds">"</span></span> }
  ]
}</pre></div>

<p>Template:</p>

<div class="highlight highlight-text-html-basic"><pre>{{#stooges}}
&lt;<span class="pl-ent">b</span>&gt;{{name}}&lt;/<span class="pl-ent">b</span>&gt;
{{/stooges}}</pre></div>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">b</span>&gt;Moe&lt;/<span class="pl-ent">b</span>&gt;
&lt;<span class="pl-ent">b</span>&gt;Larry&lt;/<span class="pl-ent">b</span>&gt;
&lt;<span class="pl-ent">b</span>&gt;Curly&lt;/<span class="pl-ent">b</span>&gt;</pre></div>

<p>When looping over an array of strings, a <code>.</code> can be used to refer to the current item in the list.</p>

<p>View:</p>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>musketeers<span class="pl-pds">"</span></span>: [<span class="pl-s"><span class="pl-pds">"</span>Athos<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Aramis<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>Porthos<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>D'Artagnan<span class="pl-pds">"</span></span>]
}</pre></div>

<p>Template:</p>

<div class="highlight highlight-text-html-basic"><pre>{{#musketeers}}
* {{.}}
{{/musketeers}}</pre></div>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>* Athos
* Aramis
* Porthos
* D'Artagnan</pre></div>

<p>If the value of a section variable is a function, it will be called in the context of the current item in the list on each iteration.</p>

<p>View:</p>

<div class="highlight highlight-source-js"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>beatles<span class="pl-pds">"</span></span><span class="pl-k">:</span> [
    { <span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>John<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Lennon<span class="pl-pds">"</span></span> },
    { <span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Paul<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>McCartney<span class="pl-pds">"</span></span> },
    { <span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>George<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Harrison<span class="pl-pds">"</span></span> },
    { <span class="pl-s"><span class="pl-pds">"</span>firstName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Ringo<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>lastName<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Starr<span class="pl-pds">"</span></span> }
  ],
  <span class="pl-s"><span class="pl-pds">"</span><span class="pl-en">name</span><span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-k">function</span> () {
    <span class="pl-k">return</span> <span class="pl-smi">this</span>.<span class="pl-smi">firstName</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span> <span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-smi">this</span>.<span class="pl-smi">lastName</span>;
  }
}</pre></div>

<p>Template:</p>

<div class="highlight highlight-text-html-basic"><pre>{{#beatles}}
* {{name}}
{{/beatles}}</pre></div>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>* John Lennon
* Paul McCartney
* George Harrison
* Ringo Starr</pre></div>

<h4><a id="user-content-functions" class="anchor" href="#functions" aria-hidden="true"><span class="octicon octicon-link"></span></a>Functions</h4>

<p>If the value of a section key is a function, it is called with the section's literal block of text, un-rendered, as its first argument. The second argument is a special rendering function that uses the current view as its view argument. It is called in the context of the current view object.</p>

<p>View:</p>

<div class="highlight highlight-source-js"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>name<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Tater<span class="pl-pds">"</span></span>,
  <span class="pl-s"><span class="pl-pds">"</span><span class="pl-en">bold</span><span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-k">function</span> () {
    <span class="pl-k">return</span> <span class="pl-k">function</span> (<span class="pl-smi">text</span>, <span class="pl-smi">render</span>) {
      <span class="pl-k">return</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;b&gt;<span class="pl-pds">"</span></span> <span class="pl-k">+</span> <span class="pl-en">render</span>(text) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">"</span>&lt;/b&gt;<span class="pl-pds">"</span></span>;
    }
  }
}</pre></div>

<p>Template:</p>

<div class="highlight highlight-text-html-basic"><pre>{{#bold}}Hi {{name}}.{{/bold}}</pre></div>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">b</span>&gt;Hi Tater.&lt;/<span class="pl-ent">b</span>&gt;</pre></div>

<h3><a id="user-content-inverted-sections" class="anchor" href="#inverted-sections" aria-hidden="true"><span class="octicon octicon-link"></span></a>Inverted Sections</h3>

<p>An inverted section opens with <code>{{^section}}</code> instead of <code>{{#section}}</code>. The block of an inverted section is rendered only if the value of that section's tag is <code>null</code>, <code>undefined</code>, <code>false</code>, <em>falsy</em> or an empty list.</p>

<p>View:</p>

<div class="highlight highlight-source-json"><pre>{
  <span class="pl-s"><span class="pl-pds">"</span>repos<span class="pl-pds">"</span></span>: []
}</pre></div>

<p>Template:</p>

<div class="highlight highlight-text-html-basic"><pre>{{#repos}}&lt;<span class="pl-ent">b</span>&gt;{{name}}&lt;/<span class="pl-ent">b</span>&gt;{{/repos}}
{{^repos}}No repos :({{/repos}}</pre></div>

<p>Output:</p>

<div class="highlight highlight-text-html-basic"><pre>No repos :(</pre></div>

<h3><a id="user-content-comments" class="anchor" href="#comments" aria-hidden="true"><span class="octicon octicon-link"></span></a>Comments</h3>

<p>Comments begin with a bang and are ignored. The following template:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">h1</span>&gt;Today{{! ignore me }}.&lt;/<span class="pl-ent">h1</span>&gt;</pre></div>

<p>Will render as follows:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">h1</span>&gt;Today.&lt;/<span class="pl-ent">h1</span>&gt;</pre></div>

<p>Comments may contain newlines.</p>

<h3><a id="user-content-partials" class="anchor" href="#partials" aria-hidden="true"><span class="octicon octicon-link"></span></a>Partials</h3>

<p>Partials begin with a greater than sign, like {{&gt; box}}.</p>

<p>Partials are rendered at runtime (as opposed to compile time), so recursive partials are possible. Just avoid infinite loops.</p>

<p>They also inherit the calling context. Whereas in ERB you may have this:</p>

<div class="highlight highlight-text-html-erb"><pre><span class="pl-pse">&lt;%=</span><span class="pl-s1"> partial <span class="pl-c1">:next_more</span>, <span class="pl-c1">:start</span> =&gt; start, <span class="pl-c1">:size</span> =&gt; size </span><span class="pl-pse"><span class="pl-s1">%</span>&gt;</span></pre></div>

<p>Mustache requires only this:</p>

<div class="highlight highlight-text-html-basic"><pre>{{&gt; next_more}}</pre></div>

<p>Why? Because the <code>next_more.mustache</code> file will inherit the <code>size</code> and <code>start</code> variables from the calling context. In this way you may want to think of partials as includes, imports, template expansion, nested templates, or subtemplates, even though those aren't literally the case here.</p>

<p>For example, this template and partial:</p>

<pre><code>base.mustache:
&lt;h2&gt;Names&lt;/h2&gt;
{{#names}}
  {{&gt; user}}
{{/names}}

user.mustache:
&lt;strong&gt;{{name}}&lt;/strong&gt;
</code></pre>

<p>Can be thought of as a single, expanded template:</p>

<div class="highlight highlight-text-html-basic"><pre>&lt;<span class="pl-ent">h2</span>&gt;Names&lt;/<span class="pl-ent">h2</span>&gt;
{{#names}}
  &lt;<span class="pl-ent">strong</span>&gt;{{name}}&lt;/<span class="pl-ent">strong</span>&gt;
{{/names}}</pre></div>

<p>In mustache.js an object of partials may be passed as the third argument to <code>Mustache.render</code>. The object should be keyed by the name of the partial, and its value should be the partial text.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(template, view, {
  user<span class="pl-k">:</span> userTemplate
});</pre></div>

<h3><a id="user-content-set-delimiter" class="anchor" href="#set-delimiter" aria-hidden="true"><span class="octicon octicon-link"></span></a>Set Delimiter</h3>

<p>Set Delimiter tags start with an equals sign and change the tag delimiters from <code>{{</code> and <code>}}</code> to custom strings.</p>

<p>Consider the following contrived example:</p>

<pre><code>* {{ default_tags }}
{{=&lt;% %&gt;=}}
* &lt;% erb_style_tags %&gt;
&lt;%={{ }}=%&gt;
* {{ default_tags_again }}
</code></pre>

<p>Here we have a list with three items. The first item uses the default tag style, the second uses ERB style as defined by the Set Delimiter tag, and the third returns to the default style after yet another Set Delimiter declaration.</p>

<p>According to <a href="http://google-ctemplate.googlecode.com/svn/trunk/doc/howto.html">ctemplates</a>, this "is useful for languages like TeX, where double-braces may occur in the text and are awkward to use for markup."</p>

<p>Custom delimiters may not contain whitespace or the equals sign.</p>

<h2><a id="user-content-pre-parsing-and-caching-templates" class="anchor" href="#pre-parsing-and-caching-templates" aria-hidden="true"><span class="octicon octicon-link"></span></a>Pre-parsing and Caching Templates</h2>

<p>By default, when mustache.js first parses a template it keeps the full parsed token tree in a cache. The next time it sees that same template it skips the parsing step and renders the template much more quickly. If you'd like, you can do this ahead of time using <code>mustache.parse</code>.</p>

<div class="highlight highlight-source-js"><pre><span class="pl-smi">Mustache</span>.<span class="pl-c1">parse</span>(template);

<span class="pl-c">// Then, sometime later.</span>
<span class="pl-smi">Mustache</span>.<span class="pl-en">render</span>(template, view);</pre></div>

<h2><a id="user-content-plugins-for-javascript-libraries" class="anchor" href="#plugins-for-javascript-libraries" aria-hidden="true"><span class="octicon octicon-link"></span></a>Plugins for JavaScript Libraries</h2>

<p>mustache.js may be built specifically for several different client libraries, including the following:</p>

<ul>
<li><a href="http://jquery.com/">jQuery</a></li>
<li><a href="http://mootools.net/">MooTools</a></li>
<li><a href="http://www.dojotoolkit.org/">Dojo</a></li>
<li><a href="http://developer.yahoo.com/yui/">YUI</a></li>
<li><a href="http://qooxdoo.org/">qooxdoo</a></li>
</ul>

<p>These may be built using <a href="http://rake.rubyforge.org/">Rake</a> and one of the following commands:</p>

<pre><code>$ rake jquery
$ rake mootools
$ rake dojo
$ rake yui3
$ rake qooxdoo
</code></pre>

<h2><a id="user-content-testing" class="anchor" href="#testing" aria-hidden="true"><span class="octicon octicon-link"></span></a>Testing</h2>

<p>In order to run the tests you'll need to install <a href="http://nodejs.org/">node</a>.</p>

<p>You also need to install the sub module containing <a href="http://github.com/mustache/spec">Mustache specifications</a> in the project root.</p>

<pre><code>$ git submodule init
$ git submodule update
</code></pre>

<p>Install dependencies.</p>

<pre><code>$ npm install
</code></pre>

<p>Then run the tests.</p>

<pre><code>$ npm test
</code></pre>

<p>The test suite consists of both unit and integration tests. If a template isn't rendering correctly for you, you can make a test for it by doing the following:</p>

<ol>
<li>Create a template file named <code>mytest.mustache</code> in the <code>test/_files</code>
 directory. Replace <code>mytest</code> with the name of your test.</li>
<li>Create a corresponding view file named <code>mytest.js</code> in the same directory.
 This file should contain a JavaScript object literal enclosed in
 parentheses. See any of the other view files for an example.</li>
<li>Create a file with the expected output in <code>mytest.txt</code> in the same
 directory.</li>
</ol>

<p>Then, you can run the test with:</p>

<pre><code>$ TEST=mytest npm run test-render
</code></pre>

<h3><a id="user-content-browser-tests" class="anchor" href="#browser-tests" aria-hidden="true"><span class="octicon octicon-link"></span></a>Browser tests</h3>

<p>Browser tests are not included in <code>npm test</code> as they run for too long, although they are ran automatically on Travis when merged into master. Run browser tests locally in any browser:</p>

<pre><code>$ npm run test-browser-local
</code></pre>

<p>then point your browser to <code>http://localhost:8080/__zuul</code></p>

<h3><a id="user-content-troubleshooting" class="anchor" href="#troubleshooting" aria-hidden="true"><span class="octicon octicon-link"></span></a>Troubleshooting</h3>

<h4><a id="user-content-npm-install-fails" class="anchor" href="#npm-install-fails" aria-hidden="true"><span class="octicon octicon-link"></span></a>npm install fails</h4>

<p>Ensure to have a recent version of npm installed. While developing this project requires npm with support for <code>^</code> version ranges.</p>

<pre><code>$ npm install -g npm
</code></pre>

<h2><a id="user-content-thanks" class="anchor" href="#thanks" aria-hidden="true"><span class="octicon octicon-link"></span></a>Thanks</h2>

<p>mustache.js wouldn't kick ass if it weren't for these fine souls:</p>

<ul>
<li>Chris Wanstrath / defunkt</li>
<li>Alexander Lang / langalex</li>
<li>Sebastian Cohnen / tisba</li>
<li>J Chris Anderson / jchris</li>
<li>Tom Robinson / tlrobinson</li>
<li>Aaron Quint / quirkey</li>
<li>Douglas Crockford</li>
<li>Nikita Vasilyev / NV</li>
<li>Elise Wood / glytch</li>
<li>Damien Mathieu / dmathieu</li>
<li>Jakub Kuźma / qoobaa</li>
<li>Will Leinweber / will</li>
<li>dpree</li>
<li>Jason Smith / jhs</li>
<li>Aaron Gibralter / agibralter</li>
<li>Ross Boucher / boucher</li>
<li>Matt Sanford / mzsanford</li>
<li>Ben Cherry / bcherry</li>
<li>Michael Jackson / mjackson</li>
<li>Phillip Johnsen / phillipj</li>
<li>David da Silva Contín / dasilvacontin</li>
</ul>
</article>
  </div>


  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.12133s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-fRgMK7V3nst6tdBM6K+ZnnODbc8N8ajES2nGKh3gcy8=" src="https://assets-cdn.github.com/assets/frameworks-7d180c2bb5779ecb7ab5d04ce8af999e73836dcf0df1a8c44b69c62a1de0732f.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-BDAUbaSVMjhV4vOS1TWUkOCuu9dWJZmtOX7J3treTg4=" src="https://assets-cdn.github.com/assets/github-0430146da495323855e2f392d5359490e0aebbd7562599ad397ec9dedade4e0e.js"></script>
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

