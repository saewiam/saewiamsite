# sae site walkthrough

## get started
### prerequisites
Make sure you have Docker installed and open. This project also uses Makefiles
and the `zip` utility, so make sure you have `make` and `zip` installed.
On Debian, you can do:
```bash
sudo apt install make
sudo apt install zip
```

1. Clone the repo
2. Initialize submodules
```bash
git submodule init
git submodule update legacy
```
3. Make a new `build/` directory for your final website outputs
```bash
# Make sure you are in your project folder
pwd
# output should end in "saewiamsite"
mkdir build
```
4. Type `make` to start initializing your project

## develop your site with this template
There are multiple endpoints set up automatically for you.
- [http://legacy.localhost](http://legacy.localhost) to preview the old site.
- [http://cms.localhost](http://cms.localhost) to add content.
- [http://develop.localhost](http://develop.localhost) to see a live preview
  of your current site.
- [http://preview.localhost](http://preview.localhost) to preview your site
  after building it with `make build`.

## publish your site
Follow the steps to build a zip file build of your site, and upload it to
your static site hosting provider of choice (e.g. Cloudflare Pages):
1. Run `make build` in your project directory
2. (if running on WSL) Copy your `build.zip` file into your Windows host system
```bash
cp build.zip /mnt/c/Users/<YOUR WINDOWS USERNAME HERE>/OneDrive/Documentos
```
3. Drag and drop the zip file to your static site hosting provider's dashboard.

## roadmap
- Backups
- Fonts
- Image captions and previews by clicking (pop-out)
- Column ratio customization (sizing)
- About text
- Easy publish option
