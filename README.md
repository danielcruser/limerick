## Deployment

Ready to go world wide? Here's a guide to deployment!

### Prep
1. Set up the [Heroku command line tools](https://devcenter.heroku.com/articles/heroku-cli)
2. `heroku login`
3. Add a git remote for heroku:
  - **If you're creating a new app...**
    1. `heroku create` or `heroku create your-app-name` if you have a name in mind.
    2. `heroku addons:create heroku-postgresql:hobby-dev` to add ("provision") a postgres database to your heroku dyno

  - **If you already have a Heroku app...**
    1.  `heroku git:remote your-app-name` You'll need to be a collaborator on the app.

### When you're ready to deploy

1. Make sure that all your work is fully committed and pushed to your master branch on Github.
2. If you currently have an existing branch called "deploy", delete it now (`git branch -d deploy`). We're going to use a dummy branch with the name "deploy" (see below), so if you have one lying around, the script below will error
3. `npm run deploy` - this will cause the following commands to happen in order:
  - `git checkout -b deploy`: checks out a new branch called "deploy". Note that the name "deploy" here isn't magical, but it needs to match the name of the branch we specify when we push to our heroku remote.
  - `webpack -p`: webpack will run in "production mode"
  - `git add -f public/bundle.js public/bundle.js.map`: "force" add the otherwise gitignored build files
  - `git commit --allow-empty -m 'Deploying'`: create a commit, even if nothing changed
  - `git push --force heroku deploy:master`: push your local "deploy" branch to the "master" branch on heroku
  - `git checkout master`: return to your master branch
  - `git branch -D deploy`: remove the deploy branch

Now, you should be deployed!

Why do all of these steps? The big reason is because we don't want our production server to be cluttered up with dev dependencies like webpack, but at the same time we don't want our development git-tracking to be cluttered with production build files like bundle.js! By doing these steps, we make sure our development and production environments both stay nice and clean!
