# Personal website `LukeCreated`

Source code for personal website that will introduces a lot of interesting things about **Luke** himself!

Personal Project: `LukeCreated` website

site deployed at: **[lukecreated.com](https://lukecreated.com)** and **[www.lukecreated.com](https://www.lukecreated.com)**

## Technologies

Current version of the website is built with Flutter powered with dependencies:

- flutter_svg
- google_fonts
- url_launcher
- cached_network_image
- intl

## Local Run

- To run the website locally, you need to have Flutter installed.
- Following command will run the website locally on your machine and open with Google Chrome on port `5555`.

```bash
flutter run -d chrome --web-port 5555
```

## Deployment

- commit and push to the repository.
- run following automatic deployment:

```bash
flutter clean
flutter pub get
flutter build web --release --output=deployment/web
```

**Better improve the CI/CD practice, especially commit build folder to repo**

## Disclaimer

The author is _**not affiliated**_ with any **source(s)/product(s)/tools** listed/used in this project.
