import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class Style {
  // Space & Sizes

  /// Vertical space with a height of 20.
  static const SizedBox verticalSpace = SizedBox(height: 20);

  /// Horizontal space with a width of 20.
  static const SizedBox horizontalSpace = SizedBox(width: 20);

  /// Small vertical space with a height of 10.
  static const SizedBox smallVerticalSpace = SizedBox(height: 10);

  /// Small horizontal space with a width of 10.
  static const SizedBox smallHorizontalSpace = SizedBox(width: 10);

  /// Tiny vertical space with a height of 5.
  static const SizedBox tinyVerticalSpace = SizedBox(height: 5);

  /// Tiny horizontal space with a width of 5.
  static const SizedBox tinyHorizontalSpace = SizedBox(width: 5);

  /// Large vertical space with a height of 30.
  static const SizedBox largeVerticalSpace = SizedBox(height: 30);

  /// Large horizontal space with a width of 30.
  static const SizedBox largeHorizontalSpace = SizedBox(width: 30);

  /// Huge vertical space with a height of 50.
  static const SizedBox hugeVerticalSpace = SizedBox(height: 50);

  /// Huge horizontal space with a width of 50.
  static const SizedBox hugeHorizontalSpace = SizedBox(width: 50);

  /// Tiny padding value of 4.0.
  static const double tinyPadding = 4.0;

  /// Small padding value of 8.0.
  static const double smallPadding = 8.0;

  /// Default padding value of 16.0.
  static const double defaultPadding = 16.0;

  /// Large padding value of 32.0.
  static const double largePadding = 32.0;

  /// Medium padding value of 24.0.
  static const double mediumPadding = 24.0;

  /// Tiny icon size of 4.0.
  static const double tinyIconSize = 4.0;

  /// Small icon size of 8.0.
  static const double smallIconSize = 8.0;

  /// Default icon size of 16.0.
  static const double defaultIconSize = 16.0;

  /// Medium icon size of 24.0.
  static const double mediumIconSize = 24.0;

  /// Large icon size of 32.0.
  static const double largeIconSize = 32.0;

  /// Default shortcut icon size of 50.
  static const double defaultIconShortcutSize = 50;

  /// Default border radius of 16.0.
  static const double defaultBorderRadius = 16.0;

  // Colors

  /// Primary light color: Color(0xFF1565C0).
  static const Color primaryColorLight = Color(0xFF1565C0); //

  /// Secondary light color: Color(0xFF1867C3).
  static const Color secondaryColorLight = Color(0xFF1867C3); //

  /// Background light color: Color(0xccF4F9FE).
  static const Color backgroundColorLight = Color(0xccF4F9FE); //

  /// Text light color: Color(0xFF727208).
  static const Color textColorLight = Color(0xFF727208);

  /// Primary dark color: Color(0xFF00BCD4).
  static const Color primaryColorDark = Color(0xFF00BCD4); //

  /// Secondary dark color: Color(0xFF38CEE6).
  static const Color secondaryColorDark = Color(0xFF38CEE6); //

  /// Background dark color: Color(0x800C252B).
  static const Color backgroundColorDark = Color(0x800C252B); //

  /// Text dark color: Color(0xFF979736).
  static const Color textColorDark = Color(0xFF979736);

  /// Secondary text light color: Color(0xFF211010).
  static const Color secondaryTextColorLight = Color(0xFF211010);

  /// Secondary text dark color: Color(0xFFE4C9C9).
  static const Color secondaryTextColorDark = Color(0xFFE4C9C9);

  // Text Styles

  /// Section text size of 20.
  static const double sectionTextSize = 20;

  /// Title text size of 24.
  static const double titleTextSize = 24;

  /// Subtitle text size of 18.
  static const double subtitleTextSize = 18;

  /// Body text size of 16.
  static const double bodyTextSize = 16;

  /// Text theme for the app.
  static final textTheme = TextTheme().merge(GoogleFonts.krubTextTheme());

  /// Returns a TextStyle for titles based on the current theme mode.
  static TextStyle titleTextStyle({
    required ThemeMode currentThemeMode,
    Color? overrideTextColor,
  }) => TextStyle(
    fontFamily: GoogleFonts.krub().fontFamily,
    // fontFamilyFallback: ["sans-serif"],
    fontSize: titleTextSize,
    fontWeight: FontWeight.bold,
    color:
        overrideTextColor ??
        (currentThemeMode == ThemeMode.light ? textColorLight : textColorDark),
  );

  /// Returns a TextStyle for subtitles based on the current theme mode.
  static TextStyle subtitleTextStyle({
    required ThemeMode currentThemeMode,
  }) => TextStyle(
    fontFamily: GoogleFonts.krub().fontFamily,
    // fontFamilyFallback: ["sans-serif"],
    fontSize: subtitleTextSize,
    fontWeight: FontWeight.bold,
    color: currentThemeMode == ThemeMode.light ? textColorLight : textColorDark,
  );

  /// Returns a TextStyle for body text based on the current theme mode.
  static TextStyle bodyTextStyle({required ThemeMode currentThemeMode}) =>
      TextStyle(
        fontFamily: GoogleFonts.krub().fontFamily,
        // fontFamilyFallback: ["sans-serif"],
        fontSize: bodyTextSize,
        color:
            currentThemeMode == ThemeMode.light
                ? secondaryTextColorLight
                : secondaryTextColorDark,
      );

  /// Returns a TextStyle for section titles based on the current theme mode.
  static TextStyle sectionTextStyle({
    required ThemeMode currentThemeMode,
    Color? overrideTextColor,
  }) => TextStyle(
    fontFamily: GoogleFonts.krub().fontFamily,
    // fontFamilyFallback: ["sans-serif"],
    fontSize: sectionTextSize,
    fontWeight: FontWeight.bold,
    color:
        overrideTextColor ??
        (currentThemeMode == ThemeMode.light ? textColorLight : textColorDark),
  );

  // Animation Styles

  /// Returns an AnimationStyle object with default values.
  static AnimationStyle animationStyle = AnimationStyle(
    curve: Curves.fastOutSlowIn,
    duration: const Duration(milliseconds: 300),
  );
}
