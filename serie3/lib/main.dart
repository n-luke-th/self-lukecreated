import 'package:cached_network_image/cached_network_image.dart'
    show CachedNetworkImage;
import 'package:flutter/foundation.dart' show kDebugMode;
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serie3/style.dart';
import 'package:url_launcher/url_launcher.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final ThemeData _lightTheme = ThemeData.light().copyWith(
    colorScheme: ColorScheme.fromSeed(
      seedColor: Style.primaryColorLight,
      primary: Style.primaryColorLight,
      secondary: Style.secondaryColorLight,
      surface: Style.backgroundColorLight,
      brightness: Brightness.light,
    ),
  );

  final ThemeData _darkTheme = ThemeData.dark().copyWith(
    colorScheme: ColorScheme.fromSeed(
      seedColor: Style.primaryColorDark,
      primary: Style.primaryColorDark,
      secondary: Style.secondaryColorDark,
      surface: Style.backgroundColorDark,
      brightness: Brightness.dark,
    ),
  );

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'LukeCreated',
      theme: _lightTheme,
      darkTheme: _darkTheme,
      themeMode: ThemeMode.system,
      home: MyHomePage(lightTheme: _lightTheme, darkTheme: _darkTheme),
    );
  }
}

class MyHomePage extends StatefulWidget {
  final ThemeData lightTheme;
  final ThemeData darkTheme;
  const MyHomePage({
    super.key,
    required this.lightTheme,
    required this.darkTheme,
  });

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  ThemeMode _themeMode = ThemeMode.system;
  ThemeData get currentTheme =>
      _themeMode == ThemeMode.light ? widget.lightTheme : widget.darkTheme;

  void _changeTheme() {
    setState(() {
      _themeMode == ThemeMode.light
          ? _themeMode = ThemeMode.dark
          : _themeMode = ThemeMode.light;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: currentTheme.colorScheme.surface,
      extendBody: true,
      appBar: topBar(),
      // ? Body
      body: Center(
        child: Column(
          children: [
            Expanded(
              flex: 10,
              child: SingleChildScrollView(
                padding: EdgeInsets.all(Style.defaultPadding),
                child: mainBodyContents(),
              ),
            ),
            bottomIconsShortcut(context),
          ],
        ),
      ),
    );
  }

  Column mainBodyContents() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        CachedNetworkImage(
          imageUrl:
              "https://assets.lukecreated.com/static/images/self.luke/Luke.jpeg",
          // "https://cdn.pixabay.com/photo/2017/03/30/03/48/pineapple-2187124_1280.png",
          imageBuilder:
              (context, imageProvider) => CircleAvatar(
                radius: 100.0,
                backgroundImage: imageProvider,
                onBackgroundImageError: (exception, stackTrace) {
                  if (kDebugMode) {
                    print(
                      "unable to load the cdn network image, may attempt with server: $exception",
                    );
                  }
                },
              ),
          placeholder: (context, url) => const CircularProgressIndicator(),
          errorWidget:
              (context, url, error) => CircleAvatar(
                radius: 100.0,
                backgroundImage: AssetImage('assets/Luke.jpeg'),
              ),
        ),
        Style.verticalSpace,
        SelectableText(
          textAlign: TextAlign.center,
          'Kittipich "Luke" Aiumbhornsin',
          style: Style.titleTextStyle(currentThemeMode: _themeMode),
        ),
        Style.smallVerticalSpace,
        SelectableText(
          'A Software Developer who loves to explore new technologies and build cool stuffs.',
          style: Style.bodyTextStyle(currentThemeMode: _themeMode),
          textAlign: TextAlign.center,
        ),
        Style.smallVerticalSpace,
        // Add more information here, e.g., skills, projects, contact details
      ],
    );
  }

  AppBar topBar() {
    return AppBar(
      backgroundColor: Colors.transparent,
      elevation: 0,
      title: SelectableText(
        'LukeCreated',
        style: Style.titleTextStyle(currentThemeMode: _themeMode),
      ),
      centerTitle: true,
      leading: IconButton.filled(
        constraints: BoxConstraints(),
        enableFeedback: true,
        tooltip: 'Resume',
        style: IconButton.styleFrom(
          backgroundColor: currentTheme.colorScheme.tertiaryContainer,
          side: BorderSide(color: currentTheme.colorScheme.tertiary, width: 5),
        ),
        color: currentTheme.iconTheme.color,
        icon: const Icon(Icons.document_scanner_rounded),
        onPressed:
            () => launchUrl(
              mode: LaunchMode.platformDefault,
              // TODO: add resume link
              Uri.parse(
                'https://assets.lukecreated.com/public/resume/Luke-CoderResumeV1.2.pdf',
              ),
              webOnlyWindowName: "_blank",
            ),
      ),
      actions: [
        Padding(
          padding: const EdgeInsets.all(Style.smallPadding),
          child: PopupMenuButton<String>(
            offset: Offset.fromDirection(90, 10),
            popUpAnimationStyle: AnimationStyle(
              curve: Curves.fastOutSlowIn,
              duration: const Duration(milliseconds: 300),
            ),
            position: PopupMenuPosition.under,
            menuPadding: EdgeInsets.all(Style.smallPadding),
            enableFeedback: true,
            tooltip: "Settings: Language/Theme",
            icon: Icon(
              Icons.settings_applications,
              color: currentTheme.iconTheme.color,
              semanticLabel: "Settings",
            ),
            onSelected: (String value) {
              switch (value) {
                case "change-theme":
                  _changeTheme();
                  break;
              }
            },
            itemBuilder:
                (BuildContext context) => <PopupMenuEntry<String>>[
                  PopupMenuItem<String>(
                    value: 'change-theme',
                    child: ListTile(
                      leading: Icon(
                        _themeMode == ThemeMode.light
                            ? Icons.dark_mode
                            : Icons.light_mode,
                      ),
                      title: Text('Change theme'),
                    ),
                  ),
                  const PopupMenuItem<String>(
                    value: 'change-language',
                    child: ListTile(
                      leading: Icon(Icons.language),
                      title: Text('go to "testStorage"'),
                    ),
                  ),
                ],
          ),
        ),
      ],
    );
  }

  Expanded bottomIconsShortcut(BuildContext context) {
    return Expanded(
      child: Container(
        // color: Colors.transparent,
        decoration: BoxDecoration(
          color: currentTheme.colorScheme.tertiaryFixedDim,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(Style.defaultPadding),
            topRight: Radius.circular(Style.defaultPadding),
          ),
        ),
        width: MediaQuery.of(context).size.width * 0.7,
        child: Padding(
          padding: const EdgeInsets.all(Style.smallPadding),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              // GitHub
              SizedBox(
                width: Style.defaultIconShortcutSize,
                child: IconButton(
                  tooltip: "GitHub",
                  onPressed:
                      () => launchUrl(
                        mode: LaunchMode.platformDefault,
                        webOnlyWindowName: "_blank",
                        Uri.parse("https://github.com/n-luke-th"),
                      ),
                  icon: SvgPicture.asset(
                    "assets/github-mark.svg",
                    semanticsLabel: 'GitHub',
                  ),
                ),
              ),
              // LinkedIn
              SizedBox(
                width: Style.defaultIconShortcutSize,
                child: IconButton(
                  tooltip: "LinkedIn",
                  onPressed:
                      () => launchUrl(
                        mode: LaunchMode.platformDefault,
                        webOnlyWindowName: "_blank",
                        Uri.parse("https://linkedin.com/in/aium-luke"),
                      ),
                  icon: SvgPicture.asset(
                    "assets/linkedin-icon-svgrepo-com.svg",
                    semanticsLabel: 'LinkedIn',
                  ),
                ),
              ),
              // LeetCode
              SizedBox(
                width: Style.defaultIconShortcutSize,
                child: IconButton(
                  tooltip: "LeetCode",
                  onPressed:
                      () => launchUrl(
                        mode: LaunchMode.platformDefault,
                        webOnlyWindowName: "_blank",
                        Uri.parse("https://leetcode.com/n-luke/"),
                      ),
                  icon: SvgPicture.asset(
                    "assets/leetcode-svgrepo-com.svg",
                    semanticsLabel: 'LeetCode',
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
