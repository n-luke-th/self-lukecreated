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
      appBar: AppBar(
        backgroundColor: Colors.transparent,
        elevation: 0,
        title: SelectableText(
          'LukeCreated',
          style: Style.titleTextStyle(currentThemeMode: _themeMode),
        ),
        centerTitle: true,
        leading: IconButton(
          tooltip: 'Resume',
          color: currentTheme.iconTheme.color,
          icon: const Icon(Icons.document_scanner_rounded),
          onPressed: () {},
        ),
        actions: [
          Padding(
            padding: const EdgeInsets.all(Style.smallPadding),
            child: IconButton(
              tooltip: 'Change theme',
              color: currentTheme.iconTheme.color,
              padding: EdgeInsets.symmetric(horizontal: Style.smallPadding),
              icon: Icon(
                _themeMode == ThemeMode.light
                    ? Icons.dark_mode
                    : Icons.light_mode,
              ),
              onPressed: () {
                _changeTheme();
              },
            ),
          ),
        ],
      ),
      // ? Body
      body: Center(
        child: Column(
          children: [
            Expanded(
              flex: 10,
              child: SingleChildScrollView(
                padding: EdgeInsets.all(Style.defaultPadding),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    CircleAvatar(
                      radius: 100.0,
                      backgroundImage:
                      //  AssetImage('assets/Luke.jpeg'),
                      NetworkImage(
                        "https://assets.lukecreated.com/images/self.luke/Luke.jpeg",
                      ),
                      onBackgroundImageError: (exception, stackTrace) {},
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
                ),
              ),
            ),
            Expanded(
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
                            "github-mark.svg",
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
                            "linkedin-icon-svgrepo-com.svg",
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
                            "leetcode-svgrepo-com.svg",
                            semanticsLabel: 'LeetCode',
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
