import 'package:cached_network_image/cached_network_image.dart'
    show CachedNetworkImage;
import 'package:flutter/foundation.dart' show kDebugMode;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serie3/generated/i18n/app_localizations.dart'
    show AppLocalizations;
import 'package:serie3/style.dart';
import 'package:serie3/utils.dart';

void main() {
  runApp(LukeCreatedWeb());
}

class LukeCreatedWeb extends StatefulWidget {
  const LukeCreatedWeb({super.key});

  @override
  State<LukeCreatedWeb> createState() => _LukeCreatedWebState();
}

class _LukeCreatedWebState extends State<LukeCreatedWeb> {
  Locale _locale = Locale('en');
  final ThemeData _lightTheme = ThemeData.light().copyWith(
    colorScheme: ColorScheme.fromSeed(
      seedColor: Style.primaryColorLight,
      primary: Style.primaryColorLight,
      secondary: Style.secondaryColorLight,
      surface: Style.backgroundColorLight,
      brightness: Brightness.light,
    ),
    textTheme: Style.textTheme,
  );

  final ThemeData _darkTheme = ThemeData.dark().copyWith(
    colorScheme: ColorScheme.fromSeed(
      seedColor: Style.primaryColorDark,
      primary: Style.primaryColorDark,
      secondary: Style.secondaryColorDark,
      surface: Style.backgroundColorDark,
      brightness: Brightness.dark,
    ),
    textTheme: Style.textTheme,
  );

  void _changeLanguage(String languageCode) {
    setState(() {
      _locale = _locale.languageCode == "en" ? Locale("th") : Locale("en");
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'LukeCreated',
      localizationsDelegates: AppLocalizations.localizationsDelegates,
      locale: _locale,
      supportedLocales: [
        Locale('en'), // English
        Locale('th'), // Thai
        // Locale("zh"), // Chinese
      ],
      theme: _lightTheme,
      darkTheme: _darkTheme,
      themeMode: ThemeMode.system,
      home: MyHomePage(
        lightTheme: _lightTheme,
        darkTheme: _darkTheme,
        changeLanguage: _changeLanguage,
        locale: _locale,
      ),
    );
  }
}

class MyHomePage extends StatefulWidget {
  final ThemeData lightTheme;
  final ThemeData darkTheme;
  final Locale locale;
  final void Function(String) changeLanguage;
  const MyHomePage({
    super.key,
    required this.lightTheme,
    required this.darkTheme,
    required this.changeLanguage,
    required this.locale,
  });

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final String contactEmail = 'contact@lukecreated.com';
  ThemeMode _themeMode = ThemeMode.system;
  ThemeData get currentTheme {
    if (_themeMode == ThemeMode.light) {
      return widget.lightTheme;
    } else if (_themeMode == ThemeMode.dark) {
      return widget.darkTheme;
    } else {
      final brightness = MediaQuery.of(context).platformBrightness;
      setState(() {
        _themeMode =
            brightness == Brightness.light ? ThemeMode.light : ThemeMode.dark;
      });
      return brightness == Brightness.light
          ? widget.lightTheme
          : widget.darkTheme;
    }
  }

  late String onSelectingLang;

  @override
  initState() {
    super.initState();

    onSelectingLang = widget.locale.languageCode;
  }

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
              child: ScrollConfiguration(
                behavior: ScrollBehavior().copyWith(scrollbars: false),
                child: SingleChildScrollView(
                  padding: const EdgeInsets.all(Style.defaultPadding),
                  child: mainBodyContents(),
                ),
              ),
            ),
            bottomIconsShortcut(),
          ],
        ),
      ),
    );
  }

  Column mainBodyContents() {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: <Widget>[
        _buildProfilePic(),
        Style.verticalSpace,
        _buildNameAndIntro(),
        Style.largeVerticalSpace,
        _buildEmailTxtButton(),
        Style.verticalSpace,
        _buildCareer(),
        Style.verticalSpace,
        _buildEducation(),
        Style.verticalSpace,
        _buildSkills(),
      ],
    );
  }

  Column _buildCareer() {
    return Column(
      children: [
        SelectableText(
          textAlign: TextAlign.center,
          AppLocalizations.of(context)!.career,
          style: Style.sectionTextStyle(
            currentThemeMode: _themeMode,
            overrideTextColor: currentTheme.colorScheme.onPrimaryContainer,
          ),
        ),
        Style.smallVerticalSpace,
        SelectableText(
          AppLocalizations.of(context)!.careerDescription,
          style: Style.bodyTextStyle(currentThemeMode: _themeMode),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Column _buildEducation() {
    return Column(
      children: [
        SelectableText(
          textAlign: TextAlign.center,
          AppLocalizations.of(context)!.education,
          style: Style.sectionTextStyle(
            currentThemeMode: _themeMode,
            overrideTextColor: currentTheme.colorScheme.onPrimaryContainer,
          ),
        ),
        Style.smallVerticalSpace,
        SelectableText(
          AppLocalizations.of(context)!.educationDescription,
          style: Style.bodyTextStyle(currentThemeMode: _themeMode),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  Column _buildSkills() {
    return Column(
      children: [
        SelectableText(
          textAlign: TextAlign.center,
          AppLocalizations.of(context)!.skillsAndInterests,
          style: Style.sectionTextStyle(
            currentThemeMode: _themeMode,
            overrideTextColor: currentTheme.colorScheme.onPrimaryContainer,
          ),
        ),
        Style.smallVerticalSpace,
        // Technical Skills
        _subSkillsGroup(
          title: '💻 Languages & Tools:',
          skills: [
            _skillChip('Python'),
            _skillChip('Dart & Flutter'),
            _skillChip('JavaScript & TypeScript'),
            _skillChip('SQL, noSQL'),
            _skillChip('Firebase, AWS, GCP'),
            _skillChip('REST APIs'),
            _skillChip('Git, Docker'),
          ],
        ),
        Style.verticalSpace,
        // Soft Skills
        _subSkillsGroup(
          title: "💙 ${AppLocalizations.of(context)!.softSkills}:",
          skills: [
            _skillChip('Teamwork & Collaboration'),
            _skillChip('Adaptability'),
            _skillChip('Problem-Solving'),
          ],
        ),
        Style.verticalSpace,
        // Languages
        _subSkillsGroup(
          title: "🌐 ${AppLocalizations.of(context)!.langISpeak}:",
          skills: [
            _skillChip(
              '${AppLocalizations.of(context)!.langISpeak_en} (Professional Working Proficiency)',
            ),
            _skillChip(
              '${AppLocalizations.of(context)!.langISpeak_th} (Native)',
            ),
            _skillChip(
              '${AppLocalizations.of(context)!.langISpeak_zh} (Intermediate)',
            ),
          ],
        ),
        Style.verticalSpace,
        // Interests
        _subSkillsGroup(
          title: "🎯 ${AppLocalizations.of(context)!.interests}:",
          skills: [
            _skillChip('Full Stack development'),
            _skillChip('Mobile App development'),
            _skillChip("ML & DL"),
            _skillChip('Cloud Computing'),
            _skillChip("System Design"),
          ],
        ),
      ],
    );
  }

  Widget _subSkillsGroup({
    required String title,
    required List<Widget> skills,
  }) {
    return Column(
      children: [
        SelectableText.rich(
          TextSpan(text: title),
          style: Style.subtitleTextStyle(currentThemeMode: _themeMode),
        ),
        Style.smallVerticalSpace,
        Wrap(
          spacing: 10,
          runSpacing: 10,
          alignment: WrapAlignment.center,
          children: skills,
        ),
      ],
    );
  }

  Column _buildNameAndIntro() {
    return Column(
      children: [
        SelectableText(
          textAlign: TextAlign.center,
          AppLocalizations.of(context)!.myName,
          style: Style.titleTextStyle(
            currentThemeMode: _themeMode,
            overrideTextColor: currentTheme.colorScheme.onSurface,
          ),
        ),
        Style.smallVerticalSpace,
        Text(
          "Software Developer",
          style: Style.subtitleTextStyle(
            currentThemeMode: _themeMode,
          ).copyWith(fontSize: 22),
        ),
        Style.smallVerticalSpace,
        SelectableText(
          AppLocalizations.of(context)!.introTxt,
          style: Style.bodyTextStyle(currentThemeMode: _themeMode),
          textAlign: TextAlign.center,
        ),
      ],
    );
  }

  CachedNetworkImage _buildProfilePic() {
    return CachedNetworkImage(
      imageUrl:
          "https://assets.lukecreated.com/static/images/self.luke/Luke.webp",
      // "https://assets.lukecreated.com/static/images/self.luke/Luke.jpeg",
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
            backgroundImage: const AssetImage('assets/Luke.webp'),
          ),
    );
  }

  Widget _skillChip(String text) {
    return Chip(
      label: Text(
        text,
        style: TextStyle(
          fontSize: Style.bodyTextSize,
          color: currentTheme.colorScheme.onSecondaryContainer,
        ),
      ),
      backgroundColor: currentTheme.colorScheme.secondaryContainer,
      labelPadding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
    );
  }

  TextButton _buildEmailTxtButton() {
    return TextButton.icon(
      icon: const Icon(Icons.email_outlined),
      label: Text("${AppLocalizations.of(context)!.email}: $contactEmail"),
      style: ElevatedButton.styleFrom(
        padding: const EdgeInsets.all(Style.defaultPadding),
        backgroundColor: currentTheme.colorScheme.secondaryContainer,
        foregroundColor: currentTheme.colorScheme.onSecondaryContainer,
        side: BorderSide(color: currentTheme.colorScheme.secondary, width: 3),
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(Style.defaultBorderRadius),
        ),
      ),
      onPressed:
          () async => showDialog(
            builder: (context) {
              return AlertDialog(
                backgroundColor: currentTheme.cardColor,
                icon: const Icon(Icons.announcement_outlined),
                title: Text(
                  AppLocalizations.of(context)!.emailActions,
                  style: TextStyle(color: currentTheme.colorScheme.onSurface),
                ),
                content: Text(
                  contactEmail,
                  textAlign: TextAlign.center,
                  style: TextStyle(color: currentTheme.colorScheme.onSurface),
                ),
                actions: [
                  TextButton(
                    onPressed: () {
                      Clipboard.setData(ClipboardData(text: contactEmail));
                      Navigator.of(context).pop();
                      Utils.showNoti(
                        content: Text(
                          textAlign: TextAlign.justify,
                          style: Style.bodyTextStyle(
                            currentThemeMode: _themeMode,
                          ).copyWith(
                            color: currentTheme.colorScheme.onInverseSurface,
                          ),
                          AppLocalizations.of(context)!.copiedToClipboard,
                        ),
                        context: context,
                        currentTheme: currentTheme,
                      );
                    },
                    child: Text(AppLocalizations.of(context)!.copy),
                  ),
                  TextButton(
                    style: TextButton.styleFrom(
                      backgroundColor:
                          currentTheme.colorScheme.tertiaryContainer,
                      foregroundColor:
                          currentTheme.colorScheme.onTertiaryContainer,
                    ),
                    onPressed: () {
                      Navigator.of(context).pop();
                      Utils.openLink('mailto:$contactEmail');
                    },
                    child: Text(
                      AppLocalizations.of(context)!.sendEmail,
                      style: TextStyle(
                        color: currentTheme.colorScheme.onSurfaceVariant,
                      ),
                    ),
                  ),
                  TextButton(
                    onPressed: () {
                      Navigator.of(context).pop();
                    },
                    child: Text(
                      AppLocalizations.of(context)!.close,
                      style: TextStyle(color: currentTheme.colorScheme.error),
                    ),
                  ),
                ],
              );
            },
            context: context,
          ),
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
      leadingWidth: MediaQuery.of(context).size.width * 0.2,
      centerTitle: true,
      leading: _topBarResumeBtn(),
      actions: [_topBarSettingBtn()],
    );
  }

  Padding _topBarResumeBtn() {
    return Padding(
      padding: const EdgeInsets.all(Style.tinyPadding),
      child:
          MediaQuery.of(context).size.width >= 580
              ? TextButton.icon(
                icon: const Icon(Icons.document_scanner_rounded),
                label: Text(AppLocalizations.of(context)!.resume),
                style: ElevatedButton.styleFrom(
                  backgroundColor: currentTheme.colorScheme.tertiaryContainer,
                  foregroundColor: currentTheme.colorScheme.onTertiaryContainer,
                  side: BorderSide(
                    color: currentTheme.colorScheme.tertiary,
                    width: 3,
                  ),
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(
                      Style.defaultBorderRadius,
                    ),
                  ),
                ),
                onPressed: () => openResume(),
              )
              : IconButton.filled(
                constraints: BoxConstraints(),
                enableFeedback: true,
                tooltip: 'Resume',
                style: IconButton.styleFrom(
                  backgroundColor: currentTheme.colorScheme.tertiaryContainer,
                  foregroundColor: currentTheme.colorScheme.onTertiaryContainer,
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(
                      Style.defaultBorderRadius,
                    ),
                  ),
                  side: BorderSide(
                    color: currentTheme.colorScheme.tertiary,
                    width: 5,
                  ),
                ),
                color: currentTheme.iconTheme.color,
                icon: const Icon(Icons.document_scanner_rounded),
                onPressed: () => openResume(),
              ),
    );
  }

  Padding _topBarSettingBtn() {
    return Padding(
      padding: const EdgeInsets.all(Style.smallPadding),
      child: PopupMenuButton<String>(
        offset: Offset.fromDirection(90, 10),
        popUpAnimationStyle: Style.animationStyle,
        position: PopupMenuPosition.under,
        menuPadding: EdgeInsets.all(Style.smallPadding),
        enableFeedback: true,
        tooltip: AppLocalizations.of(context)!.settingsBtnTooltip,
        icon: Icon(
          Icons.settings_applications,
          color: currentTheme.iconTheme.color,
          semanticLabel: AppLocalizations.of(context)!.settings,
        ),
        onSelected: (String value) async {
          switch (value) {
            case "change-theme":
              _changeTheme();
              break;
            case "change-language":
              setState(() {
                onSelectingLang = widget.locale.languageCode;
              });
              await showDialog(
                context: context,
                builder: (context) {
                  return StatefulBuilder(
                    builder: (context, setDialogState) {
                      return AlertDialog(
                        backgroundColor: currentTheme.cardColor,
                        title: Text(
                          AppLocalizations.of(context)!.changeLanguage,
                          style: TextStyle(
                            color: currentTheme.colorScheme.onSurface,
                          ),
                        ),
                        content: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            ListTile(
                              enableFeedback: true,
                              title: Text(
                                'ไทย',
                                style: TextStyle(
                                  color: currentTheme.colorScheme.onSurface,
                                ),
                              ),
                              leading: Radio<String>(
                                value: "th",
                                groupValue: onSelectingLang,
                                onChanged: (String? selectedLanguage) {
                                  if (selectedLanguage != null) {
                                    setDialogState(() {
                                      onSelectingLang = selectedLanguage;
                                    });
                                  }
                                },
                              ),
                            ),
                            ListTile(
                              enableFeedback: true,
                              title: Text(
                                'English',
                                style: TextStyle(
                                  color: currentTheme.colorScheme.onSurface,
                                ),
                              ),
                              leading: Radio<String>(
                                value: "en",
                                groupValue: onSelectingLang,
                                onChanged: (String? selectedLanguage) {
                                  if (selectedLanguage != null) {
                                    setDialogState(() {
                                      onSelectingLang = selectedLanguage;
                                    });
                                  }
                                },
                              ),
                            ),
                          ],
                        ),
                        actions: [
                          TextButton(
                            onPressed: () => Navigator.of(context).pop(),
                            child: Text(AppLocalizations.of(context)!.cancel),
                          ),
                          TextButton(
                            style: TextButton.styleFrom(
                              backgroundColor:
                                  currentTheme.colorScheme.tertiaryContainer,
                              foregroundColor:
                                  currentTheme.colorScheme.onTertiaryContainer,
                            ),
                            onPressed: () {
                              if (widget.locale.languageCode !=
                                  onSelectingLang) {
                                widget.changeLanguage(onSelectingLang);
                              }
                              Utils.showNoti(
                                content: Text(
                                  textAlign: TextAlign.justify,
                                  style: Style.bodyTextStyle(
                                    currentThemeMode: _themeMode,
                                  ).copyWith(
                                    color:
                                        currentTheme
                                            .colorScheme
                                            .onInverseSurface,
                                  ),
                                  AppLocalizations.of(context)!.languageUpdated,
                                ),
                                context: context,
                                currentTheme: currentTheme,
                              );
                              Navigator.of(context).pop();
                            },
                            child: Text(AppLocalizations.of(context)!.confirm),
                          ),
                        ],
                      );
                    },
                  );
                },
              );
              break;
          }
        },
        itemBuilder:
            (BuildContext context) => <PopupMenuEntry<String>>[
              PopupMenuItem<String>(
                value: 'change-theme',
                child: ListTile(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(
                      Style.defaultBorderRadius,
                    ),
                  ),
                  leading: Icon(
                    _themeMode == ThemeMode.light
                        ? Icons.dark_mode
                        : Icons.light_mode,
                  ),
                  title: Text(AppLocalizations.of(context)!.changeTheme),
                ),
              ),
              PopupMenuItem<String>(
                value: 'change-language',
                child: ListTile(
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(
                      Style.defaultBorderRadius,
                    ),
                  ),
                  leading: const Icon(Icons.language),
                  title: Text(AppLocalizations.of(context)!.changeLanguage),
                ),
              ),
            ],
      ),
    );
  }

  Expanded bottomIconsShortcut() {
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
                      () => Utils.openLink("https://github.com/n-luke-th"),
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
                      () => Utils.openLink("https://linkedin.com/in/aium-luke"),
                  icon: SvgPicture.asset(
                    "assets/linkedin-icon-svgrepo-com.svg",
                    semanticsLabel: 'LinkedIn',
                  ),
                ),
              ),
              // // LeetCode
              // SizedBox(
              //   width: Style.defaultIconShortcutSize,
              //   child: IconButton(
              //     tooltip: "LeetCode",
              //     onPressed:
              //         () => Utils.openLink("https://leetcode.com/n-luke/"),
              //     icon: SvgPicture.asset(
              //       "assets/leetcode-svgrepo-com.svg",
              //       semanticsLabel: 'LeetCode',
              //     ),
              //   ),
              // ),
            ],
          ),
        ),
      ),
    );
  }

  Future<bool> openResume() {
    return Utils.openLink(
      'https://assets.lukecreated.com/public/resume/Luke_Resume-v4.pdf',
    );
  }
}
